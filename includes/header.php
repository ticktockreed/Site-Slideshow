
<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>

	<!-- Basic Page Needs
  ================================================== -->
	<meta charset="utf-8">
	<title><?php print $pagetitle; ?> - Additions by Authentics</title>
	<meta name="description" content="">
	<meta name="author" content="">
	<!--[if lt IE 9]>
		<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<!-- Mobile Specific Metas
  ================================================== -->
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	
	<?php
		// This compiles LESS files into CSS. 
		// Comment out once pushed live
		include( $_SERVER['DOCUMENT_ROOT'].'/less/less.php'); 
	?>
	
	<!-- CSS 
  ================================================== 
	<link rel="stylesheet" href="/stylesheets/base.css">
	<link rel="stylesheet" href="/stylesheets/skeleton.css">
	-->
	<link rel="stylesheet" href="/css/global.css">

	<!-- Favicons
	================================================== -->
	<link rel="shortcut icon" href="/images/favicon.ico">
	<link rel="apple-touch-icon" href="/images/apple-touch-icon.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/images/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/images/apple-touch-icon-114x114.png">
	
	<!-- JS
	================================================== -->
	<script src="http://code.jquery.com/jquery-1.4.4.min.js"></script>
	<script src="/javascripts/jquery.hashchange-1.3.js"></script>
	<script src="/javascripts/jquery.waitforimages.js"></script>
	<script src="/javascripts/jquery.cycle.all.js"></script>
	<script src="/javascripts/scripttest.js"></script>
</head>
<body class="<?php print($pageslug); ?>">



	<!-- Primary Page Layout
	================================================== -->

	<!-- Delete everything in this .container and get started on your own site! -->
  
	
  <ul class="visually-hidden">
    <li><a href="#content">Skip to content</a></li>        
    <li><a href="#nav">Skip to local navigation</a></li>
	</ul>

	<div class="container">  
		
		<header class="sixteen" id="header">
			<h1 class="remove-bottom" id="logo"><a href="/" title="additions">additions <span>by Authentics</span> </a></h1>
			    
		</header>          
		
		<nav rel="navigation" id="nav" class="sidebar">
			<ul>
				<li><a href="#" title="">Collection</a> 
				   
			 	 <ul class="collection">
				      <li><a href="/collection/plus.php" title="">plus</a><span class="icon"></span></li>
	                  <li><a href="/collection/tier.php" title="">tier</a><span class="icon"></span></li> 
	                  <li><a href="/collection/pipe.php" title="">pipe</a><span class="icon"></span></li> 
	                  <li><a href="/collection/torch.php" title="">torch</a><span class="icon"></span></li> 
	                  <li><a href="/collection/beacon.php" title="">beacon</a><span class="icon"></span></li> 
	                  <li><a href="/collection/lantern.php" title="">lantern</a><span class="icon"></span></li> 
	                  <li><a href="/collection/flare.php" title="">flare</a><span class="icon"></span></li> 
	               </ul>             
               
				</li> 
				<li><a href="#" title="">About</a>   
				   
				   <ul class="about">
					  <li><a href="#" title="">vision</a></li>
	                  <li><a href="#" title="">design</a></li> 
	                  <li><a href="#" title="">authentics</a></li>
	               </ul>  
                                                                    
				</li>
				<li><a href="#" title="">Shop</a></li>   
				<li><a href="#" title="">Contact</a></li>
			</ul>
		</nav>
		
   </div>