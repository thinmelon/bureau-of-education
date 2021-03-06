function TexturesModule() {
    this.swiper = null;
    this.pager = null;
    /**
     *  滚动时间间隔
     */
    this.marqueeCount = 13;
    /**
     *  模块初始化参数
     */
    this.isShowGraphics = 'show';
    this.backURL = '';
    this.logoImageSrc = '';
    this.resourceId = '';

    /**
     *  初始化
     */
    this.init = function () {
        // 设置页面标题图片
        document.getElementById("title-img").src = this.logoImageSrc;
        //  是否显示图片
        if ('show' === this.isShowGraphics) {
            this.swiper = new SwiperModule();
            this.swiper.swiperTop = 225;
            this.swiper.swiperLeft = 130;
            this.swiper.swiperWidth = 500;
            this.swiper.swiperHeight = 332;

            document.getElementById('textures-trapper').className = 'textures-trapper';
            document.getElementById('textures-text').className = 'textures-text';
        } else {
            document.getElementById('textures-trapper').className = 'textures-trapper-alone';
            document.getElementById('textures-text').className = 'textures-text-alone';
        }
        this.pager = new PagerModule();
    };

    /**
     *  数据加载
     */
    this.render = function (data) {
        var that = this;

        showTitleForMarquee(data.title, document.getElementById('textures-title'), this.marqueeCount);
        document.getElementById('textures-text').innerHTML = data.content;
        if ('show' === this.isShowGraphics) {
            // 加载滚动图片
            this.swiper.album = data.imgArr;
            this.swiper.init();
            setTimeout(function () {
                that.pager.setParameters();
            }, 500);
        }
    };
}