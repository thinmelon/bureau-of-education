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
    this.focusLeft = 58;
    this.focusTop = 120;
    this.focusWidth = 150;
    this.focusHeight = 50;
    this.focusPadding = 70;

    // 方法
    this.init = function () {
        var i, length, sidebar, subStrs, subResIds;

        this.removeAllNodes();

        sidebar = document.getElementById('sidebar-wrapper');
        subStrs = this.sidebarTextImages.split(",");
        subResIds = this.sidebarResourceIds.split(",");
        console.dir(subStrs);
        console.dir(subResIds);

        for (i = 0, length = subStrs.length; i < length && subStrs[i] !== ''; i++) {
            // 创建侧边坐栏项目图片
            var sidebarItem = document.createElement('img');
            sidebarItem.src = subStrs[i];
            sidebar.appendChild(sidebarItem);
            // 创建分隔线
            var rule = document.createElement('img');
            rule.src = '../images/more/rule.png';
            sidebar.appendChild(rule);
            // 设定光标样式
            this.sidebarItemArray[i] = {
                left: this.focusLeft,
                top: this.focusTop + (i * this.focusPadding),
                width: this.focusWidth,
                height: this.focusHeight,
                img: '',
                resourceId: subResIds[i]
            };

        }
    };

    /**
     *  移除当前侧边栏下的所有子结点
     */
    this.removeAllNodes = function () {
        var sidebar = document.getElementById('sidebar-wrapper');
        while (sidebar.hasChildNodes()) {
            sidebar.removeChild(sidebar.firstChild);
        }
    };

    this.focusOn = function (cursor) {
        if (this.sidebarItemArray.length > 0 &&
            this.focusPos < this.sidebarItemArray.length) {
            cursor.style.visibility = "visible";
            cursor.style.left = this.sidebarItemArray[this.focusPos].left + "px";
            cursor.style.top = this.sidebarItemArray[this.focusPos].top + "px";
            cursor.style.width = this.sidebarItemArray[this.focusPos].width + "px";
            cursor.style.height = this.sidebarItemArray[this.focusPos].height + "px";
        }
    };

    this.focusOut = function (cursor) {
        cursor.style.visibility = "hidden";
    };

    this.moveX = function () {
        return -1;
    };

    /**
     * 移动时切换 更多内容 区域的内容
     */
    this.moveY = function (_direction) {
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

}