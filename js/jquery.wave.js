/**
 * 功能：实现波浪效果（依赖于jquery）
 * 使用：1、给目标添加id名：wave
 *      2、传入图片路径的数组
 *      3、传入图片默认位置的数组（0-1之间）（1为全部显示）（可不加）
 */

(function($){
    /*定义数组*/
    $.fn.yinfu =function (arrimgs,array1) {
        /*默认位置数组*/
        var array = []
        for(var i = 0;;i++) {
            var a = Math.random();
            if(a > 0.6 && a < 0.9){
                array.push(a);
            }
            if(array.length==10){
                break;
            }
        }

        array1 = array1 || array;
        /*获取数组的数量*/
        var num = arrimgs.length;
        var wWidth = $("#wave").width();

        $("#wave").append("<ul></ul>")

        for (var i = 0; i < num; i++) {
            $("#wave ul").append('<li></li>').css({
                position: "absolute",
                bottom: 0,
                left: 0,
                listStyle: "none",
                margin:0,
                padding: 0
            })
        }

        $("#wave ul li").css({
            "width": (wWidth / num) + "px",
            float: "left",
            overflow: "hidden",
            margin:0,
            padding: 0
        }).append("<img />");

        $("#wave ul li img").css({
            width: '100%',
            transform: "translatey(0)",
            margin:0,
            padding: 0
            //transition:"transform .01s"
        })

        //x y控制图片默认位置
        morenbuju(arrimgs,array1);
        //默认布局函数
        function morenbuju(arry,array1) {

            for (var i = 0; i < arry.length; i++) {
                $("#wave ul li img").eq(i).attr({src: arry[i]}).css("transform","translatey("+((1-array1[i])*100)+"%)")
            }
        }
        /*鼠标经过的是的事件*/
        $("#wave ul li img").on('mousemove', function (e) {
            var index = $(this).parent().index();
            //在当前图片的x坐标
            var weizhi = e.clientX - ($(this).parent().position().left);
            console.log ($(this).parent().position().left)
            console.log(e.clientX)
            //console.log(weizhi)
            var xx = $(this).innerWidth()
            var pianyi = 10 * weizhi / xx
            donghua(index, 0);

            var index1 = index;
            var index2 = index;
            for (var i = 0; i < num; i++) {
                index1--;
                if (index1 < 0) {
                    break;
                }
                donghua(index1, 10 * (i + 1) - (10 - pianyi));
            }
            for (var i = 0; i < num; i++) {
                index2++;
                if (index2 > num) {
                    break;
                }
                donghua(index2, 10 * (i + 1) - pianyi);
            }
            function donghua(str, sum) {
                $("#wave ul li").eq(str).children().css({transform: "translatey(" + sum + "%)"});
            }
        });
        /*鼠标移出事件*/
        $("#wave ul li img").on("mouseout", function () {
            //alert(111)
            morenbuju(arrimgs,array1);
        });
    }
})(jQuery);