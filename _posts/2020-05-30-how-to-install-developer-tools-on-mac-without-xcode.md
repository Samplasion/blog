---
title: "How to install developer tools on Mac without Xcode"
slug: how-to-install-developer-tools-on-mac-without-xcode
comment_id: 5ec63bcf1e6c2e0c683e5913
date: 2020-05-30T08:00:00.000Z
excerpt: "See how you can download the Developer Tools without downloading 2+ GB of Xcode."
header_image: "https://images.unsplash.com/photo-1508921234172-b68ed335b3e6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
tags: 
 - "Apple"
 - "Computer"
 - "Mac"
 - "Tools"
 - "Tutorial"
---

I've mentioned it multiple times in previous posts, but I feel like writing this post so I can just link to it when needed.

What are developer tools? Developer tools are a collection of commands (more than 50) that are commonly used by developers, such as `git`, `svn`, `perl` and other similar commands.

To install them, run:

{% highlight bash %}
xcode-select --install
xcode-select: note: install requested for command line tools
{% endhighlight %}

{% capture code %}xcode-select --install  
xcode-select: note: install requested for command line tools{% endcapture %}
{% include highlight.html lang="bash" code=code host="Users-Mac" output="2" %}

A new window should appear. Click on the **Install** button and wait for it to finish installing.

Now, when you run that command again, you'll get this:

{% highlight bash %}
xcode-select --install
xcode-select: error: command line tools are already installed, use "Software Update" to install updates
{% endhighlight %}

That means they were successfully installed.

That's really it! If you were following a guide, [click here to go back](javascript:window.go(-1)).

Tell me what you think in the comments, and as always, stay safe!