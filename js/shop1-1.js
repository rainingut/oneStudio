$(document).ready(function(){
  //totop
  $('.totop').click(function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:0},750);
  })



  //以下是推薦列表的功能
  const pics = document.querySelector('.recommand .wrap3');
  const prev = document.querySelector('#prev');
  const next = document.querySelector('#next');
  const img = document.querySelectorAll('.recommand .wrap3 img');
  let startX = 0;//起始位置
  let startScroll = 0;//判斷捲動位置
  // let startTime = 0;//滑動判斷
  let moved = false;//防止圖片被拖曳

  next.addEventListener('click',nextPageGo);
  prev.addEventListener('click',prevPageGo);
  pics.addEventListener('mousedown',startDrag);
  pics.addEventListener('mousemove',draging);
  pics.addEventListener('mouseup',stopDrag);
  pics.addEventListener('mouseleave',stopDrag);
  document.querySelectorAll('.recommand .wrap3 a').forEach(dom=>{
    dom.addEventListener('click',function(e){if(moved){e.preventDefault();}})
  })

  function startDrag(e){
    moved = false;
    pics.classList.add('active')
    startX = e.pageX;
    startScroll = pics.scrollLeft;
    // startTime = new Date().getTime();
    img.forEach(i=>{
        i.style.cursor='-webkit-grabbing';
      })
  }
  function draging(e){
    e.preventDefault();
    if(pics.classList.contains('active')){
      moved = true;
      move = e.pageX - startX;
      pics.scrollLeft = startScroll - move*3;
      
    }
  }
  function stopDrag(e){
    pics.classList.remove('active');
    img.forEach(i=>{
      i.style.cursor='-webkit-grab';
    })
    //  if(new Date().getTime() - startTime <= 250){
    //   if(e.pageX > startX){
    //    console.log('swiper right');
    //   }else if(e.pageX < startX){
    //     console.log('swiper left');
    //   }
    // }
  }
  function nextPageGo(e){
    pics.scrollLeft += document.querySelector('img').width*2 ;
  }
  function prevPageGo(){
    pics.scrollLeft -= document.querySelector('img').width*2 ;
  }




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