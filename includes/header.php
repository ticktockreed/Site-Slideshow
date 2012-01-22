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
		include( $_SERVER['DOCUMENT_ROOT'] .'/less/less.php'); 
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
			<h1 class="remove-bottom" id="logo">additions</h1>
			<h5>by Authentics</h5>     
		</header>          
		
		<nav rel="navigation" id="nav" class="sidebar">
			<ul>
				<li><a href="#" title="">Collection</a> 
				   
			 	 <ul class="collection">
				      <li><a href="/collection/plus.php" title="">plus</a></li>
	                  <li><a href="/collection/tier.php" title="">tier</a></li> 
	                  <li><a href="/collection/pipe.php" title="">pipe</a></li> 
	                  <li><a href="/collection/torch.php" title="">torch</a></li> 
	                  <li><a href="/collection/beacon.php" title="">beacon</a></li> 
	                  <li><a href="/collection/lantern.php" title="">lantern</a></li> 
	                  <li><a href="/collection/flare.php" title="">flare</a></li> 
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