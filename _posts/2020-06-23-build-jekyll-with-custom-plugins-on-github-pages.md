---
title: Build Jekyll with custom plugins on GitHub Pages
slug: build-jekyll-with-custom-plugins-on-github-pages
date: 2020-06-23T10:00:00.000+02:00
excerpt: What if I told you there's a way to bypass GitHub's Jekyll plugin whitelist
  limitation, and that it comes directly from GitHub?
tags:
- Plugins
- Free host
- GitHub
- Jekyll
image: "/assets/uploaded/schermata-2020-06-09-alle-23-32-08.png"

---
What if I told you there's a way to bypass GitHub's Jekyll plugin whitelist limitation, and that it comes directly from GitHub?

You probably know GitHub pages, and that it only allows for a limited set of plugins. That's because it has to be dead simple for users to get a website up and running in no time. But what about us who want more flexibility? There's actually a process that deals with that, which I'm gonna depict.

First of all, this solution is based on **GitHub Actions**, their in-house deployment and continuous integration solution. Using it, it's actually possible to create a virtual container with Jekyll in it.

It'll build our site in the `gh-pages` branch (so make sure to save anything you need saved) from the `master` branch.

One advantage of this approach is that you can explore the built site. Of course, don't modify it because the next time a build is triggered your work will be lost.

Another advantage is that you can schedule the builds. For example, I set mine at 00:01 UTC and at 08:01 UTC (the "new post" time).

Another plus is that once you set this up, you're OK forever. No more configurations. Well, unless you need to touch anything action-wise.

So, without further ado, let's start!

First of all, [create a Jekyll blog]({% post_url 2020-06-18-jekyll-101 %} "Jekyll 101") (or have one ready). Make sure it's in the `master` branch. If not, you can simply rename the branch.

Then create a file named `Gemfile` in the root of your project and paste in the following code:

{%- capture gemcode -%}
source "https://rubygems.org"

gem "jekyll"

group :jekyll_plugins do
    # Add your plugins here
end
{%- endcapture -%}
{% include highlight.html lang="ruby" code=gemcode %}

Where it says `# Add your plugins here`, you must add all of the plugins you included in `_config.yml` in the following format: `gem 'plugin-name'`.

Then, return to the homepage of the repo and switch to the _Actions_ tab and create a _New workflow_. _Set up a workflow yourself_ and paste in this code:

{%- capture code -%}
{%- raw -%}
name: Jekyll Deploy

on:
  push:
    branches:
      - master
  schedule:    
      - cron: "0 0 * * *"

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - name: GitHub Checkout
        uses: actions/checkout@v1
      - name: Bundler Cache
        uses: actions/cache@v1
        with:
          path: vendor/bundle
          key: ${{ runner.os }}-gems-${{ hashFiles('**/Gemfile.lock') }}
          restore-keys: |
            ${{ runner.os }}-gems-
      - name: Build & Deploy to GitHub Pages
        uses: joshlarsen/jekyll4-deploy-gh-pages@master
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          GITHUB_REPOSITORY: ${{ secrets.GITHUB_REPOSITORY }}
          GITHUB_ACTOR: ${{ secrets.GITHUB_ACTOR }}
{%- endraw -%}
{%- endcapture -%}{%- include highlight.html lang="yaml" code=code -%}

The `on.schedule[].cron` key follows a specific syntax that [you can practice on this website](https://crontab.guru/) if you need to schedule a build at one or more particular times a day. If you don't need scheduling, you can delete the `on.schedule` key entirely. With the setup I gave you, the action will be triggered **on push** (`on.push`) and **every day at midnight** (`on.schedule[].cron`). The name can be whatever you want, but it's what you'll see in the push deploy stats.

Ok, I admit it, I lied; you don't _need_ to be on the `master` branch, but it's already the default, so how bad can it be? The `on.push.branches[]` key controls the branches that trigger a build. **DON'T EVER SET THE** `gh-pages` **BRANCH AS A TRIGGER** if you don't want an endless loop!

Ok, now that you've tailored the code to your desires and needs, commit it. In the repo settings, change the _Source_ of your GitHub Pages site to the `gh-pages` branch. Now, I don't remember if the commit of the workflow triggers the workflow itself, but to be sure, you can make a very minor change and push that, then return to the homepage of your repo. Next to the _Last commit_ date, there should be a yellow dot. Click that and click _Details_ next to the name of the workflow (the one you set earlier). Now you can see the progress of the workflow. Once its done, access your published site and see... nothing different!

That's because we've only triggered a rebuild. But there's a difference in that you can now use any plugin you want.

If you think this is a clever workaround that GitHub will patch, think again: [the official Jekyll blog posted a similar method](https://jekyllrb.com/docs/continuous-integration/github-actions/), but it uses a different action, thus requiring slightly different steps (still outlined in that page).

With this approach come a couple problems though. First of all, the build time is longer (because the container downloads each plugin every time). For example, mine once reached 1 minutes.

If you use webhooks, you'll also notice double the `push` events, one for _your_ push and one for the _action's_ force-push.

All in all, I wouldn't say this isn't great. It's still free hosting after all. See you next time, happy blogging!