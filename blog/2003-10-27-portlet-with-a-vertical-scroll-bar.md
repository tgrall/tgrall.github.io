---
title: Portlet with a vertical scroll bar
---

To have a better control of the layout of your Portal Pages, you can use a
vertical scroll bar in portlet wihout having to use iFrame technology.
CSS provide us lof of power to do it.


1. Create a style in your portlet (or in the portlet container code):

``` html
<style>
.scroll<i>portletId</i> {
  height:200px;
  overflow: auto;
}
</style>
```


2. Use this style in a `DIV` section:

``` html
<div class="scrollportletId">
The content of this section will be vertically scrollable.
</div>
```
