/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Starter.view.main.MainHeader', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-header',

    requires: [
        'Starter.view.main.Main'
    ],

    //headerAsText: false,
    //title:'应用程序头部',

    // items: {
    //     html:'<div class="mainheader"><img src="resources/zzd.png" style="margin-top: 20px;margin-left: 20px"></div>'
    // }
    shadow: true,
    shadowOffset: 5,
    bodyStyle: {
        // "background-image": 'url(resources/background.png)',
        // "background-size": "100% 74px",
        // "background-repeat": "no-repeat",
        "background-color": "#2eadf5",
        "width": "100%",
        "height": "76px"
    },
    layout: 'column',
    items: [{
        // margin: '10 5 20 20',
        // xtype: 'image',
        // height: 35,
        // width: 35,
        // alt: 'logo',
        // src: 'resources/logo.png'
    // }, {
        xtype: 'tbtext',
        margin: '19 0 0 25',
        style: {
            "font-size": '22px',
            "font-weight": '450',
            "color": 'white'
        },
        width: 430,
        html: '营口市目录管理系统'
    }, {
        columnWidth: 0.9,
        margin: '100 0 0 0',
        height: 1
    }, {
        xtype: 'button',
        margin: '10 2 20 10',
        ui: 'header',
        style: {
            "color": "white",
            "font-size": "19px"
        },
        height: 35,
        width: 35,
        iconCls: 'x-fa fa-navicon',
        handler: 'onToggleNavigationSize'

    }, {
        xtype: 'textfield',
        hrefTarget: '_self',
        margin: '10 40 20 0',
        width: 300,
        lineHeight: 65,
        triggerCls: 'x-fa fa-search',
        emptyText: '关键字搜索'

    }, {
        xtype: 'tbtext',
        margin: '20 0 0 10',
        text: '管理员',
        style: {
            'font-family': '黑体'
        },
        cls: 'topoint',
        width: 50,
        reference: 'guanliyuan',
        listeners: {
            'click': {
                element: 'el',
                fn: 'onClick'
            }
        }
    }, {
        margin: '10 0 20 10',
        xtype: 'image',
        cls: 'header-right-profile-image topoint',
        height: 35,
        width: 35,
        alt: '当前用户',
        tooltip: '管理员',
        listeners: {
            'click': {
                element: 'el',
                fn: 'onClick'
            }
        },
        src: 'resources/7.png'
    }]
});