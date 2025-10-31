---
layout: default
title: Home
banner_image: /assets/images/banner.jpg
---


## Welcome to My Site

Hi! My name is Sam Vanspriell and this is my website. Here you will find details about my recent projects, examples of my work and any relevant life and professional updates. 

## Recent Updates

<div class="updates">
  {% for post in site.posts limit:3 %}
    <div class="update">
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <small>{{ post.date | date: "%B %d, %Y" }}</small>
      <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
      <a href="{{ post.url }}">Read more →</a>
    </div>
  {% endfor %}
</div>

<div class="view-all">
  <a href="/Blog/" class="button">View All Posts</a>
</div>

