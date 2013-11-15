    $(document).ready(function() {
		var clientResource = new ClientResource("/feeds/summary");
		clientResource.get(function(representation) {
			var jsonRepresentation = new JsonRepresentation(representation);

			var listContent = "";
   			var elements = jsonRepresentation.getObject();
   			if(elements.length && elements.length>0){
	   			listContent = "<h3>News</h3><h4 class=\"blog\"><a href=\"/news.html\">Our blog&nbsp;<img src=\"/images/icons/feed-20.png\" alt=\"Syndication feed\" style=\"margin:5px\"/></a></h4>";
	   			listContent += "<ul class=\"blog\">";
	   			for (var i=0; i < elements.length; i++) {
	   				listContent += createFeedElement(elements[i]);
	   			}
	   			listContent += "</ul>";
   			}
   			$("#restletFeedSummary").html(listContent);
		}, MediaType.APPLICATION_JSON);
    });

	createFeedElement = function(element) {
		var result = "<li>";
		//result += element.published;
		result += "&nbsp;<a href=\""+element.uri+"\">"+element.title+"</a>";
		result += "</li>";
		return result;
	};