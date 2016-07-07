---
layout: post
title:  "Sass Presentation"
date:   2016-07-03 14:25:37 -0500
categories: Sass Presentation
---
This is where my sass Presentation will live


<h2 class="em-test">Overview</h2>

---
<h3 class="em-test">Variables</h3>
---
{% highlight sass %}
/**
 * Variables
 */

$blue: #008ce4;
$cursive-font: cursive, serif;

.variable-example {
  p {
    color: $blue;
    font-family: $cursive-font;
  }
}

{% endhighlight %}

<div class="variable-example">
  <p>This is my variable example</p>
</div>

---
<h3 class="em-test">Nesting</h3>
---
{% highlight sass %}
/**
 * Nesting Sass Example
 */
.nesting-example {
  background-color: $grey-color;
  padding: em(35);

  ul {
    margin: 0;
    padding: 0;

    li { 
      list-style-type: square;

      a {
        text-decoration: none;
        color: $off-white;

        &:visited {
          color: $dark-blue;
        }

        &:hover {
          text-decoration: underline;
          color: $dark-blue;
        }
      }
    }
  }
}
{% endhighlight %}
{% highlight css %}
/**
 * Nesting CSS Example
 */
.nesting-example {
  padding: 2.1em;
  background-color: #efefef;
}

.nesting-example ul {
  margin: 0;
  padding: 0;
}

.nesting-example ul li { 
  list-style-type: square;
}

.nesting-example ul li a {
  text-decoration: none;
  color: #cecece;
}

.nesting-example ul li a:visited {
  color: #2428ba;
}

.nesting-example ul li a:hover {
  text-decoration: underline;
  color: #e40030;
}
{% endhighlight %}
<div class="nesting-example">
  <ul>
    <li>
      <a href="www.google.com">List Item One</a>
    </li>
    <li>List Item Two</li>
    <li>List Item Three</li>
  </ul>
</div>

---
<h3 class="em-test">Mixins</h3>
---
{% highlight sass %}
/**
 * Mixins
 */
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
     -moz-border-radius: $radius;
      -ms-border-radius: $radius;
          border-radius: $radius;
}

.mixin-example {
  .box { 
    border: 3px solid $dark-blue;
    width: 25%;
    @include border-radius(50%); 

      p {
        padding-top: 10%;
        text-align: center;
      }
  }
}
{% endhighlight %}

<div class="mixin-example">
  <div class="box">
    <p>Test</p>
  </div>
</div>

---
<h3 class="em-test">Functions</h3>
---
{% highlight sass %}
/**
 * Functions
 */

$browser-context: 16;

@function em($pixels, $context: $browser-context) {
  @return #{$pixels/$context}em;
}

h2 {
  font-size: em(32);

  @include media-query($on-laptop) {
    font-size: em(28);
  }
}
{% endhighlight %}

---
<h3 class="em-test">Demo</h3>
---

<div class="button-test">Press Me</div>
<div class="button-test">Press Me</div>
<div class="button-test">Press Me</div>
<div class="button-test">Press Me</div>
<div class="button-test">Press Me</div>

