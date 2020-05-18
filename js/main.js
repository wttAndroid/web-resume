$(window).on('load',function () {
    // removeElement(document.getElementById('loadding'));
    console.log('---loadCallBack---');
    $(window).scroll(function () {
        var a,b,c;
        a=$(window).height();//页面高度
        b=$(this).scrollTop();//获取滚动高度
        $('.page').each(function () {
            c=$(this).offset().top;
            var arrMastering=[{
                title:'HTML',
                value:'80%'
            },{
                title:'CSS',
                value:'80%'
            },{
                title:'JS',
                value:'70%'
            },{
                title:'JQ',
                value:'60%'
            },{
                title:'Vue',
                value:'75%'
            }]

            var tag=true;
            if(a+b-120>c){
                if(!$(this).find('.container').hasClass('animateload')) {
                    $(this).find('.container').addClass('animateload')
                }

                if($(this)[0].id=='page4'||tag){
                    tag=false
                    $(this).find('.proress').each(function (i,n) {
                        $(this).find('.bar-propress')[0].style.width=arrMastering[i].value;
                        $(this).find('.propress-title').text(arrMastering[i].title);
                        $(this).find('.bar-propress').children('span').text(arrMastering[i].value)
                    })
                }
            }else {
                // if($(this).find('.container').hasClass('animateload')) {$(this).find('.container').removeClass('animateload')}
            }
        })

    })



    // audioInit();//取消了播放音乐模块
    bindEvenInit();
});





//播放音乐初始化方法
function audioInit() {
    var audio =$('#audio').children('audio')[0];
    if(audio){
        var audioControls=$('#audio').children('.audio-controls')[0]
        if(audio){
            audio.volume=0.05;//默认音量
            $('#audioClick').click(function () {
                if(audio.paused){
                    audio.play();
                    audioControls.style.animationPlayState="running"
                    $('#audioClick').addClass('icon-play_fill').removeClass('icon-zantingtingzhi')
                }else {
                    audio.pause();
                    audioControls.style.animationPlayState="paused"
                    $('#audioClick').addClass('icon-zantingtingzhi').removeClass('icon-play_fill')
                }
            })
        }
    }
}


//锚点定位
function bindEvenInit() {
    $('.navbtn').bind("click touch",function () {
        //scrollTop 滚动到  $(this).attr('href')锚点关联id所在位置
        $('html,body').animate({scrollTop:($($(this).attr('href')).offset().top)},500)
        return false
    })
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    $('.element').on('click',function () {
        $(this).popover('toggle')
    })

    $('#slideBut').on("click touch",function () {
        $('#slideList').slideToggle(1000);
    })

    $('.navbtn').click(function () {
        $('#slideList').css('display','none')
    })
}


//删除元素函数
function removeElement(_element){
    var _parentElement = _element.parentNode;
    if(_parentElement){
        _parentElement.removeChild(_element);
    }
}

