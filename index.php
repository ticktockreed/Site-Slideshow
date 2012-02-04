<?php
// Common variables go here such as:
$pagetitle = "Home";
$pageslug = "home";
$category = "";
?>
<?php include $_SERVER['DOCUMENT_ROOT'] . "/includes/header.php"; ?>  


<div id="content">
		
   <div id="wrapper">	 
      
		
		<div id="copy">
    	  <h2>Welcome to Additions</h2>
    	  <span class="caption">This probably won't remain here but we need one elsewhere so let's leave it here.</span>
		</div> 
		
		
      <div class="images">
      
         <!-- We will have a collection of images -->
         <img src="/images/titleslide.png" alt="title slide" width="5000" />


      </div>
   
   </div>

	     

	   <div id="controls">       
		   <ul>
		      <li><a href="/collection/tier.php" id="prevpage" class="ajaxcontent">Previous</a></li> 
  		   <li><a href="/collection/plus.php" id="nextpage" class="ajaxcontent">Next</a></li>
		   </ul>  
		</div>    
		
   
</div>  
		               
   
<?php include $_SERVER['DOCUMENT_ROOT'] . "/includes/footer.php"; ?>   