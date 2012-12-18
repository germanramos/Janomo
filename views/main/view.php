<!-- Example of view with 4 components -->
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title></title>
	
	<!--Public and common includes-->
	<script type="text/javascript" src="../../public/libs/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" src="../../public/libs/json2.min.js"></script>
	<script type="text/javascript" src="../../public/libs/janomo.js"></script>
	<link rel="stylesheet" type="text/css" href="../../public/css/reset.css">
	
	<!-- View includes -->
	<script type="text/javascript" src="script.js"></script>
	<script type="text/javascript" src="language_en.js"></script>
	<script type="text/javascript" src="language_es.js"></script>
	<script type="text/javascript" src="language_it.js"></script>
	<link rel="stylesheet" type="text/css" href="style.css">
	
	<!-- Module header includes -->
	<script type="text/javascript" src="../../modules/header/script.js"></script>
	<script type="text/javascript" src="../../modules/header/language_en.js"></script>
	<script type="text/javascript" src="../../modules/header/language_es.js"></script>
	<link rel="stylesheet" type="text/css" href="../../modules/header/style.css">
	
	<!-- Module writer includes -->
	<script type="text/javascript" src="../../modules/writer/script.js"></script>
	<script type="text/javascript" src="../../modules/writer/language_en.js"></script>
	<script type="text/javascript" src="../../modules/writer/language_es.js"></script>
	<link rel="stylesheet" type="text/css" href="../../modules/writer/style.css">
	
	<!-- Module reader includes -->
	<script type="text/javascript" src="../../modules/reader/script.js"></script>
	<script type="text/javascript" src="../../modules/reader/language_en.js"></script>
	<script type="text/javascript" src="../../modules/reader/language_es.js"></script>
	<link rel="stylesheet" type="text/css" href="../../modules/reader/style.css">
	
	<!-- Module changeLanguage includes -->
	<script type="text/javascript" src="../../modules/changeLanguage/script.js"></script>
	<script type="text/javascript" src="../../modules/changeLanguage/language_en.js"></script>
	<script type="text/javascript" src="../../modules/changeLanguage/language_es.js"></script>
	<script type="text/javascript" src="../../modules/changeLanguage/language_it.js"></script>
	<link rel="stylesheet" type="text/css" href="../../modules/changeLanguage/style.css">
		
</head>
<body>
	<div class="janomoModule" name="header" id="header1">
		<?php include '../../modules/header/view.html'; ?>
	</div>
	<div class="janomoModule" name="changeLanguage" id="changeLanguage1">
		<?php include '../../modules/changeLanguage/view.html'; ?>
	</div>
	<div class="janomoModule" name="writer" id="writer1">
		<?php include '../../modules/writer/view.html'; ?>
	</div>
	<div class="janomoModule" name="reader" id="reader1">
		<?php include '../../modules/reader/view.html'; ?>
	</div>
	<div class="janomoModule" name="reader" id="reader2">
		<?php include '../../modules/reader/view.html'; ?>
	</div>
	<div class="janomoModule" name="header" id="footer1">
		<?php include '../../modules/header/view.html'; ?>
	</div>
	<div><span class="janomoLanguage view" name="OtherMessage"></span></div>
	<?php include '../../public/includeExample.html'; ?>
</body>
</html>