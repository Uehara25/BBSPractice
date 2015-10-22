# BBSPractice

***

##大まかな仕様
 * 投稿できる情報は、本文と名前の二つ。  
 * 変数は全体を通して本文はmaintext, 名前は author という名前を用いる。エンコードはutf-8  
 * Postボタンで送信すれば反映される。  
 * 受け取ったデータはテキスト形式で一つのファイルに追記する形で保存する。  
 * 使用する関数はfs.writeFileSync()を用いると面白くないのでfs.writeFile()を用いてnode.jsらしく実装してみる。  

***

##取らぬ狸のなんとやら  
 * XSS対策を講じる
 * 禁止ワードの追加
 * ユーザー登録（パスワードによる認証あり）とそのユーザーの書き込み回数の記録、表示
