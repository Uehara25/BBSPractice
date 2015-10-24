var http = require("http")
    ,querystring = require("querystring")
    ,readline = require("readline")
    ,fs = require("fs");

var ADDRESS = 'localhost'
    ,PORT = '5000';

var server = http.createServer(onRequest);

function onRequest(request, response){
    if(request.url != '/'){
        
        response.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'});
        fs.readFile('./data/404.html', 'utf8', function(err, text){
            response.write(text);
            response.end();
        });

    }else{
        if(request.method != 'POST'){
            sendResponse();
        }else{
            request.data = '';
            request.on('data', function(chunk){
                request.data += chunk;
            });
            request.on('end',function(){
                var query = querystring.parse(request.data);
                data = query.author + '\n' + query.maintext .replace(/(\r\n|\n|\r)/g,'<br>') + '\n';
                fs.appendFile('./data/data.txt', data,'utf8');
                sendResponse();
            });
        }   
    }

    function sendResponse()
    {
        postCounter = 0;
        // 読み込んだ行が名前なのか本文なのか判定するため。毎回+1して偶奇で判断
        systemCnt = 0;
        response.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
        writeHeader();
        var rl = readline.createInterface({
            input: fs.createReadStream('./data/data.txt')
        });

        rl.on('line', function(line){
            if(systemCnt % 2 == 0){
                // 名前
                response.write("<dt>" + postCounter + " 名前:<b>" + line + "</b>");
                postCounter += 1;
            }else{
                // 本文
                response.write("<dd> " + line + "<br><br>");
            }
            systemCnt += 1;
        })

        rl.on('close', function(){
            writeFooter();
            response.end();
        })
    }
    function writeHeader()
    {
        var headerText = fs.readFileSync('./data/header.txt', 'utf8');
        response.write(headerText);
    }

    function writeFooter()
    {
        var footerText = fs.readFileSync('./data/footer.txt', 'utf8');
        response.write(footerText);
    }
}

server.listen(PORT, ADDRESS);

console.log("server is running at http://" + ADDRESS + ":" + PORT);