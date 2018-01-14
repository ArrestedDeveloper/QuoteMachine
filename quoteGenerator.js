
  $(document).ready(function() {
	var quotevalue="When you do the common things in life in an uncommon way, you will command the attention of the world.";
	var authorvalue="George Washington Carver";
	/**actualize twitter link**/
	$('#bT').attr('href', "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + quotevalue + "      " + authorvalue);
	
    $("#boxhandschuh").on("click", function(){

	/**Get API**/
	$.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
	  
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(object) {
      if (typeof object === 'string') {
       object = JSON.parse(object); 
	   
      }
    
    var html = "";
		/**alert("Json Object:      " + JSON.stringify(object));**/
		var quotekey = Object.keys(object)[0];
		var authorkey = Object.keys(object)[1];
		/**alert("Key quote:      " + quotekey);**/
		/**alert("Key author:      " + authorkey);**/
		
        
		quotevalue = object[quotekey];
		authorvalue = object[authorkey];
            /**alert("Quote value:      " + quotevalue);**/
			/**alert("Author value:      " + authorvalue);**/
			quotehtml = "<strong>" + quotevalue + "</strong> ";
			authorhtml = authorvalue;
			$(".quote").html(quotehtml);
			$("#author").html(authorhtml);
		 
    }
  });
		/**actualize twitter link**/
		$('#bT').attr('href', "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + quotevalue + "      " + authorvalue);
      
		/**$("#boxhandschuh").css({float:"left"});**/
		$('#boxhandschuh').animate({'margin-right' : "+=70%"});
		$('#boxhandschuh').animate({'margin-right' : "-=70%"});
		
  });
  
 
});