Ext.define('Cmdb.view.asset.zcwh.resource.ResourceSelect', {
    extend: 'Ext.grid.Panel',
    xtype: 'resource-select',

    requires: [
        'Cmdb.model.Resource',
        'Cmdb.view.asset.zcwh.resource.ResourceController',
        'Cmdb.view.asset.zcwh.resource.ResourceSelectModel'
    ],

    controller: 'resource',
    viewModel: {
        type: 'resourceselect'
    },
    bind: {
        store: '{list}'
    },
    width: 770,
    height: 450,
    listeners: {
        'rowdblclick': 'onDbclick'
    },
    columns: [{
        xtype: 'rownumberer'
    }, {
        text: '目录标题',
        flex: 2,
        dataIndex: 'title'
    }, {
        text: '资源类型',
        flex: 1,
        dataIndex: 'type'
    }, {
        text: '资源格式',
        flex: 1,
        dataIndex: 'format'
    }],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true,
        store: this.store
    }

});