# Blogspot-ClickFraud
Javascript library to prevent Adsense click fraud. The library detecting iframe and click interaction from the users. Your ads will disappear for a day when detected some weird interactions or clicks and would show again for the next day. Secure your Adsense for bad peoples.

## How to Use
This library need jQuery plugin. So, make sure to add jQuery on your website.<br>
**Configurations**
```
<script>
   // Limit click for one user
   var limitClick = 5;
   // Tag id for your tag
   var idAdsense = 'CUSTOM_TAG_ID';
</script>
<script async='async' src='//cdn.jsdelivr.net/npm/blogspot-clickfraud@0.0.4/index.min.js'/>
```

**Edit Adsense Scripts**
```
<div id="CUSTOM_TAG_ID">
   <!-- ADD YOUR ADSENSE SCRIPTS HERE! -->
</div>
```

## MIT License
```text
Copyright (c) 2018 Saiful Irham Wicaksana

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
