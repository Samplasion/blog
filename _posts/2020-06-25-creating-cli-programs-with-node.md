---
title: Creating CLI programs with Node.js
date: 2020-06-25 10:00:00 +0200
tags: 
 - Node
 - JS
 - JavaScript
 - Terminal
image: 'https://www.renzocappelli.com/wp-content/uploads/2019/06/node.png'

---

A CLI program is a quick way of interfacing with the user without the need to create a User Interface. How do we make one with Node?

<!--more-->

A CLI program, in Node, is nothing more than a regular JS script that's accessed from the command line. There's nothing special to it.

You can access the arguments with `process.argv`. It returns an array like this:

```js
[
  '/usr/local/bin/node',
  '~/Documents/JSPlon/plon',
  'Test.plon'
]
```

The first two are always the location of the Node executable and the location of the script. Everything else is what the user passed to the program.

Once you've made your program, you must add this little snippet to your `package.json` to make your script work everywhere:

```json
"bin": {
    "command": "relative location"
}
```

Where `command` is what you'd like the user to type in the command line to get to your program (like: `plon`) and `relative location` is just the relative location of the script from your `package.json`.

If you want to test the program in the CLI without publishing, run `npm link`. You can now run your script typing the `command` from earlier.

Once you're done testing, type `npm unlink` to clean up.

When you want to publish, just type `npm publish` as usual and follow the steps.

The end result is that something like this works:

    plon test.plon

And this:

```bash
#! /usr/bin/env plon
```

Again, where `plon` is the comamnd from earlier.

Alright, we're done with this shorter tutorial; I hope you liked it. See you next time. Happy coding!

(PS: if you can figure out what Plon is, comment it and if you're right, I'll edit this post and you'll receive a mention)
