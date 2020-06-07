---
title: How to mount the ESP on macOS
slug: how-to-mount-the-esp-on-macos
comment_id: 5d93b51a97132a02c4355743
date: 2019-09-30T19:27:14.000Z
excerpt: How many times do you have to mount the ESP to your computer? I bet it's almost never. Well, in this post we'll not only see once again how to do so, but we'll also implement an alias to do so with a handy memorable shortcut.
header_image: https://images.unsplash.com/5/unsplash-kitsune-3.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ
tags: 
 - Apple
 - Computer
 - Mac
---

<p>How many times do you have to mount the ESP to your computer? I bet it's almost never. But in the rare occasions that you do, you always end up looking up how to do so. Well, in this post we'll not only see once again how to do so, but we'll also implement an alias to do so with a handy memorable shortcut.</p><h4 id="the-basics">The basics</h4><p>So, to mount the ESP you first have to create a directory in the <code>/Volumes</code> dir:</p><pre><code class="language-bash">$ sudo mkdir /Volumes/ESP</code></pre><p>Then, we mount the EFI System partition to it:</p><pre><code class="language-bash">$ sudo mount -t msdos /dev/disk0s1 /Volumes/ESP</code></pre><p>If done correctly, you should see the ESP drive being added to the list in the sidebar.</p><h4 id="an-useful-alias">An useful alias</h4><p>If you get particularly tired of doing so, you can specify an alias to your <code>.bash_profile</code>, <code>.profile</code> or <code>.zshrc</code>:</p><pre><code class="language-bash">alias mountesp="sudo mkdir /Volumes/ESP &amp;&amp; sudo mount -t msdos /dev/disk0s1 /Volumes/ESP"</code></pre><p>You can then run these commands by using:</p><pre><code class="language-bash">$ mountesp</code></pre><p>You can obviously rename it however you like.</p><p>Thanks for reading this post, share it if you liked it. See you next post!</p>