var janomo = janomo || (function () {
	//variables
	var defaultLanguage = "en";
	var subcriptions = [];
	var modules = [];
	
	//functions
	function translateView() {
		if (janomo.view.languages[defaultLanguage]) {
			document.title = janomo.view.languages[defaultLanguage]["MainTitle"];
			$("span.janomoLanguage.view").each(function () {
				literalElement = $(this);
				var literalName = literalElement.attr('name');
				if (janomo.view.languages[defaultLanguage][literalName]) {
					literalElement.html(janomo.view.languages[defaultLanguage][literalName]);
				} else {
					console.log("Janomo: translateView: Language resource not found: " + literalName);
				}
			});
		} else {
			console.log("Janomo: translateView: Aborting: Language '" + defaultLanguage + "' not found");
		}
	};
	
	function translateModule(janomoModule, moduleId) {
		if (janomo.modules[janomoModule].languages[defaultLanguage]) {
			$("#" + moduleId + " span.janomoLanguage." + janomoModule).each(function () {
				literalElement = $(this);
				var literalName = literalElement.attr('name');
				if (janomo.modules[janomoModule].languages[defaultLanguage][literalName]) {
					literalElement.html(janomo.modules[janomoModule].languages[defaultLanguage][literalName]);
				} else {
					console.log("Janomo: translateModule " + janomoModule + ": Language resource not found: " + literalName);
				}
			});
		} else {
			console.log("Janomo: translateModule " + janomoModule + ": Aborting: Language '" + defaultLanguage + "' not found");
		}
	};
	
	function includeModules() {
		$(".janomoModule").each(function () {
			var divModule = $(this);
			var moduleName = divModule.attr('name');
			var moduleId = divModule.attr('id');		
			//divModule.html(janomo.modules[moduleName].html);
			modules.push({name: moduleName, id: moduleId});
			janomo.translateModule(moduleName, moduleId);
		});
	}
	
	function subscribe(name, handler) {
		console.log("Janomo: subscribe: Subscribing event: " + name);
		for (var i = 0;  i < subcriptions.length; i++){
			if (subcriptions[i].name == name) {
				console.log("Janomo: subscribe: Already subscribed");
				return;
			}
		}
		subcriptions.push({name: name, handler: handler});
	}
	
	function event(name, data) {
		console.log("Janomo: event: Sedning event: " + name);
		for (var i = 0;  i < subcriptions.length; i++){
			if (subcriptions[i].name == name) {
				subcriptions[i].handler(data);
			}
		}
	}
	
	function init() {
		translateView();
		includeModules();
	}
	
	function changeLanguage(lang) {
		if (janomo.view.languages[lang]) {
			defaultLanguage = lang;
			translateView();
			$.each(modules, function () {
				janomo.translateModule(this.name, this.id);
			});
		} else {
			console.log("Janomo: changeLanguage: Aborting: Language '" + lang + "' not found");
		}
	}
	
	return {
		init: init,
		view: {},
		modules: {},
		translateView: translateView,
		translateModule: translateModule,
		getDefaultLanguage: function (val) { if (val == undefined) return defaultLanguage; defaultLanguage = val; },
		getLanguages: function () { return janomo.view.languages; },
		changeLanguage: changeLanguage,
		event: event,
		subscribe: subscribe
	};
} ());

$(document).ready(function () {
	janomo.init();
});