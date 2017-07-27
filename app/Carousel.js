define(['jquery'], function($){
   function Carousel($ct){
        this.$ct = $ct;
        this.init();
        this.bind();
    }

    Carousel.prototype.init = function(){
        var imgWidth = this.imgWidth = this.$ct.find('img').width();
        var $item = this.$item = this.$ct.find('.content> li');
        var $imgCt = this.$imgCt = this.$ct.find('.content');
        var $preBtn = this.$preBtn = this.$ct.find('.pre-arrow');
        var $nextBtn = this.$nextBtn = this.$ct.find('.aft-arrow');
        var imgCount = this.imgCount = $item.length;
        var pageIndex = this.pageIndex = 0;
        var $signal = this.$signal = this.$ct.find('.scrollbar .signal');
        var animateStatus = this.animateStatus = false;

        $imgCt.width(($item.length + 2) * imgWidth);
        $imgCt.append($item.first().clone());
        $imgCt.prepend($item.last().clone());
        $imgCt.css({left: -imgWidth});
        $(window).on('click', function(e){
            var a = e.target;
            console.log(a);
        })
    }

    Carousel.prototype.bind = function(){
        var _this = this;
        this.$preBtn.on('click', function(e){
            console.log(2323213)
            e.preventDefault();
            _this.playPrevious(1);
        })
        this.$nextBtn.on('click', function(e){
            e.preventDefault();
            _this.playNext(1);
        })

        this.$signal.on('click', function(){
            var index = $(this).index();
            if( index > _this.pageIndex){
                _this.playNext( index - _this.pageIndex);
            }else if( index < _this.pageIndex){
                _this.playPrevious( _this.pageIndex - index);
            }
        })
    }
        Carousel.prototype.playPrevious = function(len){
            var _this = this;
            if(_this.animateStatus === true) return;
            _this.animateStatus = true;
            _this.$imgCt.animate({ left: "+=" + len * _this.imgWidth }, function(){
                _this.pageIndex -= len;
                if( _this.pageIndex < 0){
                    _this.$imgCt.css({ left: -(_this.imgWidth * _this.imgCount)});
                    _this.pageIndex = _this.imgCount - 1;
                }
                _this.setFootbar();
                console.log(_this.pageIndex);
                _this.animateStatus = false;
            })
        }

        Carousel.prototype.playNext = function(len){
            var _this = this;
            if(_this.animateStatus === true) return;
            _this.animateStatus = true;
            _this.$imgCt.animate({ left: "-=" + len * _this.imgWidth }, function(){
                _this.pageIndex += len;
                if( _this.pageIndex === _this.imgCount){
                    _this.$imgCt.css({left : -_this.imgWidth});
                    _this.pageIndex = 0;
                }
                _this.setFootbar();
                console.log(_this.pageIndex);
                _this.animateStatus = false;
            })
        }

        Carousel.prototype.setFootbar = function(){
            this.$signal.removeClass('active')
                .eq(this.pageIndex).addClass('active');
        }

     new Carousel($('.carousel'));
})

 
