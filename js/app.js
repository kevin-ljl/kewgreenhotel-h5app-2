var app = app || {};

/*-- html5-template
====================================================== */
app.template = function(){};

/* loader */
app.template.loader = function(){};
app.template.loader.init = function(){
	// loader
    var getSource = function(){
        var res = [];
        res.push("images/load/1.png");
        res.push("images/load/2.png");
        res.push("images/load/3.png");
        res.push("images/load/4.png");
        res.push("images/load/5.png");
        res.push("images/load/6.png");
        res.push("images/load/7.png");
        res.push("images/load/8.png");
        res.push("images/load/9.png");
        res.push("images/load/10.png");
        res.push("images/load/11.png");
        res.push("images/load/12.png");
        res.push("images/load/13.png");
        res.push("images/load/14.png");
        res.push("images/load/15.png");
        res.push("images/load/16.png");
        res.push("images/load/17.png");
        res.push("images/load/18.png");
        res.push("images/load/19.png");
        res.push("images/load/20.png");
        return res;
    }
    this.show_animation();
    new mo.Loader(getSource(),{
        loadType : 1,
        minTime : 100,
        onLoading : function(count,total){
            console.log('onloading:single loaded:',arguments)
            $(".loader h1").html(''+Math.round(count/total*100)+'%');
        },
        onComplete : function(time){
            console.log('oncomplete:all source loaded:',arguments);
            app.template.loader.destory();
            app.template.loader.done_callback.call();
            app.template.loader.done_callback2.call();
        }
    });
};

//loading页帧动画
app.template.loader.show_animation = function(){
          var resource = ["images/load/1.png"  
                         , "images/load/2.png"  
                         , "images/load/3.png"  
                         , "images/load/4.png"  
                         , "images/load/5.png" 
                         , "images/load/6.png"  
                         , "images/load/7.png" 
                         , "images/load/8.png"  
                         , "images/load/9.png" 
                         , "images/load/10.png"  
                         , "images/load/11.png"  
                         , "images/load/12.png"  
                         , "images/load/13.png" 
                         , "images/load/14.png"  
                         , "images/load/15.png" 
                         , "images/load/16.png"  
                         , "images/load/17.png"
                         , "images/load/18.png" 
                         , "images/load/19.png"  
                         , "images/load/20.png"
                      ];  
      
          $('#loader-e-1').html("");  
          var multiplePic = new mo.Film(document.querySelector('#loader-e-1'),{  
              resource : resource,  
              totalFrame : 20,  //帧数
              playTime: 500  
          });  
          multiplePic.play(100);//每帧播放时间差  
};  

app.template.loader.done_callback = function(){};
app.template.loader.done_callback2 = function(){};

app.template.loader.destory = function(){
    $(".loading").remove();
};

/* Landscape */
app.template.Landscape = function(){};
app.template.Landscape.init= function(){
    var Landscape = new mo.Landscape({
        pic: 'js/motion/landscape.png',
        picZoom: 3,
        mode:'portrait',//portrait,landscape
        prefix:'Shine'
    });
};

/* pageslide swiper */
app.template.swiper = function(){};
app.template.swiper.mySwiper = {};
app.template.swiper.init = function(){
	app.template.loader.done_callback = app.template.swiper.bind;
};
app.template.swiper.bind = function(){
    $(".swiper-container").css("display", "block");

    app.template.swiper.mySwiper = new Swiper ('.swiper-container', {
        speed:500,
        lazyLoading : true,
        lazyLoadingInPrevNext : true,
        // nextButton: '.swiper-button-next',
        // prevButton: '.swiper-button-prev',
        //direction : 'vertical',
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画 

            app.template.swiper.on_pageslideend(0);
        }, 
        onSlideChangeStart: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画

            app.template.swiper.on_pageslideend(swiper.activeIndex);
            app.template.swiper.mySwiper.lockSwipes();
        } 
    });

    app.template.swiper.lock();
};
app.template.swiper.lock = function(){
	app.template.swiper.mySwiper.lockSwipes();
};
app.template.swiper.on_pageslideend = function(index){};

app.template.swiper.next = function(){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slideNext();
};

app.template.swiper.prev = function(){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slidePrev();
};

app.template.swiper.to = function(index){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slideTo(index);
};

app.template.swiper.touch = function(index){
    app.template.swiper.mySwiper.unlockSwipes();
    app.template.swiper.mySwiper.slideTo(index);
};

app.template.touch = function(){};

