/*==============================================================*/
/*Create by guanzongyi at 20160218.*/
/*Version 1.0*/
/*http://webj.taobaocom*/
/*guanzongyi [mailto:2480536866@qq.com]*/
/*==============================================================*/

$(function () {
    $('.rightMain .item').eq(0).show();
    $('.plug-list li').click(function () {
        var index=$(this).index();
        setTop=$('.plug-list li').eq(index).offset().top-48;
        $('.nav-slider-bg').animate({top:setTop},300);
        if(index!=5){
            $('.rightMain .item').hide()
            $('.rightMain .item').eq(index).show()
        }else{
            toggleLeft()
        }

    })
    /*左侧边栏伸缩效果*/
    function toggleLeft(){
        var checkleft=$('.leftMain').offset().left;
        if(checkleft!=0){
            $('.leftMain').animate({left:0},300);
        }else{
            $('.leftMain').animate({left:-450},300);
        }
    }
    $('.toggleBtn').click(function () {
        toggleLeft()
    })
})
window.onload=window.onresize= function () {
    ifScroll()
};
/*滚动条判断*/
function ifScroll() {
        var oHt=document.documentElement.clientHeight;
        $('.rightMain .item').css("height",oHt-248)
        $('.leftMain .info').css("height",oHt-48)
        var length=$('.rightMain .item').length;
        var lefinfoHt=$('.leftMain .info .ifscroll').height();
        var leftHt=$('.leftMain .info').height();
        if(lefinfoHt>leftHt){
            $('.leftMain .info').addClass('scroll')
        }else{
            $('.leftMain .info').removeClass('scroll')
        }
        for(var i=0; i<=length; i++){
        if($('.rightMain .item').eq(i).is(":visible")){
            var itemHt=$('.rightMain .item').eq(i).height();
            var iteminfoHt=$('.rightMain .item').eq(i).find('.info').height();
            if(iteminfoHt>(itemHt-20)){
               $('.rightMain .item').eq(i).addClass('scroll')
            }else{
                $('.rightMain .item').eq(i).removeClass('scroll')
            }
        }
    }

}
$(function () {
    $('.searchBtn').click(function () {
        $('.dt-form-control').toggleClass('search-active')
        if($('.dt-form-control').hasClass('search-active')){
            $('.dt-form-control').animate({width:"206px"},300)
        }else{
            $('.dt-form-control').animate({width:"0"},300)
        }
    })
    $('.drawingToolbar .icon').hover(function () {
        $(this).toggleClass('bg')
    })
    $('.chooseCity').click(function () {
        $('.sel_container i').toggleClass('open')
    })
    $('.chooseCity').click(function () {
        $('.map_popup').toggle()
    })
    $('.popup_close').click(function () {
        $('.map_popup').hide()
    })
    $('.cityList a').click(function () {

        var txt=$(this).html();
        $('.chooseCity').html(txt)
    })
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
})
