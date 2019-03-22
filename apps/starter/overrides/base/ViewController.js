/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Starter.base.ViewController', {
    extend: 'Ext.app.ViewController',

    alternateClassName: 'Starter.ViewController',

    requires: [
        'Ext.window.Window'
    ],

    statics: {
        DEFAULT_ITEM: {},

        DEFAULT_WINDOW: {
            xtype: 'window',
            width: 500,
            minHeight: 200
        }
    },

    /**
     * 使用name显示对象的renderer
     * @param value
     */
    renderWithName: function (value) {
        return value == null ? null : value.name;
    },

    /**
     * 装载一条数据
     */
    loadEntity: function () {
        var vm = this.getViewModel(),
            entityId = this.getView().getEntityId();
        var pvm = vm.getParent();
        pvm.set('entityId', entityId);
        pvm.notify();
        var store = vm.get('entity');
        store.load(function (records, operation, success) {
            if (records.length != 1) {
            }
            var data = records[0].getData();
            vm.setData(data);
        });
    },

    /**
     * 关闭窗口
     * @param el
     */
    closeFrom: function (el) {
        var win = el.up('window');
        if (win) win.close();
    },

    /**
     * 弹出子窗口
     * @param target
     * @param windowConfig
     * @returns {winCfg}
     */
    open: function (target, windowConfig) {
        if (target == null) return null;

        var itemCfg,
            winCfg;

        if (Ext.isString(target)) itemCfg = Ext.apply({}, {xtype: target}, Starter.ViewController.DEFAULT_ITEM);
        else if (Ext.isObject(target)) {
            itemCfg = Ext.apply({}, target, Starter.ViewController.DEFAULT_ITEM);
        } else {
            Ext.Error.raise('错误的参数');
        }

        if (windowConfig == null) windowConfig = {};
        if (Ext.isString(windowConfig)) windowConfig = {title: windowConfig};
        winCfg = Ext.apply({}, windowConfig, Starter.ViewController.DEFAULT_WINDOW);

        winCfg = Ext.apply({}, {items: itemCfg}, winCfg);
        var win = Ext.create(winCfg);
        this.getView().add(win); // 这样就会公用ViewModel

        win.setScrollable(true);
        win.show();

        return win;
    },

    /**
     * Store刷新
     */
    reloadStore: function () {
        var defaultStore = 'list';
        this.getViewModel().getStore(defaultStore).reload();
    }
});