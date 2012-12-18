janomo.modules.changeLanguage = {};
janomo.modules.changeLanguage.languages = {};
$(document).ready(function () {
	console.log("changeLanguage module ready");
	
	var container = $(".janomoModule[name=changeLanguage]");
	
	$.each(janomo.getLanguages(), function () {
		languageTranslation = janomo.modules.changeLanguage.languages[janomo.getDefaultLanguage()][arguments[0]];
		container.append("<p><a name='" + arguments[0] + "' href='#'>" + "<span class='janomoLanguage changeLanguage' name='" + arguments[0] + "'>" + languageTranslation + "</span>" + "</span></a></p>");
	});
	
	
	container.find('a').click(function () {
		janomo.changeLanguage(this.name);
	});
});