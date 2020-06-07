---
title: "Let's make: Nintendo block to Megabyte/Gigabyte converter"
slug: lets-make-nintendo-block-to-megabyte-gigabyte-converter
comment_id: 5d93b51a97132a02c4355738
date: 2018-08-18T08:20:00.000Z
excerpt: "In this post we'll make a block converter in Ruby."
header_image: "/content/images/2019/10/blockconverter-gui.png"
tags: 
 - "Nintendo"
 - "Computer"
---

<p>To make a block converter, we need to know what the conversions are:</p><!--kg-card-begin: html--><figure class="kg-card kg-card-hascaption">
    <table style="width: 100%">
        <tr>
            <td></td>
            <th>MB</th>
            <th>GB</th>
            <th>Blocks</th>
        </tr>
        <tr>
            <th>MB</th>
            <td>1</td>
            <td>1/1024</td>
            <td>8</td>
        </tr>
        <tr>
            <th>GB</th>
            <td>1024</td>
            <td>1</td>
            <td>8192</td>
        </tr>
        <tr>
            <th>Blocks</th>
            <td>1/8</td>
            <td>1/8192</td>
            <td>1</td>
        </tr>
    </table>
    <figcaption>The value is the number of the size on top needed to get the size on the left</figcaption>
</figure><!--kg-card-end: html--><p>Then, we can start defining functions:</p><pre><code class="language-ruby">def bl_to_mb(bl) # block to mb
  return bl / 8
end

def bl_to_gb(bl) # block to gb
  return bl_to_mb(bl) / 1024 # nesting
end

def mb_to_bl(mb)
  return mb * 8
end

def gb_to_bl(gb)
  return gb * 8192
end

# we’ll include mb -&gt; gb and viceversa for the sake of completion
def mb_to_gb(mb)
  return mb / 1024
end

def gb_to_mb(gb)
  return gb * 1024
end</code></pre><p>We can wrap them up in a <code>module</code>, like so:</p><pre><code class="language-ruby">module Blockconverter
  # functions
end</code></pre><p>And use it like so:</p><pre><code class="language-ruby">puts Blockconverter::gb_to_bl(4).to_s + " blocks" # =&gt; "32768 blocks"</code></pre><p>We could wrap the returned integer in an interpolated string, like:</p><pre><code class="language-ruby">puts "#{Blockconverter::gb_to_bl(4)} blocks" # =&gt; "32768 blocks"</code></pre><p>Of course there’s no advantage in taking either way, so feel free to choose the one that best suits you.</p><p>Let me know in the comments how you used this code and/or how you updated it!</p>