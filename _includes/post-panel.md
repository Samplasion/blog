{% capture image_markup %}
{% if post.image and include.resp %}
{% if post.image contains "://" %}
<img src="{{ post.image }}" alt="{{ post.title }}" />
{% else %}
{% responsive_image_block %}
{
  "path": {{ post.image | replace: "/assets", "assets" | jsonify | replace: "null", site.default_image }},
  "alt": {{ post.title | jsonify }},
  "title": {{ post.title | jsonify }}
}
{% endresponsive_image_block %}
{% endif %}
{% else %}
{% if post.image contains "://" %}
<img src="{{ post.image }}" alt="{{ post.title }}" />
{% else %}
<img src="{{ post.image }}" alt="{{ post.title }}" />
{% endif %}
{% endif %}
{% endcapture %}

{%- capture pub -%}
{% unless include.uglyDate %}
Posted <span class="tooltip">{{ post.date | timeago }}<span class="tooltiptext">{{ post.date | date_to_long_string }}</span></span>
{% else %}
Posted {{ post.date | date_to_long_string }}
{% endunless %}
{%- endcapture -%}

<div class="post column is-half">
    <article class="panel is-primary">
        <p class="panel-heading">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </p>
        <header class="panel-block is-active" style="flex-direction: column;">
            <div class="subtitle is-6">
                {%- comment -%}Posted on {{ post.date | date_to_long_string }}{%- endcomment -%}
                {{ pub }} &middot; {{ post.content | reading_time }} minute read
            </div><!-- .entry-meta -->
        </header><!-- .entry-header -->
        {% unless include.compact %}
        {% if post.image %}
            <div class="card-image panel-block is-active" style="padding:0;margin:0;">
                <figure class="image is-16by9" style="height: 100%;width: 100%;">
                    {{ image_markup }}
                </figure>
            </div>
        {% endif %}
        {% endunless %}
        <div class="panel-block is-active entry-content">
            <span>{{ post.excerpt }}&nbsp;&mdash;&nbsp;<a href="{{ post.url | relative_url }}">Read&nbsp;more&nbsp;&raquo;</a></span>
        </div>
        {% if post.tags %}
            <div class="panel-block is-active content entry-footer">
                <small>Tagged: 
                    {% for tag in post.tags %}
                        <a href="#{{ tag | slugify }}"> {{ tag }} </a>
                    {% endfor %}
                </small>
            </div><!-- .entry-footer -->
        {% endif %}
    </article>
</div>