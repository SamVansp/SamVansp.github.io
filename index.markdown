---
layout: default
title: Home
banner_image: /assets/images/banner.jpg
---


## Welcome to My Site

Hi there! My name is Sam Vanspriell and this is my website, feel free to look around and explore some of my projects, my recent updates and look to my contact page if you want to reach out and get in touch! 
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

