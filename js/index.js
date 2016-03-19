/**
 * Created by 丽哲 on 2015/12/1.
 */

$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        onLeave: function(index, nextIndex, direction){
            if(index == 1 && direction == 'down'){
                $(".header").animate({
                    top: -100
                }, 680);
                $(".subnav").animate({
                    top: -36
                },680);
                $(".subnav-y").animate({
                    top:0
                },680)
                $(".colorful-1").css({"top":400}).animate({
                    top:0
                }, 1500);
                $(".colorful-2").css({"top":400}).animate({
                    top:250
                }, 1500);
            } else if(nextIndex == 1 && direction == 'up') {
                $(".header").animate({
                    top: 0
                }, 680);
                $(".subnav").animate({
                    top: 100
                },680);
                $(".subnav-y").animate({
                    top:-60
                },680)
            } else if(index == 4 && direction == 'up') {
                $(".footer").animate({
                    bottom: -270
                }, 600);
                $(".human-left").animate({
                    left: 100
                }, 2000);
                $(".human-right").animate({
                    right: 100
                }, 2000);
            } else if(nextIndex == 4 && direction == 'down') {
                $(".footer").animate({
                    bottom: -227
                }, 1680);
                $(".human-left").animate({
                    left: 0
                }, 2000);
                $(".human-right").animate({
                    right: 0
                }, 2000);
            }
            //三层开始
            else if(nextIndex == 3) {
                $(".main-3-bg").animate({
                    height: 400
                }, 1000);
            } else if(index == 3) {
                $(".main-3-bg").animate({
                    height: 0
                }, 1000);

            }
            else {
                $(".header").animate({
                    top: -100
                }, 680);
                $(".subnav").animate({
                    top: -36
                },680);
                $(".subnav-y").animate({
                    top:0
                },680)
            }
        }
    });

    var arrimgs = ['images/main-1/main-1-hong-da.png',
        'images/main-1/main-1-ju-da.png',
        'images/main-1/main-1-huang-da.png',
        'images/main-1/main-1-qing-da.png',
        'images/main-1/main-1-lan-da.png',
        'images/main-1/main-1-shenlan-da.png',
        'images/main-1/main-1-zi-da.png'
    ];

    var array = [0.6,0.7,0.6,0.7,0.8,0.7,0.6]

    //第一层操作
    $(".main-1 div").append("<div></div>")
    $(".main-1 div div").addClass("main-1-c").append("<h3>漂亮得不像实力派</h3>").append("<a>标准版</a>").append("<a>文艺青年版</a>")
    $(".main-1 div div a:first").addClass("main-1-at").siblings("a").addClass("main-1-ab")

    $(".main-1 > div").attr("id","wave");
    $(".main-1 #wave").yinfu(arrimgs,array);


    /*底部操作*/
    $(".footer").mouseenter(function () {
        $(".footer").stop().animate({"bottom":"0"},1000)
    })//})
    $(".footer").mouseleave(function () {
        $(".footer").stop().animate({"bottom":"-227"},1000)
    })
    /*底部操作结束*/

    /*第二层动画效果*/
    $(".color-tabs li").on('click',function () {
        var index = $(this).index();
        $(".colorful-1").eq(index).css({"display":"block","right":180})
            .animate({"right":"200"},1000).parent().siblings('.colorful').children().css({"display":"none","right":200})
        $(".colorful-2").eq(index).css({"display":"block","right":220})
            .animate({"right":"200"},1000).parent().siblings('.colorful').children().css({"display":"none","right":200})
    });
});