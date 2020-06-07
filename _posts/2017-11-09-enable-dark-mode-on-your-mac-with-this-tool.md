---
title: "Enable Dark Mode on your Mac with this tool"
slug: enable-dark-mode-on-your-mac-with-this-tool
comment_id: 5d93b51a97132a02c4355736
date: 2017-11-09T18:18:00.000Z
excerpt: "In this post, we'll see how to darken macOS apps in a neat way!"
header_image: "null"
tags: 
 - "Apple"
 - "Tools"
 - "Mac"
 - "Tutorial"
---

<blockquote>Update 20/08/2019: I forgot to mention that this method only works on systems with a version of macOS up to 10.13. That's because macOS 10.14 Mojave includes a built-in out of the box dark mode. That was not known as of the writing of this post.</blockquote><p>OS X is known to be light, extremely light. That's why, an user named <strong>@guilhermerambo</strong> created <a href="https://medium.com/@guilhermerambo/how-to-enable-real-dark-mode-on-os-x-macos-14966f9f7d24" rel="nofollow">this tool</a>, which makes any system control in any app <strong>dark</strong> and is easy as 1-2-3! But this tool is <strong>not</strong> the perfection. In fact it can only darken apps on a <em>app per app basis</em>, and once you quit an app, you lose the "dark mode". The developer even said:</p><blockquote>The service I've written to enable dark mode in apps is just an experiment. You should not expect it to work or work reliably. I will not help anyone with this, it's just a proof of concept.</blockquote><p>If an app contains few or none of the system's built-in controls, the tool will be useless.</p><p>Two more disclaimers by the developer:</p><blockquote>Disclaimer 1: Please note that, while I have SIP disabled on my machine, I do not recommend it to anyone, it's an important security feature and you should only disable it if you know the implications.</blockquote><blockquote>Disclaimer 2: I am not responsible for any issues you might face while trying this out. If you computer blows up, it's not my fault.</blockquote><p>So, with this on mind, let's start!</p><h2 id="requisites">Requisites</h2><ul><li>OS X El Capitan or later ver.</li><li>Xcode and Command Line Tools installed</li><li><a href="https://support.apple.com/en-us/HT204899" rel="nofollow">System Integrity Protection (SIP)</a> disabled (<a href="https://www.imore.com/el-capitan-system-integrity-protection-helps-keep-malware-away" rel="nofollow">how-to</a>)</li></ul><h2 id="instructions">Instructions</h2><ol><li>Download <a href="https://github.com/insidegui/DarkMode/raw/master/Release/DarkMode.zip">this file</a> and extract it to <code>~/Library/Services</code>.</li><li>Open the app you want to darken and press <code>[NameoftheApp]</code> &gt; <code>Services</code> &gt; <code>Apply Dark Mode</code></li><li>Wait ~10 secs and —<strong>voilà!</strong>—your app should be dark.</li></ol>