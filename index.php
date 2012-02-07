<?php
// Common variables go here such as:
$pagetitle = "Home";
$pageslug = "home";
$category = "";
?>
<?php include $_SERVER['DOCUMENT_ROOT'] . "/includes/header.php"; ?>  




<div id="content">
		
   <div id="wrapper">	 
      

		<!--
		==================================
		bof Project Item
		==================================
		-->
		
		<div id="copy">
    	  <h2>Welcome to Additions</h2>
    	  <span class="caption">This probably won't remain here but we need one elsewhere so let's leave it here.</span>
		</div> 
		
		
      	<div id="slideshow">
	
			<div class="active"><img src="/images/titleslide.png" alt="title slide" width="5000" /></div>
			<div><img src="http://benjaminhubert.co.uk/projects/bellows/bellow-2.jpg" alt="bellows" width="5000" /></div>
			<div><img src="http://benjaminhubert.co.uk/projects/bellows/bellow-6.jpg" alt="bellows" width="5000" /></div>
			<div><img src="http://benjaminhubert.co.uk/projects/bellows/bellow-4.jpg" alt="bellows" width="5000" /></div>
			<div><img src="http://benjaminhubert.co.uk/projects/bellows/bellow-3.jpg" alt="bellows" width="5000" /></div>
			<div><img src="http://benjaminhubert.co.uk/projects/bellows/bellow-5.jpg" alt="bellows" width="5000" /></div>
			<div><img src="http://benjaminhubert.co.uk/projects/bellows/bellow-7.jpg" alt="bellows" width="5000" /></div>

	    </div>
	
	   <!-- Slideshow controls -->
	   <div id="controls">
	         <div id="back" class="btn"></div>
	         <div id="playpause" class="btn"></div>
	         <div id="next" class="btn"></div>
	   </div>
		
		<!--
		==================================
		eof Project Item
		==================================
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