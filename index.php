<?php
// Common variables go here such as:
$pagetitle = "Home";
$pageslug = "home";
$category = "";
?>
<?php include $_SERVER['DOCUMENT_ROOT'] . "/includes/header.php"; ?>  


<div id="content">
		
   <div id="wrapper">	 
      
		<!-- <div class="copy">
    	  <h2>Welcome to Additions</h2>
    	  <span class="caption">This probably won't remain here but we need one elsewhere so let's leave it here.</span>
		</div> -->
		
      <div class="images">
      
         <!-- We will have a collection of images -->
         <img src="/images/titleslide.png" alt="title slide" width="5000" />

        <!-- 
		<img src="/images/packaging.png" alt="" />
         <img src="/images/lights.png" alt="" />
         <img src="/images/wooden-objects.png" alt="" />
      	-->

      </div>
   
      <!-- 
   
         1. Add Images
         2. Add Caption 
         3. Ajax load php files with all content rather than just this one
         4. Keep looking at
            http://net.tutsplus.com/tutorials/javascript-ajax/how-to-load-in-and-animate-content-with-jquery/
            and http://wp.tutsplus.com/articles/getting-started-with-ajax-wordpress-pagination/     
   
   
         This will be for later:
         5. Collapsable navigation - suggest index pages for collection and shop, also suggest icons for these.
    
      -->
   
   </div>

	     

	   <div id="controls">       
		   <ul>
		      <li><a href="/collection/tier.php" id="prevpage" class="ajaxcontent">Previous</a></li> 
  		   <li><a href="/collection/plus.php" id="nextpage" class="ajaxcontent">Next</a></li>
		   </ul>  
		</div>    
		
   
</div>  
		               
   
<?php include $_SERVER['DOCUMENT_ROOT'] . "/includes/footer.php"; ?>   