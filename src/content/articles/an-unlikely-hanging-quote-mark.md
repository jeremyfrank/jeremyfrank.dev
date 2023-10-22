---
title: An Unlikely Hanging Quote Mark
date: 2013-03-27
tags:
  - css
url: https://www.viget.com/articles/an-unlikely-hanging-quote-mark/
---

On a recent project, the blockquote style that the designer put together seemed to be using a different typeface for the hanging quote mark, than for the text. The text below is set in [Lato](http://www.latofonts.com/) and you can clearly see the difference in the comp version on the left and the Lato quote mark on the right.

![](https://viget.com/uploads/image/blog/quotes.png)

## Don’t Waste Time, Just Ask The Designer

After spending some time unsuccessfully trying to find a typeface match for the quote mark, I asked the designer. It turns out that the custom quote mark IS set in Lato. However, it’s simply two commas doubled up next to each other and rotated 180°. We actually can do this in CSS by using a few different tricks, but first, the base styling.

## Base Styling + Rotation

Writing the CSS to style and position a hanging quote mark is pretty straightforward. Nothing too complicated here, but note the content and transform properties below (vendor prefixes omitted for brevity).

```css
blockquote p {
  font-size: 24px;
  line-height: 1.5;
  font-family: LatoItalic, sans-serif;
  margin: 0 0 0.7em;
}

blockquote p:first-child:before {
  content: ',,';
  display: block;
  float: left;
  font-size: 2.6em;
  line-height: 1;
  margin-left: -0.6em;
  transform: rotate(180deg);
}
```

Of course this won’t work so well in browsers that don’t support CSS transforms, but we can easily test for support using Modernizr, and provide a similar and acceptable fallback.

```css
.no-csstransforms blockquote p:first-child:before {
  content: '“';
}
```

And there we have it; unconventional custom hanging quote marks using commas, without resorting to using images, extra webfonts or custom icon fonts.

## Other Possibilities

Using transforms on individual characters like this can magically make additional characters available for use, such as: rotating single and double “angled” quotation marks (‹, «, », ›) 90° to create up and down pointers. It’s also quite possible that rotating stacked characters from :before and :after pseudo-elements, can produce some interesting iconography. However, with minor rendering inconsistencies among different platforms, browsers and typefaces, that level of complexity would warrant the use of an svg icon or a custom built icon font instead.
