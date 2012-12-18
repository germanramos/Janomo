janomo.modules.writer = {};
janomo.modules.writer.languages = {};
$(document).ready(function () {
	console.log("Writer module ready");
	
	var container = $(".janomoModule[name=writer]");
	var textbox = container.find("textarea");
	
	container.find('a').click(function () {
		janomo.event("Hola", textbox.val());
	});
});