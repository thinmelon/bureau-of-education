/* -------------------------------------------------------------------------------------------- */
/*----------------------------------------- 海报模块助手  --------------------------------------*/
/* -------------------------------------------------------------------------------------------- */

function PostModule() {
    var that = this;

    // 属性
    this.focusPos = 0;                // 记录光标在区域内的位置
    this.postItemArray = [];

    // 方法
    this.init = function () {
        var i,
            length,
            newPostItem,
            newPostItemImage;

        for (i = 0, length = this.postItemArray.length; i < length; i++) {
            newPostItem = document.createElement('div');
            newPostItem.className = 'post-item';
            newPostItem.style.left = this.postItemArray[i].left + 'px';
            newPostItem.style.top = this.postItemArray[i].top + 'px';
            newPostItem.style.width = this.postItemArray[i].width + 'px';
            newPostItem.style.height = this.postItemArray[i].height + 'px';
            newPostItemImage = document.createElement('img');
            newPostItemImage.src = this.postItemArray[i].bgImageSrc;
            newPostItemImage.style.width = this.postItemArray[i].width + 'px';
            newPostItemImage.style.height = this.postItemArray[i].height + 'px';

            newPostItem.appendChild(newPostItemImage);
            document.getElementById('post').appendChild(newPostItem);
        }
    };

    this.focusOn = function (cursor) {
        cursor.style.visibility = "visible";
        cursor.style.left = this.postItemArray[this.focusPos].left + "px";
        cursor.style.top = this.postItemArray[this.focusPos].top + "px";
        cursor.style.width = (this.postItemArray[this.focusPos].width + 3) + "px";
        cursor.style.height = (this.postItemArray[this.focusPos].height + 2) + "px";
    };

    this.focusOut = function (cursor) {
        cursor.style.visibility = "hidden";
    };

    this.moveX = function (_direction) {
        this.focusPos += _direction;
        if (this.focusPos >= 0 && this.focusPos < this.postItemArray.length) {
            return 0;
        } else if (this.focusPos < 0) {
            this.focusPos = 0;
            return -1;
        } else {
            this.focusPos = this.postItemArray.length - 1;
            return -1;
        }
    };

    this.moveY = function (_direction) {
        this.focusPos += _direction;

        if (this.focusPos >= 0 && this.focusPos < this.postItemArray.length) {
            return 0;
        } else if (this.focusPos < 0) {
            this.focusPos = this.postItemArray.length - 1;
            return -1;
        } else {
            this.focusPos = 0;
            return -1;
        }
    };

    this.doSelect = function (postfix) {
        console.info("post.module.js    ==>     doSelect");
        console.info(this.postItemArray[this.focusPos].url + postfix);
        window.location.href = this.postItemArray[this.focusPos].url + postfix;
    }
}