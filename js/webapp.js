$(function(){
    /*设计图纸尺寸*/
    function resize(originsize,type){
        var type=type || "x";
        if(type=="x"){
            var widths=document.documentElement.clientWidth;
            var scale=widths/originsize*100+"px";
        }else if(type=="y"){
            var heights=document.documentElement.clientHeight;
            var scale=heights/originsize*100+"px";
        }
        document.getElementsByTagName("html")[0].style.fontSize=scale;
    }
    resize(1334,"y");


    /*Initialize Swiper*/
    var swiper = new Swiper('.swiper-container',{
        pagination : '.swiper-pagination',  /*分页器*/
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    })
})