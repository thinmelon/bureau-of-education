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
            barItemWrapper,
            barItem,
            bar = document.getElementById('bar');


        for (i = 0, length = this.barItemArray.length; i < length; i++) {
            barItemWrapper = document.createElement('div');
            barItemWrapper.id = 'bar-item-wrapper-' + i;
            barItemWrapper.className = 'bar-item-wrapper';
            barItemWrapper.style.left = this.barItemLeft + (i * this.barItemPadding) + "px";

            barItem = document.createElement('div');
            barItem.id = 'bar-item-' + i;
            barItem.className = 'bar-item';
            barItem.innerHTML = this.barItemArray[i].title;

            barItemWrapper.appendChild(barItem);
            bar.appendChild(barItemWrapper);
        }

    };

    this.focusOn = function () {
        console.info('bar.module.js ==> focusOn | focusPos: ' + this.focusPos);
        document.getElementById('bar-item-wrapper-' + this.focusPos).style.background =
            'url(../images/bar/highlight.png) center no-repeat';
        document.getElementById('bar-item-' + this.focusPos).style.color = '#FFF';
    };

    this.focusOut = function () {
        document.getElementById('bar-item-wrapper-' + this.focusPos).style.background = '';
        document.getElementById('bar-item-' + this.focusPos).style.color = '#000';
    };

    this.moveX = function (direction) {
        this.focusPos += direction;
        if (this.focusPos >= 0 && this.focusPos < this.barItemArray.length) {

        } else if (this.focusPos < 0) {
            this.focusPos = this.barItemArray.length - 1;
        } else {
            this.focusPos = 0;
        }
    };

    this.moveY = function (direction) {
        return -1;
    };

    this.doSelect = function (postfix) {
        window.location.href = 'more.html' + postfix;
    };
}