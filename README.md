# BBSPractice


##大まかな仕様
 * 投稿できる情報は、本文と名前の二つ。  
 * 変数は全体を通して本文はmaintext, 名前は author という名前を用いる。エンコードはutf-8  
 * 送信ボタンを押せば反映される。  
 * 受け取ったデータはテキスト形式で一つのファイルに追記する形で保存する。  
 * 使用する関数はできるだけ非同期のものを用いてnode.jsらしく実装してみる。
 * XSS対策を講じる
 * 禁止ワードの追加


##取らぬ狸のなんとやら  
 * ユーザー登録（パスワードによる認証あり）とそのユーザーの書き込み回数の記録、表示
