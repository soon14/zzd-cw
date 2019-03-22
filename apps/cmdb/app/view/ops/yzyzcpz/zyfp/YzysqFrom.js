Ext.define('Cmdb.view.ops.yzyzcpz.zyfp.YzysqForm', {
    extend: 'Ext.form.Panel',
    xtype: 'yzysq-form',


    defaults: {
        xtype: 'fieldset',
        layout: 'column',
        defaults: {
            columnWidth: 0.5,
            margin: 10
        }
    },
    viewModel: {
        type: 'zyfp'
    },
    items: [{
        title: '资产信息',
        items: [{
            xtype: 'textfield',
            name: 'y_title',
            fieldLabel: '资产名称',
            columnWidth: 1,
            bind: '{y_title}'
        }, {
            xtype: 'textfield',
            name: 'y_code',
            fieldLabel: '资产编号',
            bind: '{y_code}'
        }, {
            xtype: 'textfield',
            name: 'y_type',
            fieldLabel: '资产类别',
            bind: '{y_type}'
        }, {
            xtype: 'textfield',
            name: 'y_dept',
            fieldLabel: '提供部门',
            bind: '{y_dept}'
        }, {
            xtype: 'textfield',
            name: 'y_zcml',
            fieldLabel: '资产目录',
            bind: '{y_zcml}'
        }, {
            xtype: 'textarea',
            name: 'y_zcdes',
            fieldLabel: '资产说明',
            columnWidth: 1,
            bind: '{y_zcdes}'
        }]
    }, {
        title: '申请信息',
        items: [{
            xtype: 'datefield',
            name: 'y_yqwcsj',
            fieldLabel: '要求完成时间'
        }, {
            xtype: 'combo',
            name: 'y_lxr',
            fieldLabel: '联系人',
            displayField: 'name',
            valueField: 'value',
            emptyText: '选择接收人',
            store: {
                fields: ['name', 'value'],
                data: [
                    {name: '王石', value: 'wangs'},
                    {name: '陈薇', value: 'chenw'},
                    {name: '方荣', value: 'fangr'},
                    {name: '莫智胜', value: 'mozs'}
                ]
            }
        }, {
            xtype: 'combo',
            name: 'y_glxm',
            fieldLabel: '关联项目',
            displayField: 'name',
            valueField: 'value',
            emptyText: '选择关联项目',
            store: {
                fields: ['name', 'value'],
                data: [
                    {name: '金卡工程', value: 'xma'},
                    {name: '市民卡工程', value: 'xmb'},
                    {name: '大数据监控', value: 'xmc'}
                ]
            }
        }, {
            xtype: 'textarea',
            name: 'y_sqyt',
            columnWidth: 1,
            fieldLabel: '申请用途'
        }, {
            xtype: 'textarea',
            name: 'y_bcxq',
            columnWidth: 1,
            fieldLabel: '补充需求'
        }]
    }],
    listeners: {
        render: function (view) {
            if (view.up('window').needAllData) {
                var data = new Date(Date.now());
                var Month = data.getMonth() + 1;
                function addZero(date) {
                    if (String(date).length == 1) {
                        return String(0) + String(date)
                    } else {
                        return date
                    }
                }
                var ret = String(data.getFullYear()) +
                    addZero(Month) +
                    addZero(data.getDate());
                var recordData = JSON.parse(view.up('window').needAllData);
                var data = {
                    y_title: recordData.text + '实例' + top._slIndex + '_' + ret,
                    y_code: recordData.code + '_sl' + top._slIndex + '_' + ret,
                    y_type: '政务云资源',
                    y_dept: Ext.app.ViewController.LOGIN_USER.dept,
                    y_zcml: recordData.text,
                    y_zcdes: recordData.des
                };
                if (recordData.y_title) {
                    data.y_title = recordData.y_title + '实例' + top._slIndex + '_' + ret;
                    data.y_code = recordData.sl_code + '_sl' + top._slIndex + '_' + ret;
                    data.y_zcml = recordData.y_title;
                    data.y_zcdes = recordData.y_zcdes;

                }
                console.log(data)
                var vm = view.getViewModel();
                vm.set(data);
            }
        }
    }
});