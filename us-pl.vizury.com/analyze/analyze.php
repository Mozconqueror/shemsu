

		<body onload='timeLoadImage();'>
		<div id="imageContainer"></div>
        <div id="logContainer"></div>
		<script language='javascript' type='text/javascript'>
      
			var beforeLoad = Math.round((new Date()).getTime());
			var isLoadCalled = false;
      		var csm = 5;
      		var isFP = true;
			
			var doLog = false;
 			
     		var loggerPixel = "<img src = 'https://us-pl.vizury.com/analyze/log.php?account_id=VIZVRM6751&tpcns=viz_637b0bc56a157"; // width=1 height=1 />      		
			
			function isCookieSet(){
				var bool = false;
			        var cookie=document.cookie;
			        uid  = cookie.split('=');
			        if(uid[1] !== undefined){ // check if the cookie is set
			                bool = true;
			        }
			        return bool;
			}
			var varCookieSet = isCookieSet();
			var cookiePresent = 'true';
			var pixelContent = '';
			var scrPixelContent = '';
			if( varCookieSet == true || cookiePresent == "true"){
				if( varCookieSet == true ){
					pixelContent = '';
					scrPixelContent = '';
				}
				document.getElementById("imageContainer").innerHTML = pixelContent;
				document.write(scrPixelContent);
			}


			function timeLoadImage(){
				isLoadCalled = true;
				var afterLoad = Math.round((new Date()).getTime());
				var finalLoadTime = (parseInt(afterLoad) - parseInt(beforeLoad))/1000;
				if(doLog){
					loggerPixel = loggerPixel + "&time="+finalLoadTime +"&cset="+varCookieSet+"' " + "width=1 height=1 />";
					document.getElementById("logContainer").innerHTML = loggerPixel
				}
			}
		</script>
		</body>
 