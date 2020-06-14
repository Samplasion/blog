---
title: Google makes another attempt at hiding URLs in the omnibox
date: 2020-06-25 10:00:00 +0200
excerpt: ''
tags: []
image: ''

---
According to Google, domains are the most important part of the URL. Are they though, or is this just a marketing stunt? Point is, google is gradually hiding URLs, again.

<!--more-->

Danny Sullivan (@dannysullivan), "Google's public liaison of search", said this, right here:

{% twitter https://twitter.com/dannysullivan/status/1218156697811922944 %}

Yeah. Except not. As David Burgess (@davidburgess00) found out, Google hides the search results on their domain, which by itself is not that shocking.

{% twitter https://twitter.com/davidburgess00/status/1220815169472823296 %}

But coupled with the fact that Google is relentlessly trying to hide URLs since a lot of time.

And if that's not enough evidence for you, Chrome's Dev and Canary channels (version 85 as of writing) modify the appearance and behavior of web addresses in the address bar, *all* of them. They add a flag called "Omnibox UI Hide Steady-State URL Path, Query, and Ref" which hides everything in the current web address except the domain name, which would make this page's URL, `https://blog.samplasion.js.org/{{ page.title | slugify }}`, appear as just `blog.samplasion.js.org`.