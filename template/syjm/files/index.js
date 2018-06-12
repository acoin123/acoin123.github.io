var $window = $(window);
var $document = $(document);

//块链接
(function(){
    if ($('.J_link').length) {
        $document.find('.wrapper').on('click', '.J_link', function(e) {
            if (!$(e.target).closest('a').length) {
                var $this = $(this);
                var $a = $this.find('a[href!="javascript:;"]');
                var url = $a.attr('href')||'/';
                var target = $a.attr('target');
                if (target == '_blank') {
                    window.open(url);
                } else {
                    location.href = url;
                }
            }
        });
    }
})();

//导航
(function(){
    var $mod_side = $('.mod-menu');
    var $links = $mod_side.find('a[href*=#]');
    var $list = $.map($links,function(link){
        var $link = $(link);
        var hash = $link.attr('href');
        var $item = $(hash);
        if($item.length){
            return $item;
        }
    });
    var isAnimate = false;
    var scroll = function(){
        var id='';
        var scroll_top = $document.scrollTop();
        var offset = $window.width()<800?60:30;
        for(var i=0;i<$list.length;i++){
            var top = $list[i].offset().top-offset;
            if(top<=scroll_top){
                id = $list[i].attr('id');
            }
        }
        if(id&&!isAnimate){
            $links.parent().removeClass('active');
            $links.filter('[href=#'+id+']').parent().addClass('active');
        }
    };
    $links.on('click',function(){
        var $this = $(this);
        var offset = $window.width()<800?60:30;
        var hash = $this.attr('href');
        var $panel = $(hash);
        var top = $panel.offset().top-offset;
        $links.parent().removeClass('active');
        $this.parent().addClass('active');
        isAnimate = true;
        $('html,body').animate({scrollTop:top},500,function(){
            isAnimate = false;
        });
        return false;
    });
    $window.scroll(scroll);
    scroll();
})();

//菜单展开
(function(){
    var $body = $('body');
    var $mod_side = $('.mod-menu');
    $document.on('click',function(e){
        if($(e.target).hasClass('mark')){ //代理失效替代方法
            var isShow = $mod_side.hasClass('mod-menu-show');
            $mod_side.toggleClass('mod-menu-show',!isShow);
            $mod_side.toggleClass('mod-menu-hide',isShow);
            if(isShow){
                $body.css('overflow','');
            }else{
                $body.css('overflow','hidden');
            }
        }
    });
    $document.on('click','.nav-bar',function(e){
        var isShow = $mod_side.hasClass('mod-menu-show');
        $mod_side.toggleClass('mod-menu-show',!isShow);
        $mod_side.toggleClass('mod-menu-hide',isShow);
        if(isShow){
            $body.css('overflow','');
        }else{
            $body.css('overflow','hidden');
        }
    });
})();