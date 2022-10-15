---
title: "Twitter Boostrap 2 and Google Maps"

categories:
---
Like many developers I am using [Twitter Boostrap](http://twitter.github.com/bootstrap/) for my Web applications. Using this framework has been very helpful for me, since I am really not a good HTML/CSS developer. For now, on my site [Resultri](http://www.resultri.com/) I am using the default look and feel, will customize it later.

Lately, I wanted to integrate Google Map to my application, and when testing it, I had the bad surprise to see that the Controls and WindowInfo are not printed correctly as you can see in the screen shot below:

![]( http://2.bp.blogspot.com/-J9_mgk-eCmw/T4VCyQ86jFI/AAAAAAAAAT0/rc6uKm5qyQM/s400/Screen+Shot+2012-04-11+at+10.29.11+AM.png )

This is not a big issue at all, just a conflict on the **`img`** tag and its style (max-width) coming from Twitter Bootstrap. The quick fix :

* override the style of the **`img`** tag for the div that contains your map.

For example in my case the div for my map is define as:

``` html
<div id="resultriMap" />
```

You just need to add a new style to your page with the following definition:

``` css
<style>

#resultriMap img {  
  max-width: none;
}

</style>
```

After adding this to my page the map is correctly printed as you can see in the following screenshot :

![]( http://3.bp.blogspot.com/-BZje60RpKWo/T4VESYjt7gI/AAAAAAAAAT8/Az1xV8Xv2Dg/s320/Screen+Shot+2012-04-11+at+10.29.42+AM.png )
