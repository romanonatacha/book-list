const app = require('./src/config/custom-express');

app.listen(3000, function() {
    console.log(`Server running on port: 3000`);   
});

app.get('/', function(req, resp) {
    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Casa do Código </h1>
                </body> 
            </html>
        `
    );
});

app.get('/livros', function(req, resp) {
    resp.send(
        `
            <html>
                <head>
                    <meta charset="utf-8">
                </head>
                <body>
                    <h1> Lista de livros </h1>
                </body> 
            </html>
        `
    );
});
// const http = require('http');

// const server = http.createServer(function (req, resp) {

//     let html = '';

//     if (req.url == '/') {
//         html =  `
//             <html>
//                 <head>
//                     <meta charset="utf-8">
//                 </head>
//                 <body>
//                     <h1> Casa do Código </h1>
//                 </body> 
//             </html>
//         `;
//     } else if (req.url == '/livros') {
//         html = `
//             <html>
//                 <head>
//                     <meta charset="utf-8">
//                 </head>
//                 <body>
//                     <h1> Lista de Livros </h1>
//                 </body> 
//             </html>
//         `;
//     }
//     resp.end(html);
// });

// server.listen(3000);