app.template.touch.eventlistener_handler = function(e){

    //e.stopPropagation();  // 阻止事件传递
    e.preventDefault();     // 阻止浏览器默认动作(网页滚动)
};

app.template.touch.init = function(){

    // fastclick
    FastClick.attach(document.body);

    document.body.addEventListener("touchmove", app.template.touch.eventlistener_handler, false);

    $("body").on("doubleTap longTap swipeLeft swipeRight", function(e){
        // e.stopPropagation();  // 阻止事件传递
        // e.preventDefault();   // 阻止浏览器默认动作(网页滚动)
        return false;
    });
};


app.template.data = {};
app.template.data.add = function(key, value){
    app.template.data[key] = value;
};
app.template.data.get = function(key){
    return app.template.data[key];
};

/*-- tools
====================================================== */
app.tools = function(){};
app.tools.random = function(n, m){
	var c = m-n+1;  
    return Math.floor(Math.random() * c + n);
};

app.tools.getpageurlwithoutparam = function(){
    var url = window.location.href;
    return url.substring(0, url.indexOf("?"));
};

app.tools.getbaseurl = function(){
    var url = window.location.href;
    return url.substring(0, url.lastIndexOf("/") + 1);
};

app.tools.gotourl = function(url){
    window.location.href = url;
};

app.tools.geturlparam = function(param){
    var reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) 
        return unescape(r[2]);
    else
        return undefined;
};

app.tools.substr = function(str, len){
    if(str.length > len)
        str = str.substring(0, len) + "...";

    return str;
};

app.tools.platform = function(){};
app.tools.platform.os = "";
app.tools.platform.debug = ""; // 强制开始指定os模式
app.tools.platform.init = function(){
    var u = navigator.userAgent;

    app.debug.console("userAgent:" + u);

    if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1)
        app.tools.platform.os = "android";
    else if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))
        app.tools.platform.os = "ios";

    if(app.tools.platform.debug == "ios")
        app.tools.platform.os = "ios";
    else if(app.tools.platform.debug == "android")
        app.tools.platform.os = "android";
};

/*-- debug
====================================================== */
app.debug = function(){};
app.debug.enable = false;
app.debug.maxline = 5;
app.debug.linecount = 0;
app.debug.console = function(str){
    if(app.debug.enable)
    {
        app.debug.linecount ++;

        if($("#debug").length > 0)
        {
            if(app.debug.linecount > app.debug.maxline)
            {
                app.debug.linecount = 0;
                $("#debug").html("<br/> #" + str);
            }
            else
                $("#debug").append("<br/> #" + str);
        }else
        {
            $("body").append("<div id='debug' class='debug'></div>");
            $("#debug").append("<br/> #" + str);
        }
    }
};


/*-- audio player
====================================================== */
app.audio = function(){};
app.audio.player = undefined;
app.audio.status = "";
app.audio.init = function(){
    app.audio.player = $("#audio-player");

    $(".audio-icon").on("touchend", function(){
        if(app.audio.player[0].paused)
        {
            app.audio.play();
            $(".audio-icon").removeClass("audio-icon-stop");
        }
        else
        {
            app.audio.pause();
            $(".audio-icon").addClass("audio-icon-stop");
        }
    });

    app.template.loader.done_callback2 = app.audio.show;
};


app.audio.show = function(){
    $(".audio-icon").css({"display": "block"});
    $(".audio-icon").addClass("audio-icon-animation");
    app.audio.play();
};

app.audio.play = function(){
    $(".audio-icon").removeClass("audio-icon-stop");
    app.audio.player[0].play();
    if(!app.audio.player[0].paused)
        app.audio.status = "play";
};

app.audio.pause = function(){
    app.audio.status = "pause";
    app.audio.player[0].pause();
};

app.audio.pause_bysystem = function(){
    app.audio.status = "pause_bysystem";
    app.audio.player[0].pause();
};

app.audio.stop = function(){
    app.audio.player.attr("src", "");
    app.audio.player[0].load();
};

app.audio.changesong = function(src){
    app.audio.player.attr("src", src);
    app.audio.player[0].load();

    if(app.audio.status == "play")
       app.audio.play(); 
};
// app.audio.play_tap = function(){
//     if(app.audio.status == "play")
//         $("#audio-player-tap")[0].play();
// };

/*-- p1
====================================================== */
app.p1 = function(){};
app.p1.init = function(){};
app.p1.bind_touch_event = function(){
    
    $(".p1 .e-8").on("touchend", function(){
          app.p1.show_layout ();
    });     
};

