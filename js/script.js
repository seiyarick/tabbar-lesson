$('#tab-contents .tab[id != tab1]').hide();
// tab-contents .tabのidがtab1以外のidを非表示(hide())にする

$('#tab-menu a').on('click',function(event){
  // tab-menu aがクリックされたときにイベント発生↓↓
  $('#tab-contents .tab').hide();
  // tab-contents .tabを非表示(hide())にする
  $('#tab-menu .active').removeClass("active");
  // tab-menu .activeのactiveを削除する。タブを切り替える際にはcssの設定を削除しなければならない
  $(this).addClass("active");
  // $(this)の時にactiveクラスを追加。上のremoveClassで削除したため。
  $($(this).attr("href")).show();
  // .attr()はHTML要素を取得したり設定したりするメソッド。ここではhref属性を取得
  // .showは要素を表示するメソッド。$(this)の時attrで取得したhref属性の中身が表示される。
  // $(this)タブがクリックされたとき
  event.preventDefault();
  // デフォルトのクリックイベントを発生させない
})