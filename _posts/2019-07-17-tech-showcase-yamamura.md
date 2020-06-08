---
title: "Tech Showcase: Yamamura"
slug: tech-showcase-yamamura
comment_id: 5d93b51a97132a02c435573a
date: 2019-07-17T13:42:00.000Z
excerpt: "Today I want to showcase a bot NightYoshi and I made."
header_image: "/assets/images/2019/11/Schermata-2019-08-20-alle-15.35.03.png"
tags: 
 - "Tech Showcase"
 - "Bot"
 - "JavaScript"
---

<p>Today I want to start a new series on this blog, "Tech Showcase", and what better way to start it than to showcase this!</p><blockquote><strong>Update 26/03/2020</strong>: Yamamura is now discontinued since January 2nd. Sorry for that.</blockquote><p><a href="https://yamamura-bot.tk/" rel="nofollow">Yamamura</a> is a Discord bot that NightYoshi370 and I have created for Hacking communities. Originally made for the <a href="https://mariomods.net/" rel="nofollow">Mario Making Mods</a> Discord Server under the name CourseBot, it evolved to a bot that anyone can use on their own server.</p><p>As said, it evolved from an old bot, namely CourseBot, made when I took a break from Discord. Its main purpose was to be the main bot and manager of the <a href="https://mariomods.net/" rel="nofollow">Mario Making Mods</a> Discord server, but it quickly evolved when NightYoshi rebranded it to Yamamura, and then found a better alternative to the framework it was using, <code>discord.js-commando</code>.</p><p>I started helping NightYoshi when he discovered I could code bots. Since then, we started helping eachother, until we got to the point where I was a co-owner of CourseBot. We constantly shared pieces and snippets of code, until he sent me an invite to the Glitch project. Since then, NightYoshi and I have worked hard on making the bot the best it could be.</p><figure class="kg-card kg-image-card kg-card-hascaption"><img src="https://github.com/Samplasion/old_blog/raw/master/assets/images/yamamura-1.jpg" class="kg-image" alt="Akairo"><figcaption>When NightYoshi found Akairo</figcaption></figure><p>Then, one day, NightYoshi sent me a message, with a link to a framework similar to the one we were using, but better. I replied, «as long as the code works, I'm fine with it». Some time passed, and then NightYoshi told me he had started converting the framework. I offered to help him, and, slowly but surely, we started converting every command to the new framework.</p><p>It didn't go well at first. Umm, let's say Akairo outputs some cryptic error messages at times... (for example, <code>UnhandledPromiseRejectionWarning: Error: Command [object Object] already loaded.</code>. It's the only part of the error, there's no stacktrace). I don't know how, honestly, but NightYoshi managed to overcome them all (I feel very useless now that I think about this seriously, make a statue of him and put it in every big city in the world).</p><p>Anyways, the second problem we had was for audio playing. It was overall pretty buggy, music would end before actually reaching the end or it wouldn't start at all. The issue was fixed by switching to the module <code>ytdl-core-discord</code>, which was purposefully made for bots. I remember being pretty happy it finally worked.</p><figure class="kg-card kg-image-card kg-card-hascaption"><img src="https://github.com/Samplasion/old_blog/raw/master/assets/images/yamamura-2.jpg" class="kg-image" alt="Similar commands"><figcaption>The "similar commands" feature, still in beta state.</figcaption></figure><p>Porting and development continued smoothly, and the bot is constantly evolving. As of the writing of this article, the latest feature is "similar commands" which means that if you make a mistake while typing out a command or type out an invalid command, it'll give you a list of actual commands based on what you tried to execute.</p><p>To wrap things up, I want to thank NightYoshi370 for his help during the years and for his help in writing this article. If you enjoyed this article, why not invite the bot and check what awesome other features Yamamura has to offer? You can do so by <a href="https://yamamura-bot.tk/" rel="nofollow">visiting the Yamamura Website</a>. I hope to see you soon!</p>