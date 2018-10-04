/**
 *
 *      侧边栏模块
 *
 */
function SidebarModule() {
    // 属性
    this.focusPos = 0;
    this.sidebarItemArray = [];
    this.sidebarTextImages = "";
    this.sidebarResourceIds = "";
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