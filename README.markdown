jquery.sushibar
===============

jquery.sushibar is an image gallery plugin for jQuery.  It aims to 
provide a dead simple interface for displaying images contained in 
an unordered list tag.  Let's say you have the following HTML markup:


     <ul id="sushibar">
       <li><a href="images/1.JPG"><img src="images/thumbs/1.JPG"/></a></li>
       <li><a href="images/2.JPG"><img src="images/thumbs/2.JPG"/></a></li>
       <li><a href="images/3.JPG"><img src="images/thumbs/3.JPG"/></a></li>
       <li><a href="images/4.JPG"><img src="images/thumbs/4.JPG"/></a></li>
       <li><a href="images/5.JPG"><img src="images/thumbs/5.JPG"/></a></li>
       <li><a href="images/6.JPG"><img src="images/thumbs/6.JPG"/></a></li>
       <li><a href="images/7.JPG"><img src="images/thumbs/7.JPG"/></a></li>
       <li><a href="images/8.JPG"><img src="images/thumbs/8.JPG"/></a></li>
       <li><a href="images/9.JPG"><img src="images/thumbs/9.JPG"/></a></li>
     </ul>

jquery.sushibar will convert it into a friendly image gallery with just one line:

     $('#sushibar').sushibar();

A number of options are also available:

     $('#sushibar').sushibar({
       thumbWidth:    '16px',    // Make the thumbnails tiny
       thumbPadding:  '0px',     // With no padding between them
       visibleThumbs: 10         // And show 10 at once
     });

