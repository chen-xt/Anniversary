function m2(){
   length2 = $('.slidePros2 li').length;
   $('.slidePros2 ul').css({'width':length*oneSize});
   $('.slidePros2 dd a').hover(function(){
      index2 = $('.slidePros2 dd a').index($(this));
      mt2();
   });
}

function run2(){
   index2++;
   if(index2 == length2){
      index2=0;
   }
   mt2();
}

function mt2(){
   $('.slidePros2 dd a').removeClass('current');
   $('.slidePros2 dd a').eq(index2).addClass('current');
   $('.slidePros2 ul').stop().animate({'left':-index2*oneSize});
}


function m3(){
   length3 = $('.slidePros3 li').length;
   $('.slidePros3 ul').css({'width':length*oneSize});
   $('.slidePros3 dd a').hover(function(){
      index3 = $('.slidePros3 dd a').index($(this));
      mt3();
   });
}

function run3(){
   index3++;
   if(index3 == length3){
      index3=0;
   }
   mt3();
}

function mt3(){
   $('.slidePros3 dd a').removeClass('current');
   $('.slidePros3 dd a').eq(index3).addClass('current');
   $('.slidePros3 ul').stop().animate({'left':-index3*oneSize});
}



function m4(){
   length4 = $('.slidePros4 li').length;
   $('.slidePros4 ul').css({'width':length*oneSize});
   $('.slidePros4 dd a').hover(function(){
      index4 = $('.slidePros4 dd a').index($(this));
      mt4();
   });
}

function run4(){
   index4++;
   if(index4 == length4){
      index4=0;
   }
   mt4();
}

function mt4(){
   $('.slidePros4 dd a').removeClass('current');
   $('.slidePros4 dd a').eq(index4).addClass('current');
   $('.slidePros4 ul').stop().animate({'left':-index4*oneSize});
}


///轮播图调用函数
var index=-1,length=0,length2,oneSize=0,index2=-1,index3=-1,index4=-1,index5=-1; 
    $(function(){
        ///move('slidePros');
        m();
        m2();
        m3();
        m4();

        var t1 = setInterval(function(){
          run();
        },2000);
        var t2 = setInterval(function(){
          run2();
        },2000);
        var t3 = setInterval(function(){
          run3();
        },2000);

        var t4 = setInterval(function(){
          run4();
        },2000);

         var t5 = setInterval(function(){
          run5();
        },2000);

    });
  
    function m(){
       length = $('.slidePros li').length,oneSize=$('.slidePros li:first').outerWidth();
       $('.slidePros ul').css({'width':length*oneSize});
       $('.slidePros dd a').hover(function(){
          index = $('.slidePros dd a').index($(this));
          mt();
       });
    }

    function run(){
       index++;
       if(index == length){
          index=0;
       }
       mt();
    }

    function mt(){
       $('.slidePros dd a').removeClass('current');
       $('.slidePros dd a').eq(index).addClass('current');
       $('.slidePros ul').stop().animate({'left':-index*oneSize});
    }
    
