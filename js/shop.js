$(document).ready(function(){
    //totop
    $('.totop').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0},750);
    })
    //起始狀態，所有item都是可視的
    $('.item').addClass('shownow');

    //篩選按鈕樣式
    $('.btn').click(function(){
        $('.btn').removeClass('letmedown');//先消除所有的btn樣式
        $(this).addClass('letmedown');//讓「這個」按紐增加樣式
    })

    //篩選功能-all
    $('#all').click(function(){
        $('.item').removeClass('shownow');
        $('.item').addClass('shownow');
    })
    //篩選功能-main
    $('#main').click(function(){
        $('.item').removeClass('shownow');
        $('.-main').addClass('shownow');
    })
    //篩選功能-rel
    $('#rel').click(function(){
        $('.item').removeClass('shownow');
        $('.-rel').addClass('shownow');
    })

    // 購物車↓
    $('button.openlist').click(function(){
        $('div.shoplist').addClass('shownow')
      })
      $('button.close').click(function(){
        $(this).parent().removeClass('shownow');
      })
    $('button.trash').click(function(){
        $(this).parent().addClass('shownone');
    })







})