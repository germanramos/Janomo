var estatico = require('node-static'),
  http = require('http');
  
var webroot = '.';
  
var file = new(estatico.Server)(webroot, {
  cache: 600,
  headers: { 'X-Powered-By': 'Alberto lleva camisa!!!' }
});

var fs = require('fs');

String.prototype.regexIndexOf = function(regex, startpos) {
    var indexOf = this.substring(startpos || 0).search(regex);
    return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
}

function replaceInclude(string, context) {
	var token = '<?php';
    var beginPhpPos = string.indexOf(token);

    if (beginPhpPos > -1) {
		var before = string.substring(0, beginPhpPos);
		var after = string.substring(beginPhpPos);
		var endPhpPos = after.indexOf('?>');
		var phpCode = after.substring(0,endPhpPos);
		var after = after.substring(endPhpPos+2);

		var includePos = phpCode.indexOf('include');
		if (includePos > -1) {
			var startPath = phpCode.indexOf("'");
			var endPath = phpCode.lastIndexOf("'");
			var path = phpCode.slice(startPath + 1, endPath);
			console.log("Including: " + path);
			var includeHtml = fs.readFileSync(context + '/' + path);
			return before + includeHtml + replaceInclude(after, context);
		}    
    }
	return string;
}

function pathDeep(path) {
	var pos = path.indexOf('/');
	if (pos == -1) {
		return 0; 
	} else {
		return 1 + pathDeep(path.substring(pos+1));
	}
}

// create a server
http.createServer(function(req, res) {
    //console.log(req);	
	var posViews = req.url.indexOf(".php");
	if (posViews > -1) { 
		console.log("Sending DYNAMIC file: " + req.url.substring(1));
        var data = fs.readFileSync(req.url.substring(1));
        var string = data.toString();
		
		var posName = req.url.lastIndexOf('/');
		var context = req.url.substring(1,posName);
		
		//Include files directive
		string = replaceInclude(string, context);
		
        //Write
        res.end(string);
    } else { 
        req.addListener('end', function() {
            file.serve(req, res, function(err, result) {       
                if (err) {
                    console.error('Error serving %s - %s', req.url, err.message);
                  res.writeHead(err.status, err.headers);
                  res.end();
                } else {
                    console.log('Sending static file: %s', req.url);
                }
            });
        });
    }
}).listen(8080);
