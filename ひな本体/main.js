// phina.js をグローバル領域に展開
phina.globalize();

// MainScene クラスを定義
phina.define('MainScene', {
  superClass: 'CanvasScene',
  init: function() {
    this.superInit();
    // 背景色を指定
    this.backgroundColor = "white";

    var rectGroup = DisplayElement().addChildTo(this);
    var rectGridX = Grid({
      width: 400,
      columns: 10,
      offset: 32
    });
    var rectGridY = Grid({
      width: 400,
      columns:10,
      offset: 64
    });

    (10).times(function(spanX) {
      (10).times(function(spanY) {
        var rect = RectangleShape().addChildTo(rectGroup);
        rect.backgroundColor="black";
        rect.fill="#FEFFD5";
        rect.height=30;
        rect.width=30;
        rect.setPosition(rectGridX.span(spanX), rectGridY.span(spanY));
        // タッチ判定を有効にする
        rect.setInteractive(true);
        //タッチ終了時消える
        rect.onpointover= function(){
          this.fill="#A6A879";
        };
        rect.onpointout= function(){
          this.fill="#FEFFD5";  
      };

      });
    });
    

  },
});

phina.main(function() {
  // アプリケーションを生成
  var app = GameApp({
    // MainScene から開始
    startLabel: 'main',
    // 画面をフィットさせない
    fit: false,
    // 画面サイズ
    width: 1000,
    height:1000,
  });
  // fps表示
  //app.enableStats();
  // 実行
  app.run();
});