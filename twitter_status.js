var Twitter = require('twitter');
var fs = require("fs");
const matter = require('gray-matter');

console.log("Instantiating Twitter client...");

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

console.log("Instantiating new variables...");

var date = new Date();
var day = date.getDate()
  , month = date.getMonth() + 1
  , year = date.getFullYear()
  , pad = (n) => n < 10 ? "0" + n : n;

var dateString = `${year}-${pad(month)}-${pad(day)}`
  , post;

console.log("Looking for file...");

var file = fs.readdirSync("./_posts").filter(p => p.startsWith(dateString))[0];

if (file) {
    console.log("The file was found, extracting data from it...");
    var content = fs.readFileSync(`./_posts/${file}`);

    var slug = file.replace(dateString, "").substring(1).replace(".md", "");

    var fm = matter(content.toString());

    var title = fm.data.title;
    var excerpt = fm.data.excerpt || fm.content.split("<!--more-->")[0].trim();

    var tweet = `
New post on Samplasion's Blog: ${title}
https://blog.samplasion.js.org/${slug}
    `;

    console.log(`Tweeting:\n${tweet}`);

    client.post('statuses/update', {status: tweet},  function(error, tweet, response) {
        if(error) throw error;
        console.log("Tweet sent!");
    });

} else {
  console.log("The file wasn't found; no post today.");
}