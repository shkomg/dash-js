shkomg:dash-js
===============

Dash-js packaged for meteor

#Install

```meteor add skomg:dash-js```

#How to use

in html template:

```
<video class="dashjs-player" autoplay preload="none" controls="true">
  <source src="http://dash.edgesuite.net/envivio/Envivio-dash2/manifest.mpd" type='application/dash+xml'>
</video>
```

in js template:

```
Template.videos.rendered = function() {
    var k=Meteor.setInterval(function () {
        if (Dash) {
            Dash.createAll();
            Meteor.clearInterval(k);
        };
    },200);
};
```
 