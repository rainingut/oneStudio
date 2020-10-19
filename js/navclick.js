//要做的效果是針對漢堡，按下才會觸發子層display:block
$(document).ready(function(){
    $('li.ihavechildren').click(function(){
        $(this).children().toggleClass('-toggleblock');
    });
});






