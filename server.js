var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one':{
    title: 'Article 1|BVK',
    date: '7-11-16',
    heading: 'Article One',
    content: `<p>
                    Artile will be written here//     Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//
                </p>
                
                <p>
                    Artile will be written here//     Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//
                </p>
                
                <p>
                    Artile will be written here//     Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//
                </p>
                `
},
'article-two':{
    title: 'Article 2|BVK',
    date: '6-11-16',
    heading: 'Article Two',
    content: `<p>
                    Artile will be written here//     Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//
                </p>
                
                <p>
                    Artile will be written here//     Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//
                </p>
                
                <p>
                    Artile will be written here//     Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//
                </p>
                `
},
'article-three':{
    title: 'Article 3|BVK',
    date: '5-11-16',
    heading : 'Article Three',
    content: `<p>
                    Artile will be written here//     Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//
                </p>
                
                <p>
                    Artile will be written here//     Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//
                </p>
                
                <p>
                    Artile will be written here//     Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//    Artile will be written here//
                </p>
                `
}
};
function createTemplate (data){
 var title = data.title;
 var date = data.date;
 var heading = data.heading;
 var content = data.content;
 var htmlTemplate = `<html>
     <head>
        <title>
       ${title}
       </title>    
         <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    <body>
         <div class="container">
        <div>
            <a href="/">Home</a> </div>
            <h3>
                ${heading}
            </h3>
            <div>
            ${date}
            </div>
            <div>
               ${content}
            </div>
        </div>
    </body>
    
    
    
    
   </html>
     `;
     return htmlTemplate;
    
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});



app.get('/:articleName', function (req, res) {
 var articleName = req.params.articleName;
 res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