app.p1.show_layout = function(){
             window.overlay1 = new mo.Overlay({
                content: '<img src="images/p1/float/bg1.png" alt="" class="m-p1-3"><img src="images/p1/float/1.png" alt="" class="m-p1-1">', 
                width: 624,
                height: 966
            });
            overlay1.on('open', function(){
                    $('.m-p1-1').on('touchend', function(){
                        window.overlay1.close();

                        window.overlay2 = new mo.Overlay({
                            content: '<img src="images/p1/float/bg2.png" alt="" class="m-p1-4"><img src="images/p1/float/2.png" alt="" class="m-p1-2"><img src="images/p1/float/3.png" alt="" class="m-p1-5">', 
                            width: 624,
                            height: 966
                        });  

                        overlay2.on('open', function(){
                            $('.m-p1-2').on('touchend', function(){
                                window.overlay2.close();
                                app.template.swiper.next(); 
                            });
                            
                            $(".m-p1-5").on("touchend", function(){
                                  window.overlay2.close();
                                  app.p1.show_layout ();
                            });        
                        });
                    }); 
            });
} 
app.p1.destory = function(){};

/*-- p2
====================================================== */
app.p2 = function(){};
app.p2.init = function(){
    app.template.data.add("month", "01");
};

app.p2.bind_touch_event = function(){
    $(".p2 .next1").on("touchend", function(){      
        app.template.data.add("score", 1);
        app.template.swiper.next();
     }); 
     $(".p2 .next").on("touchend", function(){
        app.template.data.add("score", 0);  
        app.template.swiper.next();
     });   
    $(".p2 .button").on("touchend", function(){
        app.template.swiper.prev();
    })
};

app.p2.destory = function(){};

/*-- p3
====================================================== */
app.p3 = function(){};
app.p3.init = function(){};

app.p3.bind_touch_event = function(){
        $(".p3 .next1").on("touchend", function(){
        var score = app.template.data.get("score"); 
        app.template.data.add("score", score+1); 
        app.template.swiper.next();    
     }); 
     $(".p3 .next").on("touchend", function(){       
        var score = app.template.data.get("score");  
        app.template.swiper.next();
     }); 
    $(".p3 .button").on("touchend", function(){
        app.template.swiper.prev();
    });
};
app.p3.destory = function(){};

/*-- p4
====================================================== */
app.p4 = function(){};
app.p4.init = function(){};

app.p4.bind_touch_event = function(){
        $(".p4 .next1").on("touchend", function(){         
        var score = app.template.data.get("score");  
        app.template.data.add("score", score+1); 
        app.template.swiper.next();
     }); 
     $(".p4 .next").on("touchend", function(){
        var score = app.template.data.get("score");   
        app.template.swiper.next();          
     }); 
    $(".p4 .button").on("touchend", function(){
        app.template.swiper.prev();
    })


    $(".p4 .e-3").on("touchend", function(){
        if($(".p4 .hit").html() == "")
        {
            $.post("db/adduser.php", {name: $("#name").val(),
                                company: $("#company").val(),
                                jobtitle: $("#jobtitle").val(),
                                phone: $("#phone").val(),
                                targetdate: app.template.data.get("month")
                                 + app.template.data.get("day")
                                });

            app.template.swiper.next();
        }
    });
};

app.p4.destory = function(){
};

/*-- p5
====================================================== */
app.p5 = function(){};
app.p5.init = function(){
    this.show_layout();
    $(".p5 .hit").html("请输入上述信息!")
}
app.p5.show_layout = function(){
    if(app.template.data.get("score") >= 2){
    $('.p5 .success').css("display","block");
    }      
    else
    {
       $('.p5 .fail').css("display","block");
    }
};

app.p5.bind_touch_event = function(){

    $(".p5 .success .e-1").on("touchend", function(){
        //app.template.swiper.next();
    });
    $(".p5 .fail .e-1").on("touchend", function(){
        document.body.removeEventListener("touchmove", app.template.touch.eventlistener_handler, false);
        $(".p6-m-answer").show();
    });

    $(".p6-m-answer .m-p5-1").on("touchend", function(){
        $(".p6-m-answer").hide();
        scroll(0,0);
        document.body.addEventListener("touchmove", app.template.touch.eventlistener_handler, false);
    })

    $(".p5 .fail .e-2").on("touchend", function(){
        app.p5.share();
    })

    $(".p5 .fail .e-3").on("touchend", function(){
        app.template.data.add("score", 0); 
         $('.p5 .fail').css("display","none");
        app.template.swiper.to(0);
    })
};

