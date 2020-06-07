---
layout: outer
---

{% for post in site.posts %}

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
        {% for tag in post.tags %}
	        <a href="#{{ tag | slugify }}"> {{ tag }} </a>
        {% endfor %}
      </small>
		</div><!-- .entry-footer -->
	</article>
{% endfor %}
