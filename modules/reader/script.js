janomo.modules.reader = {};
janomo.modules.reader.languages = {};
$(document).ready(function () {
	console.log("Reader module ready");
	
	var container = $(".janomoModule[name=reader]");
	var messageList = container.find('#messageList');
	
	function sayHi(data) {
		messageList.append("<p>" + data + "</p>");
	}
	
	janomo.subscribe("Hola", sayHi);
});