app.p5.share=function(){
    window.overlay7 = new mo.Overlay({
            content: '<img src="./images/share/2.png" alt="" class="m-p6-2"><img src="./images/share/1.png" alt="" class="m-p6-1">',
            width: 624,
            height: 967
        });
        overlay7.on('open', function(){
            $('.m-p6-1').on('touchend', function(){
                window.overlay7.close();
            });
        });
};


$(".p5 .e-1").on("touchend",function() {
    if ($(".p5 .hit").html() == "") {
        $.post("db/adduser.php", {
            name: $("#name").val(),
            phone: $("#phone").val(),
            age: $("#age").val(),
            occupation: $("#occupation").val(),
            score: app.template.data.get("score"),
            targetdate: app.template.data.get("month") + app.template.data.get("day")
        });
             app.p5.next();
             // app.p5.next1();
             //app.template.swiper.next()
    }
});

app.p5.next=function(){
    if ($(".p5 .success .e-2-1").val() == "" || $(".p5 .success .e-3-1").val() == "") {
            $(".p5 .hit").html("请补全信息!")
        } else{
            app.template.swiper.next();
        }
}

app.p5.next1=function(){    }

$("#name").on("change",function() {
        if (this.value||$(".p5 .success .e-5").val() !== "" || $(".p5 .success .e-4").val() !== "") {
            $(".p5 .hit").html("")
        } else {
            $(".p5 .hit").html("请补全信息!")
        }
    });
$("#phone").on("change",function() {
        var patt = new RegExp(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
        if (patt.test(this.value)) {
            $(".p5 .hit").html("")
        } else {
            if (this.value) {
                $(".p5 .hit").html("请输入正确的11位手机号码!")
            } else {
                $(".p5 .hit").html("请补全信息!")
            }
         }
});
$("#age").on("change",function() {
    if (this.value) {
        $(".p5 .hit").html("请补全信息!")
    } else {
        $(".p5 .hit").html("")
    }
});
$("#occupation").on("change",function() {
    if (this.value) {
        $(".p5 .hit").html("")
    } else {
           $(".p5 .hit").html("请补全信息!")
    }
});


app.p5.destory = function(){
};

/*-- p6
 ====================================================== */
app.p6 = function(){};
app.p6.init = function(){
};

app.p6.bind_touch_event = function(){
    $(".p6 .e-3").on("touchend", function(){
        document.body.removeEventListener("touchmove", app.template.touch.eventlistener_handler, false);
        $(".p6-m-answer").show();
    });

    $(".p6-m-answer .m-p5-1").on("touchend", function(){
        $(".p6-m-answer").hide();
        scroll(0,0);
        document.body.addEventListener("touchmove", app.template.touch.eventlistener_handler, false);
    })

    $(".p6 .e-2").on("touchend", function(){
        app.p5.share();
    });

};

app.p6.destory = function(){
};
/*-- for android
====================================================== */
var fuckandroid = {};
fuckandroid.app = function(){};
fuckandroid.app.audio = function(){};
fuckandroid.app.audio.play_tap = function(){
    //android不能同时播放连个音乐；
};
/*-- page init
====================================================== */
(function(){
    // 检测OS
    app.tools.platform.init();

    // 兼容android(如果开启android模式则重写响应函数用来)
    if(app.tools.platform.debug == "android"
     || app.tools.platform.os == "android")
    {
        app.audio.play_tap = fuckandroid.app.audio.play_tap;
    }

    // 框架
    app.template.touch.init();
    app.template.swiper.init();
    app.template.loader.init();
    app.template.Landscape.init();
    app.audio.init();
    //tracking.pv_byfrom();
    
    
    /* page init */
    app.template.swiper.on_pageslideend = function(index){
        switch(index)
        {
            case 0:
                app.p1.init();
                break;
            case 1:
                app.p1.destory();
                app.p2.init();
                break;
            case 2:
                app.p2.destory();
                app.p3.init();
                break;
            case 3:
                app.p3.destory();
                app.p4.init();
                break;
            case 4:
                app.p4.destory();
                app.p5.init();
                break;
            case 5:
                app.p5.destory();
                app.p6.init();
                break;
        }
    };

    app.p1.bind_touch_event();
    app.p2.bind_touch_event();
    app.p3.bind_touch_event();
    app.p4.bind_touch_event();
    app.p5.bind_touch_event();
    app.p6.bind_touch_event();
    
    app.debug.enable = false;

})();

