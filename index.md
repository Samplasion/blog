---
layout: outer
---

{% comment %}
=======================
The following part extracts all the tags from your posts and sort tags, so that you do not need to manually collect your tags to a place.
=======================
{% endcomment %}
{% assign rawtags = "" %}
{% for post in site.posts %}
	{% assign ttags = post.tags | join:'|' | append:'|' %}
	{% assign rawtags = rawtags | append:ttags %}
{% endfor %}
{% assign rawtags = rawtags | split:'|' | sort %}

{% comment %}
=======================
The following part removes dulpicated tags and invalid tags like blank tag.
=======================
{% endcomment %}
{% assign tags = "" %}
{% for tag in rawtags %}
	{% if tag != "" %}
		{% if tags == "" %}
			{% assign tags = tag | split:'|' %}
		{% endif %}
		{% unless tags contains tag %}
			{% assign tags = tags | join:'|' | append:'|' | append:tag | split:'|' %}
		{% endunless %}
	{% endif %}
{% endfor %}

  <article class="panel is-primary">
		<p class="panel-heading">
      {{ post.title }}
		</p>
		<header class="panel-block is-active" style="flex-direction: column;">
      <div class="subtitle is-6">
        Posted on {{ post.date | date_to_long_string }}
      </div><!-- .entry-meta -->
		</header><!-- .entry-header -->
    {% if post.image %}
      <div class="card-image panel-block is-active" style="padding:0;margin:0;">
        <figure class="image is-16by9" style="height: 100%;">
            <img src="{{ post.image }}" />
				</figure>
			</div>
    {% endif %}
		<div class="panel-block is-active entry-content">
			{{ post.excerpt }}
		</div>
		<div class="panel-block is-active content entry-footer">
			<small>Tagged: 
        {% for tag in tags %}
	        <a href="#{{ tag | slugify }}"> {{ tag }} </a>
        {% endfor %}
      </small>
		</div><!-- .entry-footer -->
	</article>
{% endfor %}
