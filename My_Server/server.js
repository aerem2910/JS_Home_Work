"use strict";
var http = require("http");
var port = process.env.PORT || 1337;

const asciiArt = `
  ____       _                _    
 / ___|  ___| |_ _   _ _ __  | |_  
 \\___ \\ / _ \\ __| | | | '_ \\ | __| 
  ___) |  __/ |_| |_| | |_) || |_  
 |____/ \\___|\\__|\\__,_| .__/  \\__| 
                    |_|          
`;

http
    .createServer(function (req, res) {
        res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
        res.end(`HELLO WORLD\n${asciiArt}`);
    })
    .listen(port, (err) => {
        if (err) {
            console.error("Ошибка при запуске сервера:", err);
            return;
        }
        console.log(`Сервер запущен на http://localhost:${port}`);
    });




