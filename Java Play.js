<html>

		<head>
	
			<title>Javascript</title>
			
			<style type="text/css")>
			
			.circle {
			
				width:130px;
				height:130px;
				border-radius:50%;
				float:left;
				margin:50px;		
			
			}
		
			#red-circle {
			
				background-color: red;
			
			}
			
			#blue-circle {
			
				background-color: blue;
			
			}
			
			#yellow-circle {
			
				background-color: yellow;
			
			}
		
		</head>
	
		<body>
		
			<div class="circle" id="red-circle"></div>
	
			<div class="circle" id="blue-circle"></div>
			
			<div class="circle" id="yellow-circle"></div>
			
	
			<script type="text/javascript">
			
				document.getElementById("red-circle").onclick = function() {
					
					document.getElementById("red-circle").style.display = "none";
					
				}
				
				document.getElementById("blue-circle").onclick = function() {
					
					document.getElementById("blue-circle").style.display = "none";
					
				}
				
				document.getElementById("yellow-circle").onclick = function() {
					
					document.getElementById("yellow-circle").style.display = "none";
					
				}
		
		
		</script>
	
	</body>
	
</html>