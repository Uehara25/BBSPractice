/*   モジュール読み込み   */
var http = require("http");
var querystring = require("querystring");

/*   http.Serverオブジェクトの作成   */
var server = http.createServer(onRequest);

/*   サーバーの情報を格納する変数の宣言   */
var ADDRESS = 'localhost';
var PORT = '5000';

function onRequest(request, response){
    if(response.url == '/'){
        // 普通にサイトに来た時の処理
    }else{
        // 存在しない場所にアクセスした場合
    }

    if(request.method != 'POST'){
        // GET リクエストが来た時の処理。
        // 他のリクエストが来たときにどうしたらいいのか分からないので、とりあえず他もこれで処理します。
    }

    if(request.method == 'POST'){
        // POST リクエストが来た時の処理。テキストフォームと名前入力欄からデータを受け取り、保存する処理を行い、/postedに移動させる。
    }
}

server.listen(PORT, ADDRESS);

console.log("server is running at http://" + ADDRESS + ":" + PORT);