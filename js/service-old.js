$(document).ready(function(){
    //預設模式沒有window模式的按鈕
    $('.wrap2 .bgst button').css('display','none');
    var currentMode = 'list'//預設LIST狀態
    

    //window模式
    $('#windowbtn').click(function(){
        currentMode = 'window';
        arr = $('.wrap2 .smst').toArray();
        if(currentMode == 'window'){
        //隱藏全部步驟
            $('.wrap2 .smst').css('display','none');
            
            //按下步驟按紐
            $('.wrap1 .smst').click(function(){
                //顯示控制按紐
                $('.wrap2 .bgst button').css('display','block');
                //顯示指定步驟
                $('.wrap2 .smst').css('display','none');
                $('.wrap2 .smst#'+$(this).attr('data-target')).css('display','flex');
                //指定步驟  的樣式
                $('.wrap2').addClass('windowforwrap2');
                $('.wrap2 .bgst').addClass('windowforbgst');
                $('.wrap2 .smst').addClass('windowforsmst');
                $('.wrap2 .smst .txt').css('overflow-y','scroll');
                
            })//[按下步驟按鈕]的尾端
            //按下 下一步  
        //     $('.wrap2 button.winsonbtnnext').click(function(){
        //         $('.wrap2 .smst').css('display','none');
        //         $.each(arr,function(i,v){
        //             while(i<=i.length){
        //             }
        //         })               
        //    })

            //最後一步不要下一步，第一步不要上一步
            // $('.wrap1 .smst').eq(0).click(function(){
            //     $('.wrap2 button.winsonbtnpre').css('display','none');
            // })
            // $('.wrap1 .smst').eq($('.wrap1 .smst').eq().length-1).click(function(){
            //     $('.wrap2 button.winsonbtnnext').css('display','none');
            // })
            //按到關掉按鈕，樣式拿掉
            $('.wrap2 .windowbtncloss').click(function(){
                //不要顯示任何步驟
                $('.wrap2 .bgst button').css('display','none');
                $('.wrap2 .smst').css('display','none');
                //關掉顯示樣式
                $('.wrap2').removeClass('windowforwrap2');
                $('.wrap2 .bgst').removeClass('windowforbgst');
                $('.wrap2 .smst').removeClass('windowforsmst');    
            })
        }//if 檢視是否為window模式 的尾端
    })//window模式的尾端
        
    //🔸🔸上一步下一步🔸🔸
    let currentPage = parseInt($('.wrap2 .smwrapper').attr('data-page'))
    const check = () =>{
        currentPage = parseInt($('.wrap2 .smwrapper').attr('data-page'))
        if(currentPage === 1){$('.winsonbtnpre').css('dispaly','none')}
        else if(currentPage === $('.wrap2 .smst').length){$('.winsonbtnnext').css('dispaly','none')}
        else{
            $('.winsonbtnpre').css('dispaly','inline-block')
            $('.winsonbtnnext').css('dispaly','inline-block')
        }
    }
    $('.winsonbtnpre').click(()=>{
        $('.wrap2 .smwrapper').attr('data-page',currentPage - 1)
        check();
    })
    $('.winsonbtnnext').click(()=>{
        $('.wrap2 .smwrapper').attr('data-page',currentPage - 1)
        check();
    })






















    
    
    
    //list模式
    $('#listbtn').click(function(){
        currentMode = 'list';
        $('.wrap2 .smst').css('display','flex');
         //去除window模式的樣式
        $('.wrap2').removeClass('windowforwrap2');
        $('.wrap2 .bgst').removeClass('windowforbgst');
        $('.wrap2 .smst').removeClass('windowforsmst');
        $('.wrap2 .smst .txt').css('overflow-y','initial');
        $('.wrap2 .smst#'+$(this).attr('data-target')).css('display','initial');
        //關掉window模式的觸發按鈕
        $('.wrap1 .smst').off();
    })
    
})