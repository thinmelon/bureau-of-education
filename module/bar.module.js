/**
 *   前置文件：
 *      /cms/cms.config.js
 * @constructor
 */
function BarModule() {
    // 属性
    this.focusPos = 0;
    this.barItemLeft = 0;
    this.barItemPadding = 154;
    this.barItemArray = [];

    // 方法
    this.init = function () {
        var
            i,
            length,
            left,
            barItemWrapper,
            bar = document.getElementById('bar');


        for (i = 0, left = 0, length = this.barItemArray.length; i < length; i++) {
            barItemWrapper = document.createElement('div');
            barItemWrapper.id = 'bar-item-wrapper-' + i;
            barItemWrapper.className = 'bar-item-wrapper';
            barItemWrapper.style.left = this.barItemArray[i].left + 'px';
            barItemWrapper.style.width = this.barItemArray[i].width + 'px';
            barItemWrapper.style.height = this.barItemArray[i].height + 'px';
            barItemWrapper.style.background = this.barItemArray[i].bgImageSrc;
            bar.appendChild(barItemWrapper);
        }
    };

    this.focusOn = function (cursor) {
        cursor.style.visibility = 'visible';
        cursor.style.left = 55 + this.barItemArray[this.focusPos].left + 'px';
        cursor.style.top = '95px';
        cursor.style.width = this.barItemArray[this.focusPos].width + 'px';
        cursor.style.height = this.barItemArray[this.focusPos].height + 'px';
    };

    this.focusOut = function (cursor) {
        cursor.style.visibility = 'hidden';
    };

    this.moveX = function (direction, postfix) {
        this.focusPos += direction;
        if (this.focusPos >= 0 && this.focusPos < this.barItemArray.length) {

        } else if (this.focusPos < 0) {
            this.focusPos = this.barItemArray.length - 1;
        } else {
            this.focusPos = 0;
        }
        // console.log(this.barItemArray[this.focusPos].url);
        // console.log(postfix);
        //document.getElementById('debug-message').innerHTML += '<br/>' + ' moveX: focusPos ==> ' + this.focusPos;
        //if (this.focusPos === 6 || this.focusPos === 7) {
        //    GMObj.pathManager.setBackURL(this.barItemArray[this.focusPos].url, 'http://10.184.255.11/fumei-xiuyu/view/topic.html' + postfix, postfix);
        //}
        window.location.href = this.barItemArray[this.focusPos].url;
    };

    this.moveY = function (direction) {
        return -1;
    };

    this.doSelect = function (postfix) {
        window.location.href = 'more.html' + postfix;
    };
}