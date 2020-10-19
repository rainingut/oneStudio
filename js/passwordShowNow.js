$(document).ready(function(){
    //顯示密碼
        $('.showNow').click(function(){
            if($(this).siblings('.password').attr('type') === 'password'){
                $(this).siblings('.password').attr('type','text');
            }else{
                $(this).siblings('.password').attr('type','password');
            }
        });
  });