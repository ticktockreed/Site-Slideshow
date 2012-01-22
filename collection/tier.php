<?php
// Common variables go here such as:
$pagetitle = "Tier - a tiered fruit bowl";
$pageslug = "collection-tier";
$category = "collection";
?>

<?php include $_SERVER['DOCUMENT_ROOT'] . "/includes/header.php"; ?>  


<div id="content">
		
   <div id="wrapper">

	<div class="copy">
       <h2>tier</h2>
       <span class="caption">A caption related to the product with dimensions 144mm x 208mm x 562mm</span>
	</div>	 
   
      <div class="images">
      
         <!-- We will have a collection of images -->
         <img src="/images/wooden-objects.png" alt="" />

        <!-- 
		<img src="/images/packaging.png" alt="" />
         <img src="/images/lights.png" alt="" />
         <img src="/images/wooden-objects.png" alt="" />
      	-->

      </div><!-- .images -->

   </div><!-- #wrapper -->  

   <div id="controls">       
	   <ul>
	   	   <li><a href="/collection/plus.php" id="prevpage" class="ajaxcontent">Previous</a></li> 
 		   <li><a href="/index.php" id="nextpage" class="ajaxcontent">Next</a></li>
	   </ul>  
   </div>     
		
</div>  
	      
   
<?php include $_SERVER['DOCUMENT_ROOT'] . "/includes/footer.php"; ?>   