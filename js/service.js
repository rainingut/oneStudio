$(document).ready(function(){
     //JQuery - totop
    $("#totop").click(function(e){// 點擊按鈕，頁面滑到最上方
      e.preventDefault();
      $('html, body').animate({scrollTop: 0},750);
    });

    //關掉提示浮動「點擊步驟可以查看詳情。」
    $('.prom').click(function(){
        $(this).css('display','none')
    })


     //剛進到頁面是沒有任何控制按鈕的
    $('.wrap2 .bgst button').css('display','none');
    //按到關掉按鈕，樣式拿掉
    $('.wrap2 .windowbtncloss').click(function(){
        //讓TOP鍵出現
        $("#totop").css('display','block')
        currentPage = 0;
        //先讓按鈕的disable全部false，不然會出錯😅
        $('.winsonbtnpre').attr('disabled',false)
        $('.winsonbtnnext').attr('disabled',false)
        //不要顯示任何步驟和控制按鈕
        $('.wrap2 .bgst button').css('display','none');
        $('.wrap2 .smwrapper').attr('data-page',0)
        // $('.wrap2 .smst').css('display','none');
        //關掉顯示樣式
        $('.wrap2').removeClass('windowforwrap2');
        $('.wrap2 .bgst').removeClass('windowforbgst');
        $('.wrap2 .smst').removeClass('windowforsmst');    
    })
        
    //🔸🔸上一步下一步🔸🔸
    currentPage = parseInt($('.wrap2 .smwrapper').attr('data-page'))
    const check = function(){//顯示/隱藏控制按鈕
        currentPage = parseInt($('.wrap2 .smwrapper').attr('data-page'))
        if(currentPage == 1){$('.winsonbtnpre').attr('disabled',true)}
        else if(currentPage == $('.wrap2 .smst').length){$('.winsonbtnnext').attr('disabled',true)}
        else{
            $('.winsonbtnpre').attr('disabled',false)
            $('.winsonbtnnext').attr('disabled',false)
        }
    }
    $('.winsonbtnpre').click(()=>{//上一頁按鈕觸發
        $('.wrap2 .smwrapper').attr('data-page',currentPage - 1)
        check();
        //顯示樣式
        $('.wrap2').addClass('windowforwrap2');
        $('.wrap2 .bgst').addClass('windowforbgst');
        $('.wrap2 .smst').addClass('windowforsmst');
    })
    $('.winsonbtnnext').click(()=>{//下一頁按鈕觸發
        $('.wrap2 .smwrapper').attr('data-page',currentPage + 1)
        check();
        //顯示樣式
        $('.wrap2').addClass('windowforwrap2');
        $('.wrap2 .bgst').addClass('windowforbgst');
        $('.wrap2 .smst').addClass('windowforsmst');
    })

    //當我點擊任何一個錨點
    $('.wrap1 .smst').click(function(){    
        //讓TOP鍵消失
        $("#totop").css('display','none') 
        currentPage = ($(this).attr('data-page'))
        $('.wrap2 .smwrapper').attr('data-page',currentPage)
        check();
        //顯示樣式(步驟)
        $('.wrap2').addClass('windowforwrap2');
        $('.wrap2 .bgst').addClass('windowforbgst');
        $('.wrap2 .smst').addClass('windowforsmst');
        //顯示控制按鈕
        $('.wrap2 .bgst button').css('display','inline-block');
    })
})