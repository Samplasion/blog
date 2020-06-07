---
title: CSS: Why is dark grey lighter than regular grey?
slug: css-why-is-dark-grey-lighter-than-regular-grey
comment_id: 5ec7c1fc0107fc0f64556f69
date: 2020-06-13T08:00:00.000Z
excerpt: It's not easy to notice. Heck, I didn't even notice it until I read about it on Reddit. So what's the matter?
header_image: https://images.unsplash.com/photo-1565300667498-2843c56b4603?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ
tags: 
 - CSS
 - JS
 - JavaScript
 - Cascading Style Sheets
 - HTML
 - HyperText Markup Language
---

<!--kg-card-begin: html--><!-- wp:paragraph -->
<p>It's not easy to notice. Heck, I didn't even notice it until I read about it on Reddit. So what's the matter?</p>
<!-- /wp:paragraph -->

<!-- wp:more -->
<!--more-->
<!-- /wp:more -->

<!-- wp:html -->
<p class="codepen" data-height="414" data-theme-id="dark" data-default-tab="result" data-user="samplasion" data-slug-hash="MWaLROv" style="height: 414px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Grey vs Dark Grey">
  <span>See the Pen <a href="https://codepen.io/samplasion/pen/MWaLROv">
  Grey vs Dark Grey</a> by samplasion (<a href="https://codepen.io/samplasion">@samplasion</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script><br>
<!-- /wp:html -->

<!-- wp:paragraph -->
<p>This pen right here is a tangible example of what I mean. We can see that the <code>div</code> with class <code>darkgrey</code> <span class="colorpreview" style="background-color:darkgrey"></span> has a lighter background than the <code>div</code> with class <code>grey</code>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This is actually a remnant of the old web. Before the World Wide Web Consortium (W3C) existed, every browser had to implement its own way of rendering webpages. The biggest browser at the time was <a rel="noreferrer noopener" href="https://en.wikipedia.org/wiki/Netscape_Navigator" target="_blank">Netscape Navigator</a>, which, in the first versions, used the X window system on UNIX. The X window system has a set of colors, that includes a <code>grey</code> and a <code>dark grey</code>, respectively indicating 75% and 66% grey values.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>When the W3C went and merged the X11 palette into the new specification, there was a class between their <code>grey</code> and X11's <code>grey</code>. They eventually settled for the consortium's <code>grey</code> which was (and still is) a 50% grey <code>(128, 128, 128)</code>. The <code>darkgrey</code>, on the other hand, wasn't present and was imported as is.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>See where the problem is? At that point in time, the specification included a <code>grey</code> at 50% and a <code>darkgrey</code> at 66% carrying on until now. Even the CSS4 draft still uses these values.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Of course, this applies to all the JavaScript methods and properties that interface with colors (for example, canvas).</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>This was a brief showcase at the history behind this weird CSS bit, and I hope you enjoyed it. Stay safe!</p>
<!-- /wp:paragraph --><!--kg-card-end: html-->