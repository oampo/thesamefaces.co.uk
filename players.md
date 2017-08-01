---
title: The Players
layout: page
regulars:
    - name: Tom Young
    - name: Allan Smith
    - name: Dave Gotheridge
    - name: Jen Kenny
occasionals:
    - name: Kierann Shah
    - name: Kieran Atwood
    - name: Russ Payne
    - name: Mark Vigil
    - name: David Buton
    - name: Joe Turner
alumni:
    - name: Mike Brown
---

### Regulars

<ul class="player-list player-list-regulars">
    {% for player in page.regulars %}
    <li class="player"><img src="/assets/face.png">{{ player.name }}</li>
    {% endfor %}
</ul>


### Occasionals

<ul class="player-list player-list-occasionals">
    {% for player in page.occasionals %}
    <li class="player"><img src="/assets/face.png">{{ player.name }}</li>
    {% endfor %}
</ul>

### Alumni

<ul class="player-list player-list-alumni">
    {% for player in page.alumni %}
    <li class="player"><img src="/assets/face.png">{{ player.name }}</li>
    {% endfor %}
</ul>
