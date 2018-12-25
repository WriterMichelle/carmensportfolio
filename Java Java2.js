<html>

		<head>
		
			<title>Javascript</title>
			
			
			
		</head>
		
		<body>
		
			
			<p>What is the magic word?</p>
			
			<p><input type="text" id="magicword"></p>
			
			<p><button id="checkMagicWord">Enter</p>
			
			<script type="text/javascript">
			
				document.getElementById("checkMagicWord").onlick = function() {
					
					var magicWordEntered =  document.getElementById("magicWord").value;
					
					var magicWord = "abracadabra";
					
					if (magicWordEntered == magicWord) {
						
						alert("You got it!");
						
					} else {
						
						alert("Nope, try again!");
						
					}
					
				}
				
			</script>
			
		</body>
		
	</html