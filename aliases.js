const fs = require("fs");
const matter = require('gray-matter');

fs.readdirSync("./_posts").forEach(entity => {
    const content = fs.readFileSync("./_posts/" + entity).toString();
    var fm = matter(content);

    if (!fm.data.slug) {
        return console.log(entity + " has no slug. Neeeext!");
    } else {
        const slug = fm.data.slug;
        console.log(entity + " has a slug.");

        var split = content.split("---");
        var rfm = split[1];
        var a = rfm.split("\n");
        a = a.map(s => {
            if (s.trim().startsWith("slug")) {
                return s + "\nalias: /" + slug + "/index.html"
            } else return s;
        });
        var ja = a.join("\n")
        split[1] = ja;
        content2 = split.join("---")

        console.log(content2);
        fs.writeFileSync("./_posts/" + entity, content2);
    }
})