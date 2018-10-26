/**
 *
 *      侧边栏模块
 *
 */
function SidebarModule() {
    // 属性
    this.focusPos = 0;
    this.sidebarItemArray = [];
    this.sidebarGroup = 0;
    // 样式
    this.sidebarLeft = 57;
    this.sidebarTop = 168;
    this.sidebarWidth = 150;
    this.sidebarHeight = 50;

    // 方法
    this.init = function () {
        var
            i,
            length,
            sidebarItem,
            sidebar = document.getElementById('sidebar');

        if (this.sidebarGroup === 0) {
            this.sidebarItemArray = [
                {
                    title: '小学',
                    resourceId: 983,
                    // resourceId: 2,
                    left: 0,
                    top: 0,
                    width: 154,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/1.png) center no-repeat'
                },
                {
                    title: '初中',
                    resourceId: 984,
                    left: 164,
                    top: 0,
                    width: 154,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/2.png) center no-repeat'
                },
                {
                    title: '高中',
                    resourceId: 985,
                    left: 327,
                    top: 0,
                    width: 154,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/3.png) center no-repeat'
                }
            ];
        } else if (this.sidebarGroup === 2) {
            this.sidebarItemArray = [
                {
                    title: '朗诵专场',
                    resourceId: 976,
                    left: 0,
                    top: 0,
                    width: 154,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/4.png) center no-repeat'
                },
                {
                    title: '器乐专场',
                    resourceId: 977,
                    left: 164,
                    top: 0,
                    width: 154,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/5.png) center no-repeat'
                },
                {
                    title: '声乐专场',
                    resourceId: 978,
                    left: 327,
                    top: 0,
                    width: 151,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/6.png) center no-repeat'
                },
                {
                    title: '舞蹈专场',
                    resourceId: 981,
                    left: 488,
                    top: 0,
                    width: 151,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/7.png) center no-repeat'
                },
                {
                    title: '戏剧专场',
                    resourceId: 980,
                    left: 650,
                    top: 0,
                    width: 151,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/8.png) center no-repeat'
                }
            ];
        } else if (this.sidebarGroup === 1) {
            this.sidebarItemArray = [
                {
                    title: '一年级',
                    resourceId: 1007,
                    left: 0,
                    top: 0,
                    width: 154,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/9.png) center no-repeat'
                },
                {
                    title: '二年级',
                    resourceId: 1008,
                    left: 164,
                    top: 0,
                    width: 154,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/10.png) center no-repeat'
                },
                {
                    title: '三年级',
                    resourceId: 1009,
                    left: 327,
                    top: 0,
                    width: 151,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/11.png) center no-repeat'
                },
                {
                    title: '四年级',
                    resourceId: 1010,
                    left: 488,
                    top: 0,
                    width: 151,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/12.png) center no-repeat'
                },
                {
                    title: '五年级',
                    resourceId: 1011,
                    left: 650,
                    top: 0,
                    width: 151,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/13.png) center no-repeat'
                },
                {
                    title: '六年级',
                    resourceId: 1012,
                    left: 812,
                    top: 0,
                    width: 151,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/14.png) center no-repeat'
                }
            ];
        }

        sidebar.style.left = this.sidebarLeft + 'px';
        sidebar.style.top = this.sidebarTop + 'px';
        sidebar.style.width = this.sidebarWidth + 'px';
        sidebar.style.height = this.sidebarHeight + 'px';


        for (i = 0, length = this.sidebarItemArray.length; i < length; i++) {
            sidebarItem = document.createElement('div');
            //sidebarItem.id = 'bar-item-wrapper-' + i;
            sidebarItem.className = 'sidebar-item';
            sidebarItem.style.left = this.sidebarItemArray[i].left + 'px';
            sidebarItem.style.top = this.sidebarItemArray[i].top + 'px';
            sidebarItem.style.width = this.sidebarItemArray[i].width + 'px';
            sidebarItem.style.height = this.sidebarItemArray[i].height + 'px';
            sidebarItem.style.background = this.sidebarItemArray[i].bgImageSrc;
            sidebar.appendChild(sidebarItem);
        }
    };

    /**
     *  移除当前侧边栏下的所有子结点
     */
    //this.removeAllNodes = function () {
    //    var sidebar = document.getElementById('sidebar-wrapper');
    //    while (sidebar.hasChildNodes()) {
    //        sidebar.removeChild(sidebar.firstChild);
    //    }
    //};

    this.focusOn = function (cursor) {
        if (this.sidebarItemArray.length > 0 && this.focusPos < this.sidebarItemArray.length) {
            cursor.style.visibility = "visible";
            cursor.style.left = (this.sidebarLeft + this.sidebarItemArray[this.focusPos].left) + "px";
            cursor.style.top = (this.sidebarTop + this.sidebarItemArray[this.focusPos].top) + "px";
            cursor.style.width = this.sidebarItemArray[this.focusPos].width + "px";
            cursor.style.height = this.sidebarItemArray[this.focusPos].height + "px";
        }
    };

    this.focusOut = function (cursor) {
        cursor.style.visibility = "hidden";
    };

    this.moveX = function (_direction) {
        this.focusPos += _direction;
        if (this.focusPos >= 0 && this.focusPos < this.sidebarItemArray.length) {
            return 0;
        } else if (this.focusPos < 0) {
            this.focusPos = 0;
            return -1;
        } else {
            this.focusPos = this.sidebarItemArray.length - 1;
            return -1;
        }
    };

    /**
     * 移动时切换 更多内容 区域的内容
     */
    this.moveY = function (_direction) {
        return -1;
    };

}