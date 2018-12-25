
<html>

	<head>
	
    	<title>Javascript</title>
		
		</style type="text/css">
		
			#shape {
				
				width:200px;
				height:200px;
				background-color:red;
				
			}
		
    </head>
	
    <body>
	
		<p>Your time: <span id="timeTaken"></span></p>
	
		<div id="shape"></div>
	
          <script type="text/javascript">
		  
			var start = new Date().getTime();
		  
			document.getElementById("shape").onclick = function() {
				
				var end = new Date().getTime();
				
				var timeTaken = (end - start) / 1000;
				
				alert(timeTaken);
				
				document.getElementById(shape").style.display = "none";
				
				document.getElementById("timeTaken").innerHTML = timeTaken + "s";
				
				
			}


      	</script>
		
    </body>
	
</html>