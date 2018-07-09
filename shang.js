$(function(){
    $(window).scroll(function(){
        var scroll=$(this).scrollTop();
        var a=(400-scroll)/400;
        a=a<0?0:a;
        var b3=255*a;
        var b2=215+40*a;
        var c=100-100*a;
        var d=0.2+0.8*a;
        if(scroll>=0){
            $(".logo").css({
                'position':'fixed',
            });
            $(".banner").css({
                'padding-top':45
            })
        }else{
            $(".logo").css({
                'position':''
            });
            $(".banner").css({
                'padding-top':0
            })
        }
        $(".logo").css({
            'background-color':'rgba(255, 215, 0,'+a+')',
        })
        $(".logo a").css({
            'color':'rgba(255, '+b2+', '+b3+')'
        })
        $(".logo input").css({
            'background-color':'rgba(255, '+b2+', '+b3+','+d+')'
        })
        $(".logo img").css({
            'filter':'invert('+c+'%)'
        })
    })
    var id=setInterval(function(){
        var j=parseInt($(".banner img").attr("src").split("l")[1])+1;

        if(j>5){
            j=1;
        }
        $(".banner img").attr("src","./images/l"+j+".jpg");
        $('.banner ul li').eq(j-1).css({
            'border':'1px solid #fff',
            'background-color':'gold'
        }).siblings("li").css({
            'border':'none',
            'background-color':'#fff'
        })
    },2000)
    $(".banner ul li").each(function(index,ele){
        $(ele).click(function(){
            console.log(index);
            $(this).parent().prev("img").attr("src","./images/l"+(index+1)+".jpg");
            $('.banner ul li').eq(index).css({
                'border':'1px solid #fff',
                'background-color':'gold'
            }).siblings("li").css({
                'border':'none',
                
                'background-color':'#fff'
            })
            clearInterval(id);
            id=setInterval(function(){
                var j=parseInt($(".banner img").attr("src").split("l")[1])+1;
                console.log(j);
                if(j>5){
                    j=1;
                }
                $(".banner img").attr("src","./images/l"+j+".jpg");
                $('.banner ul li').eq(j-1).css({
                    'border':'1px solid #fff',
                    'background-color':'gold'
                }).siblings("li").css({
                    'border':'none',
                    'background-color':'#fff'
                })
            },2000)
        })
    })
    var id=setInterval(function(){
        var start=new Date();
        var end=new Date('2018','5','17','10','30','0','0');
        var chazhi=end-start;
        //毫秒第一位;
        var ms=Math.floor(chazhi%1000/100);
        //毫秒第二位;
        var ms2=Math.floor(chazhi%1000/10%10);
        //秒;
        var s=Math.floor(chazhi/1000%60)
        //分;
        var m=Math.floor(chazhi/1000/60%60);
        //小时;
        var h=Math.floor(chazhi/1000/60/60%24);
        h=''+(h<10?'0'+h:h);
        s=''+(s<10?'0'+s:s);
        m=''+(m<10?'0'+m:m);
        var time=m+s+ms+ms2;
        if(chazhi<0){
            clearInterval(id);
            return;
        };
        $(".num").each(function(index,ele){
            $(ele).html(time.substring(index,index+1));
        })
    },10)
})