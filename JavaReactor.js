
<html>

	<head>
	
    	<title>Javascript</title>
		
		<style type="text/css">
		
			#shape {
				
				width:200px;
				height:200px;
				background-color:red;
				display:none;
				position:relative;
				
			}
			
	</style>
		
    </head>
	
    <body>
	
		<p>Your time: <span id="timeTaken"></span></p>
	
		<div id="shape"></div>
	
          <script type="text/javascript">
		  
			var start = new Date().getTime
		  
			function makeShapeAppear() {
				
				var top =  Math.random() * 400;
				
				var left = Math.random() * 400;
				
				var width = Math.random() * 300;
				
				document.getElementById("shape").style.top = top + "px";
				
				document.getElementById("shape").style.left = left + "px";
				
				document.getElementById("shape").style.width = wdith + "px";
				
				document.getElementById("shape").style.height = height + "px";
				
				document.getElementById("shape").style.display = "block";

				start = new Date().getTime():	
				
			}
			
			function appearAfterDelay() {
				
				setTimeout(makeShapeAppear, Math.random() + 2000);
			
			}
			
			setTimeout(makeShapeAppear, Math.random() * 2000;
		  
			document.getElementById("shape").onclick = function() {
			
				document.getElementById(shape").style.display = "none";
				
				var end = new Date().getTime();
				
				var timeTaken = (end - start) / 1000;
				
				document.getElementById("timeTaken").innerHTML = timeTaken + "s";
				
				appearAfterDelay();
				
			}


      	</script>
		
    </body>
	
</html>