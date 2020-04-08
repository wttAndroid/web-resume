



$(window).load(function () {

    removeElement(document.getElementById('loadding'));
    console.log('所有资源加载完毕----------');

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
                value:'50%'
            },{
                title:'JS',
                value:'60%'
            },{
                title:'JQ',
                value:'70%'
            },{
                title:'Vue',
                value:'20%'
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



    audioInit();
    bindEvenInit();
})


function audioInit() {
    var audio =$('#audio').children('audio')[0];
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


    $('#slideBut').click(function () {
        $('#slideList').slideToggle(1000);
    })
    $('.navbtn').click(function () {
        $('#slideList').css('display','none')
    })
}


function removeElement(_element){
    var _parentElement = _element.parentNode;
    if(_parentElement){
        _parentElement.removeChild(_element);
    }
}

