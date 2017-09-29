---
title: The Players
layout: page
groups:
- name: Core regulars
  players:
  - name: Tom Young
    image: tom-y
  - name: Allan Smith
    image: allan
  - name: Dave Gotheridge
    image: dave
- name: Show regulars
  players:
  - name: Jen Kenny
    extra: Northampton
    image: jen
  - name: Thomas Lawrence
    extra: Northampton
    image: tom-l
  - name: Kierann Shah
    extra: Uncle Armando
    image: ki
  - name: Joe Turner
    extra: Uncle Armando
    image: joe
  - name: Mark Vigil
    extra: Uncle Armando
    image: mark
- name: Semi-regulars
  players:
  - name: Jaz Cox
    image: jaz
  - name: Neil Goulder
  - name: Safia Lamrani
    extra: On loan from The Improv Musical
    image: safia
  - name: Kate Knight
    extra: On loan from The Kneejerks
  - name: Jim Shields
    image: jim
  - name: Ryan Vernel
- name: Recurring guests
  players:
  - name: Kieron Attwood
  - name: Mel Bradley
    image: mel
  - name: Tracey Dell
    image: tracey
  - name: Russ Payne
    image: russ
  - name: Mihir Trivedy
- name: Musical team
  players:
  - name: Barry Speirs
    image: barry
  - name: Douglas Deans
    image: doug
  - name: David Burton
- name: Founding member/alumni
  players:
  - name: Mike Brown
    image: mike
---

{% for group in page.groups %}
<h3>{{ group.name }}</h3>
<ul class="player-list player-list-regulars">
    {% for player in group.players %}
    <li class="player">
        <img class="player-img" src="{% if player.image %}/assets/players/{{player.image}}-color.jpg{% else %}/assets/face.png{% endif %}">
        <div class="player-name">
            {{ player.name }}
        </div>
        {% if player.extra %}
        <div class="player-extra">
            {{player.extra}}
        </div>
        {% endif %}
    </li>
    {% endfor %}
</ul>
{% endfor %}

