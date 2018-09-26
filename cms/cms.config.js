/**
 * 参数配置 *
 */

var cmsConfig = {
    serverUrl: 'http://10.184.255.10:8080/manage/web/',		            //  机顶盒
    imgUrl: 'http://10.184.255.10:8080/manage/',
    backUrl: '',
    index_back_url: '',
    environment: 'DEBUG',
    // environment: 'PRODUCT',

    /**
     * 教育概况
     */
    indexResourceIdArray: [
        {title: '教育概况', resourceId: '885'},
        // ---------------  菜单  ---------------  //


        // ---------------  海报（播放视频）  ---------------  //
        {title: '左上海报', resourceId: '890'},
        {title: '中间海报', resourceId: '891'},
        {title: '左下海报', resourceId: '892'},
        {title: '右侧海报', resourceId: '893'}
    ],

    /**
     *  校园风采
     */
    companyResourceIdArray: [
        {title: '校园风采', resourceId: '894'},
        // ---------------  菜单  ---------------  //
        {title: '名师目录', resourceId: '903'},
        {title: '特色校园', resourceId: '904'},
        {title: '书香校园', resourceId: '905'},
        {title: '墨香校园', resourceId: '906'},
        {title: '智慧校园', resourceId: '907'},
        {title: '校企合作', resourceId: '908'},

        // ---------------  海报（播放视频）  ---------------  //
        {title: '左侧海报', resourceId: '900'},
        {title: '中间海报', resourceId: '901'},
        {title: '右侧海报', resourceId: '902'}

        // ---------------  列表  ---------------  //

        // ---------------  滚动页  ---------------  //

    ],

    /**
     *  教师风采
     */
    teacherResourceIdArray: [
        {title: '教师风采', resourceId: '895'},

        // ---------------  菜单  ---------------  //
        {title: '名师风采', resourceId: '910'},
        {title: '劳动模范', resourceId: '911'},

        // ---------------  海报（播放视频）  ---------------  //

        // ---------------  列表  ---------------  //
        {title: '最新动态', resourceId: '909'}

        // ---------------  滚动页  ---------------  //
    ],

    /**
     * 名师课堂
     */
    classResourceIdArray: [
        {title: '名师课堂', resourceId: '896'},
        // ---------------  菜单  ---------------  //
        {title: '教育讲坛', resourceId: '914'},
        {title: '一师一优课', resourceId: '915'},
        {title: '教研', resourceId: '916'},
        {title: '培训', resourceId: '917'},

        // ---------------  海报（播放视频）  ---------------  //
        {title: '左侧海报', resourceId: '912'},
        {title: '右侧海报', resourceId: '913'}

        // ---------------  列表  ---------------  //

        // ---------------  滚动页  ---------------  //
    ],


    /**
     *  学生风采
     */
    studentResourceIdArray: [
        {title: '学生风采', resourceId: '897'},

        // ---------------  菜单  ---------------  //

        // ---------------  海报（播放视频）  ---------------  //
        {title: '左侧海报', resourceId: '918'},

        // ---------------  列表  ---------------  //
        {title: '最新动态', resourceId: '919'}

        // ---------------  滚动页  ---------------  //

    ],

    /**
     *  教育服务
     */
    serviceResourceIdArray: [
        {title: '教育服务', resourceId: '898'},
        // ---------------  菜单  ---------------  //
        {title: '小升初招生', resourceId: '922'},
        {title: '中考中招', resourceId: '923'},
        {title: '高考高招', resourceId: '924'},
        {title: '学生资助', resourceId: '925'},
        {title: '公费师范生', resourceId: '926'},

        // ---------------  海报（播放视频）  ---------------  //
        {title: '左侧海报', resourceId: '920'},
        {title: '右侧海报', resourceId: '921'}

        // ---------------  列表  ---------------  //

        // ---------------  滚动页  ---------------  //
    ],

    /**
     *  新时代新征程
     */
    timeResourceIdArray: [
        {title: '新时代新征程', resourceId: '899'},

        // ---------------  菜单  ---------------  //
        {title: '智慧党建', resourceId: '929'},
        {title: '工作典型', resourceId: '930'},
        {title: '专题学习', resourceId: '931'},
        {title: '通知公告', resourceId: '932'},

        // ---------------  海报（播放视频）  ---------------  //
        {title: '左侧海报', resourceId: '927'},
        {title: '右下海报', resourceId: '928'}

        // ---------------  列表  ---------------  //

        // ---------------  滚动页  ---------------  //
    ],

    operator: '',
    weather: '',
    temperature: '',
    windScale: ''
};