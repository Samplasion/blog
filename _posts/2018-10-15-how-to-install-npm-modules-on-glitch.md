---
title: "How to install NPM modules on Glitch"
slug: how-to-install-npm-modules-on-glitch
alias: /how-to-install-npm-modules-on-glitch/index.html
comment_id: 5d93b51a97132a02c4355739
date: 2018-10-15T13:38:00.000Z
excerpt: "A quick tutorial on how to install NPM modules on Glitch"
image: "/assets/images/2019/11/npm.png"
tags: 
 - "Tutorial"
 - "Bot"
 - "JavaScript"
---

<p>Some days ago I was helping a friend hosting his project on <a href="https://glitch.com/" rel="nofollow">Glitch</a>. The question is, every time he wanted to add a module to his project, he would ask me to do so (not that it was a hassle for me). So, if you're here, it means you're asking the same question and, ladies and gentlemen, you found the right spot!</p><p>Alright, what you need to do is this:</p><!--kg-card-begin: html--><ul><li>Go in your project's <code>package.json</code></li><li>Click the "Add Package" button up in the code</li><li>Now input the name of the module you want to install. The options are two:<ul><li>Glitch can find the module. Click on its name and reboot the project.</li><li>Glitch can <em>not</em> find the module. Unfortunately, Glitch doesn't update its package search very often. In this case, manually add an entry in the <code>package.json</code>.</li></ul></li><li>???</li><li>Profit!</li></ul><!--kg-card-end: html--><figure class="kg-card kg-image-card kg-card-hascaption"><img src="{{ site.baseurl }}/assets/images/2019/08/glitch_add_package.png" class="kg-image"><figcaption>The "Add Package" button</figcaption></figure><p>If for some reason you can't do something reported here, ask in the comments and I'll reply ASAP.</p>