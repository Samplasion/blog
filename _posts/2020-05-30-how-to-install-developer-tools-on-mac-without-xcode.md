---
title: How to install developer tools on Mac without Xcode
slug: how-to-install-developer-tools-on-mac-without-xcode
comment_id: 5ec63bcf1e6c2e0c683e5913
date: 2020-05-30T08:00:00.000Z
excerpt: See how you can download the Developer Tools without downloading 2+ GB of Xcode.
header_image: https://images.unsplash.com/photo-1508921234172-b68ed335b3e6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ
tags: 
 - "Apple"
 - "Computer"
 - "Mac"
 - "Tools"
 - "Tutorial"
---

<p>I've mentioned it multiple times in previous posts, but I feel like writing this post so I can just link to it when needed.</p><p>What are developer tools? Developer tools are a collection of commands (more than 50) that are commonly used by developers, such as <code>git</code>, <code>svn</code>, <code>perl</code> and other similar commands.</p><p>To install them, run:</p><!--kg-card-begin: html--><pre class="command-line language-bash" data-host="UsersMac" data-output="2"><code class=" language-bash">xcode-select --install
xcode-select: note: install requested for command line tools</code></pre><!--kg-card-end: html--><p>A new window should appear. Click on the <strong>Install</strong> button and wait for it to finish installing.</p><p>Now, when you run that command again, you'll get this:</p><!--kg-card-begin: html--><pre class="command-line language-bash" data-host="UsersMac" data-output="2"><code class=" language-bash">xcode-select --install
xcode-select: error: command line tools are already installed, use "Software Update" to install updates</code></pre><!--kg-card-end: html--><!--kg-card-begin: html--><p>That means they were successfully installed.</p>
<p>That's really it! If you were following a guide, <a href="javascript:window.go(-1)">click here to go back</a>.<!--kg-card-end: html--><p>Tell me what you think in the comments, and as always, stay safe!</p>