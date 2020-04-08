template = {
  landing:function(title,design){
    return `
    <!DOCTYPE html>
    <html>
    	<head>
    		<title>${title}</title>
    		<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js"></script>
        <script src="./sketch.js"></script>

        <style>${design}</style>
    	</head>
    	<body>
        <a href = "./works">${title}</a>
        <div id="for_landing"></div>
    	</body>
    </html>

    `;
  },
  worklist:function(title,design,description,list){
    return `
      <!doctype html>
      <html>
      <head>
        <title>TortHolio - ${title}</title>
        <meta charset="utf-8">
        <style>${design}</style>
      </head>
      <body>
          <h1><a href="/">WEB</a></h1>
          <div id = "fixed">
            <ul>
              <li><a href="/works">works</a></li>
              <li><a href = "/archive">archive</a></li>
            </ul>
            <ul>
              <li><a href = "">vsco</a></li>
              <li><a href = "">brunch</a></li>
            </ul>
            <p>think@u.sogang.ac.kr COPY</p>
            <p>THinK is delightful!</p>
            <p>darkmode</p>
          </div>
          <h2>${title}</h2>
          <p>${description}</p>
          ${list}
      </body>
      </html>
      `;
  },
  information:function(title, body){
    return `
      <!doctype html>
      <html>
      <head>
        <title>THK - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
          <li><a href="/works">works</a></li>
          <li><a href="/information">information</a></li>
          <li><a href = "/archive">archive</a></li>
        </ul>
        <h2>${title}</h2>
        <p>${body}</p>
      </body>
      </html>
      `;
  },
  archive:function(title,body){
    return`
    <!doctype html>
    <html>
    <head>
      <title>TortHolio - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ul>
        <li><a href="/works">works</a></li>
        <li><a href="/information">information</a></li>
        <li><a href = "/archive">archive</a></li>
      </ul>
      <h2>${title}</h2>
      <p>${body}</p>
    </body>
    </html>
    `;
  }

};
module.exports = template;
