---
title: "HTML/Javascript tip: Refreshing an image not the full page"
---

I was discussing with a friend about the creation of a monitoring dashboard in HTML. As any monitoring tool you want to be able to see the information in *real-time*, so you need to refresh the content....

One way of doing it is to refresh the whole page and this is easy, just use the meta tag:
`<META HTTP-EQUIV="Refresh" CONTENT="5; URL=http://www.grallandco.com/" >`
where 5 is the number of seconds between each refresh.

Javascript allows you to easily refresh a specific image of your page (a chart for example):

``` html
<img src="myChartServlet" name="chart1"/>
<script language="JavaScript">
  function loadImage() {
    var now = new Date();
    if (document.images) {
      document.images.chart1.src = 'myChartServlet?time='+now.getTime(); // add the time to avoid caching
    }
    setTimeout('loadImage()',1000);
  }
  setTimeout('loadImage()',1000);
</script>
```
You can obviously make the whole think dynamic and configurable...
