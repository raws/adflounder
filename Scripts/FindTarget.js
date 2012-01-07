var scripts = document.getElementsByTagName("script");
for (var i = 0; i < scripts.length; i++) {
	var script = scripts[i];
	if (script !== null && script !== undefined) {
		var html = script.innerHTML;
		if (html !== null && html !== undefined) {
			var match = html.match(/var url = '(http.*?)'/i)
			if (match !== null && match !== undefined && match.length >= 2) {
				var target = match[1];
				
				document.getElementById("Interstitual").style.zIndex = "0";
				
				var overlay = document.createElement("div");
				overlay.id = "adflounder-overlay";
				overlay.innerHTML = "<a id='adflounder-link' href='" + target + "'>" + target + "</a>";
				document.body.lastChild.insertAdjacentElement("afterEnd", overlay);
				
				break;
			}
		}
	}
}
