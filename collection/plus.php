<?php
// Common variables go here such as:
$pagetitle = "Plus - Salt and pepper shakers";
$pageslug = "collection-plus";
$category = "collection";
?>
	
<?php include $_SERVER['DOCUMENT_ROOT'] . "/includes/header.php"; ?>  

<div id="content">
		
   <div id="wrapper">	 
      
	<div id="copy">
		<h2>plus</h2>
		<span class="caption">A caption related to the product with dimensions 144mm x 208mm x 562mm</span>
	</div>
	
	   <!-- Slideshow controls -->
	   <div id="controls">
	         <div id="prev" class="btn">BACK</div>
	         <div id="playpause" class="btn">PLAY</div>
	         <div id="next" class="btn">NEXT</div>
	   </div>
	
      <div id="slideshow">
      
         <!-- We will have a collection of images -->
         <div class="active"><img src="/images/lights.png" alt="" /></div>
		 <div><img src="/images/packaging.png" alt="" /></div>
         <div><img src="/images/lights.png" alt="" /></div>
         <div><img src="/images/wooden-objects.png" alt="" /></div>
      	
      
      </div><!-- .images -->
   
   </div><!-- #wrapper -->
   
		
   
</div>        
   
<?php include $_SERVER['DOCUMENT_ROOT'] . "/includes/footer.php"; ?>   