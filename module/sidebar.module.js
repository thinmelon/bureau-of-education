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
                    bgImageSrc: 'url(../images/sidebar/0-1.png) center no-repeat'
                },
                {
                    title: '初中',
                    resourceId: 984,
                    // resourceId: 3,
                    left: 164,
                    top: 0,
                    width: 154,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/0-2.png) center no-repeat'
                },
                {
                    title: '高中',
                    resourceId: 985,
                    left: 327,
                    top: 0,
                    width: 154,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/0-3.png) center no-repeat'
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
                    bgImageSrc: 'url(../images/sidebar/1-1.png) center no-repeat'
                },
                {
                    title: '二年级',
                    resourceId: 1008,
                    left: 164,
                    top: 0,
                    width: 154,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/1-2.png) center no-repeat'
                },
                {
                    title: '三年级',
                    resourceId: 1009,
                    left: 327,
                    top: 0,
                    width: 151,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/1-3.png) center no-repeat'
                },
                {
                    title: '四年级',
                    resourceId: 1010,
                    left: 488,
                    top: 0,
                    width: 151,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/1-4.png) center no-repeat'
                },
                {
                    title: '五年级',
                    resourceId: 1011,
                    left: 650,
                    top: 0,
                    width: 151,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/1-5.png) center no-repeat'
                },
                {
                    title: '六年级',
                    resourceId: 1012,
                    left: 812,
                    top: 0,
                    width: 151,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/1-6.png) center no-repeat'
                },
                {
                    title: '朗诵',
                    resourceId: 1013,
                    left: 975,
                    top: 0,
                    width: 151,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/1-7.png) center no-repeat'
                }
            ];
        } else if (this.sidebarGroup === 2) {
            this.sidebarItemArray = [
                {
                    title: '器乐',
                    resourceId: 977,
                    left: 0,
                    top: 0,
                    width: 108,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/2-1.png) center no-repeat'
                },
                {
                    title: '声乐',
                    resourceId: 978,
                    left: 118,
                    top: 0,
                    width: 108,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/2-2.png) center no-repeat'
                },
                {
                    title: '舞蹈',
                    resourceId: 980,
                    left: 235,
                    top: 0,
                    width: 108,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/2-3.png) center no-repeat'
                },
                {
                    title: '戏剧',
                    resourceId: 981,
                    left: 352,
                    top: 0,
                    width: 108,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/2-4.png) center no-repeat'
                },
                {
                    title: '美术',
                    resourceId: 1014,
                    left: 470,
                    top: 0,
                    width: 108,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/2-5.png) center no-repeat'
                },
                {
                    title: '书法',
                    resourceId: 1015,
                    left: 588,
                    top: 0,
                    width: 108,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/2-6.png) center no-repeat'
                },
                {
                    title: '民间',
                    resourceId: 1016,
                    left: 705,
                    top: 0,
                    width: 108,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/2-7.png) center no-repeat'
                },
                {
                    title: '体育',
                    resourceId: 1017,
                    left: 823,
                    top: 0,
                    width: 108,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/2-8.png) center no-repeat'
                },
                {
                    title: '摄影',
                    resourceId: 1018,
                    left: 940,
                    top: 0,
                    width: 108,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/2-9.png) center no-repeat'
                },
                {
                    title: '其它',
                    resourceId: 1019,
                    left: 1058,
                    top: 0,
                    width: 108,
                    height: 47,
                    bgImageSrc: 'url(../images/sidebar/2-10.png) center no-repeat'
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