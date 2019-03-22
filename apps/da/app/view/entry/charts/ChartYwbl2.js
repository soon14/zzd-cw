Ext.define('DA.view.charts.ChartYwbl2', {
    extend: 'Ext.Panel',
    xtype: 'chartywblx',
    controller: 'ywbl',
    layout: 'fit',
    items: {
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height: 500,
        // insetPadding: {
        //     top: 40,
        //     left: 40,
        //     right: 40,
        //     bottom: 10
        // },

        store: {
            fields: ['month', 'data1','data2','data3','data4'],
            data: [
                { month: '一季度', data1: 30,  data2: 36,  data3: 34,  data4: 36},
                { month: '二季度', data1: 40 , data2: 32,  data3: 26,  data4: 33},
                { month: '三季度', data1: 25 , data2: 21,  data3: 36,  data4: 26},
                { month: '四季度', data1: 18 , data2: 26,  data3: 16,  data4: 46},
            ]
        },

        animation: {
            easing: 'easeOut',
            // duration: 500
        },
        // legend: {
        //     type: 'sprite',
        //     docked: 'bottom'
        // },
        axes: [
            {
            type: 'numeric',
            position: 'left',
            fields: ['data1','data2','data3','data4'],
            grid: true,
            minimum: 0,
        },
        {
            type: 'category',
            position: 'bottom',
            fields: 'month',
            grid: true
        }],
        series: [
            {
            type: 'bar',
            xField: 'month',
            yField: ['data1','data2','data3','data4'],
            title: ['人社局','公安局','建委','科委'],
            stacked: false,
            style: {
                opacity: 2.80,
                minGapWidth: 30
            },
            highlightCfg: {
                strokeStyle: 'black',
                radius: 10
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onBarTipRender'
            }
        }]
    }

});