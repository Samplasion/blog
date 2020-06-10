---
title: Using Forestry as a CMS for Jekyll
slug: using-forestry-as-a-cms-for-jekyll
date: 2020-06-20T10:00:00.000+02:00
excerpt: Jekyll sure is a wonderful system for quick static sites or personal projects,
  but I think we can all agree that adding posts is a bit hard for the non-programmers.
  No more, with Forestry.
image: https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
tags:
- Web
- GitHub
- HTML
- HyperText Markup Language

---
Jekyll sure is a wonderful system for quick static sites or personal projects, but I think we can all agree that adding posts is a bit hard for the non-programmers. **No more.**

[Forestry.io](https://forestry.io) is a free service with paid upgrades that poses itself as the solver of this problem. With it, you can easily manage your pages and posts, with a visually appealing interface and a WYSIWYG[^1] editor. Don't like it? No problem. Click the menu in the upper right corner and select "Raw Editor".

[^1]: What You See Is What You Get is a type of editor that shows styles as they would appear on a page, rather than showing markup tags.

What’s even juicier is that you can edit and add posts from mobile without a hassle.

I know it may seem like I'm sponsoring Forestry, but the truth of the matter is I'm not sponsored ~~though I'm always here _cough cough_~~. I just fell in love with the idea of having a CMS-like interface to manage my posts from.

{% include inarticle.html %}

**And you can even have a** `/admin` **endpoint.** Or anything you want to name it (as long, of course, that it doesn't overlap with some other name). That alone is something I love.

The interface sports a simple, customizable sidebar, so you can access your data easily. Here's how I organized mine, for example:

![My sidebar in Forestry.](/assets/uploaded/schermata-2020-06-10-alle-11-11-04.png "My sidebar in Forestry")

You can generate Front Matter templates to use in pages and/or posts in the appripriately named _Front matter_ section. In it, you can add endless templates, so that, when you create a post, you can switch templates to choose the one that most adapts to what you need.

In the _Media_ section, you can add images and videos that will be uploaded to a custom location that's chosen in the setup. My custom location is `/assets/uploads`, to differentiate uploads from Forestry vs. theme assets.

The _Menus_ section only work if you have the `jekyll-menus` plugin (which I do).