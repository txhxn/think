var http = require('http');
var fs = require('fs');
var url = require('url');
// var qs = require('querystring');
var template = require('./lib/template.js');
var templateLanding = template.landing;
var templateInformation = template.information;
var templateWorklist = template.worklist;
var templateArchive = template.archive;
var design = require('./lib/design.js');
var designLanding = design.landing;
var designWorklist = design.worklist;
var express = require('express');
var stic = express();
stic.use(express.static('data'));
stic.use(express.static('css'));

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    if(pathname === '/'){

        var title = 'TortHolio';
        var design = designLanding();
        var template = templateLanding(title,design);
        response.writeHead(200);
        response.end(template);

    } else if(pathname === '/works'){ //worklist
      fs.readdir('./data',function(err, filelist){

        if(queryData.id === undefined){
          var list = `<ul>`;
          var i = 0;
          while(i<filelist.length){
            list += `<li><a href="/works?id=${filelist[i]}">${filelist[i]}</a></li>`;
            i += 1;
          }
          list += `</ul>`;

          var title = 'works';
          var description = 'Hello, this is WORKLIST page';
          var design = designWorklist;
          var template = templateWorklist(title,design,description,list);
          response.writeHead(200);
          response.end(template);
      } else { //inside the works list
        fs.readdir(`./data`,function(err,imglist){
          fs.readFile(`./data/${queryData.id}/description`,'utf8', function(err,description){
            fs.readdir(`./data/${queryData.id}/img`,function(err,imglist){

              var htmlimg =``;
              imglist.forEach(function(inlist){
                htmlimg = htmlimg + `<img src = "./data/${queryData.id}/img/${inlist}">`
              });
              var nodeimg = [];
              imglist.forEach(function(inlist){
                fs.readFile(`./data/${queryData.id}/img/${inlist}`,function(err,l){
                  nodeimg.push(l);
                });
              });

              var title = queryData.id;
              var template =
                `<!doctype html>
                <html>
                <head>
                  <title>WEB1 - ${title}</title>
                  <link rel = "stylesheet" type = "text/css" href = "css/inlist.css"></link>
                  <meta charset="utf-8">
                </head>
                <body>
                    <h1><a href="/">WEB</a></h1>
                    <ul>
                      <li><a href="/works">works</a></li>
                      <li><a href="/information">information</a></li>
                      <li><a href="/archive">archive</a></li>
                    </ul>
                    <h2>${title}</h2>
                    <p>${description}</p>
                    `+ htmlimg +
                  `</body>
                  </html>`;
              response.writeHead(200);
              response.end(template);
            });
          });
        });

      }
      });

    } else if(pathname === '/information'){
        var title = 'information';
        var description = 'Hello, this is information page';
        var template = templateInformation(title,description);
        response.writeHead(200);
        response.end(template);
    }
    else if(pathname === '/archive'){
        var title = 'archive';
        var description = 'Hello, this is archive page';
        var template = templateArchive(title,description);
        response.writeHead(200);
        response.end(template);
    }
    else {
      response.writeHead(404);
      response.end('Page Not found');
    }
});
// app.use(express.static('css'));
app.listen(2000);
