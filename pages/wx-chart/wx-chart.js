// pages/wx-chart/wx-chart.js
var util = require('../../utils/util.js');
const CHARTS = require('../../utils/wxcharts.js'); // 引入wx-charts.js文件
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataInfo: [{
                id: 1,
                subNum: "C1609050001",
                percentage: 30,
                grade: "SPCC",
                spec: "2.5*1200*C",
                weight: 500
            },
            {
                id: 2,
                subNum: "A1609050001",
                percentage: 80,
                grade: "SPCC",
                spec: "3.5*1200*C",
                weight: 100
            }
        ]

    },
    /**
     * 环
     */
    ringShow: function() {
        for (var i in this.data.dataInfo) {
            var item = this.data.dataInfo[i];
            
            let ring = {
                canvasId: "ringGraph", // 与canvas-id一致
                type: "ring",
                title:{
                  name :'q33'
                },
                series: [{
                        name: "已完成",
                        data: item.percentage,
                        color: '#ff6600'
                    },
                    {
                        name: "未完成",
                        data: 100 - item.percentage,
                        color: '#eeeeee'
                    }
                ],
                width: 100,
                height: 100,
                dataLabel: false,
                legend: false,
                title: { // 显示百分比
                    name: item.percentage + '%',
                    color: '#333333',
                    fontSize: 14
                },
                extra: {
                    pie: {
                        offsetAngle: -90
                    },
                    ringWidth: 6,
                }
            };
            new CHARTS(ring);
        }
    },

    lineShow: function(type) {
        var random1 = Math.floor(Math.random() * (500 - 50 + 1) + 50),
            random2 = Math.floor(Math.random() * (800 - 100 + 1) + 100),
            random3 = Math.floor(Math.random() * (1000 - 200 + 1) + 200),
            random4 = Math.floor(Math.random() * (300 - 10 + 1) + 10),
            random5 = Math.floor(Math.random() * (600 - 300 + 1) + 300),

            line = {
                canvasId: 'lineGraph', // canvas-id
                type: 'line', // 图表类型，可选值为pie, line, column, area, ring
                categories: ['201708', '201709', '201710', '201711', '201712'],
                series: [{ // 数据列表pieGraph
                    name: ' ',
                    data: [random1, random2, random3, random4, random5]
                }],
                yAxis: {
                    min: 0 // Y轴起始值
                },
                width: 310,
                height: 200,
                dataLabel: true, // 是否在图表中显示数据内容值
                legend: true, // 是否显示图表下方各类别的标识
                extra: {
                    lineStyle: 'curve' // (仅对line, area图表有效) 可选值：curve曲线，straight直线 (默认)
                }
            }
        new CHARTS(line);
    },
    pieShow: function(type){
      let pie = {
        canvasId: 'pieGraph', // canvas-id
        type: 'pie', // 图表类型，可选值为pie, line, column, area, ring
        series: [{
          name: '成交量1',
          data: 15,
          color:'#FFB90F',
        }, {
          name: '成交量2',
          data: 25,
          color: '#EE6AA7'          
        }, {
          name: '成交量3',
          data: 60,
          color: '#FFB5C5'          
        }],
        width: 300, // 宽度，单位为px
        height: 280, // 高度，单位为px
        legend: true, // 是否显示图表下方各类别的标识
        dataLabel: true, // 是否在图表中显示数据内容值
        dataPointShape:false,
        animation:true,
        title:{
          name:'测试',
          color: '#333333',
          fontSize: 14
        },
        extra: {
          ringWidth:20,
          pie: {
            offsetAngle: 180
          }
        },
        yAxis:{
          min:200,
          max :300
        },
        disablePieStroke:true
       
      };
      new CHARTS(pie);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
      this.pieCanvas();
      this.ringCanvas();
      this.lineCanvas();
      this.columnCanvas();
      this.areaCanvas();
      this.radarCanvas();
    },
    radarCanvas:function(){
      new CHARTS({
        canvasId: 'radarCanvas',
        type: 'radar',
        categories: ['1', '2', '3', '4', '5', '6'],
        series: [{
          name: '成交量1',
          data: [90, 110, 125, 95, 87, 122]
        }],
        width: 300,
        height: 200,
        extra: {
          radar: {
            max: 150
          }
        }
      });
    },
    areaCanvas:function(){
      new CHARTS({
        canvasId: 'areaCanvas',
        type: 'area',
        categories: ['2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017'],
        series: [{
          name: '成交量1',
          data: [70, 40, 65, 100, 34, 18],
          format: function (val) {
            return val.toFixed(2) + '万';
          }
        }, {
          name: '成交量2',
          data: [15, 20, 45, 37, 4, 80],
          format: function (val) {
            return val.toFixed(2) + '万';
          }
        }],
        yAxis: {
          format: function (val) {
            return val + '万';
          }
        },
        width: 300,
        height: 200
      });
    },
    columnCanvas:function(){
      new CHARTS({
        canvasId: 'columnCanvas',
        type: 'column',
        categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
        series: [{
          name: '成交量1',
          data: [15, 20, 45, 37, 4, 80]
        }, {
          name: '成交量2',
          data: [70, 40, 65, 100, 34, 18]
        }],
        yAxis: {
          format: function (val) {
            return val + '万';
          }
        },
        width: 320,
        height: 200
      });
    },
    lineCanvas:function(){
      new CHARTS({
        canvasId: 'lineCanvas',
        type: 'line',
        categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
        series: [{
          name: '成交量1',
          data: [0.15, 0.2, 0.45, 0.37, 0.4, 0.8],
          format: function (val) {
            return val.toFixed(2) + '万';
          }
        }, {
          name: '成交量2',
          data: [0.30, 0.37, 0.65, 0.78, 0.69, 0.94],
          format: function (val) {
            return val.toFixed(2) + '万';
          }
        }],
        yAxis: {
          title: '成交金额 (万元)',
          format: function (val) {
            return val.toFixed(2);
          },
          min: 0
        },
        width: 320,
        height: 200
      });
    },
    ringCanvas:function(){
      new CHARTS({
        canvasId: 'ringCanvas',
        type: 'ring',
        title: {
          name: '我是sky'
        },
        series: [{
          name: '成交量1',
          data: 15,
        }, {
          name: '成交量2',
          data: 35,
        }, {
          name: '成交量3',
          data: 78,
        }, {
          name: '成交量4',
          data: 63,
        }],
        width: 320,
        height: 200,
        dataLabel: false
      });
    },
    pieCanvas:function() {
      new CHARTS({
        canvasId: 'pieCanvas',
        type: 'pie',
        title: {
          name: '试卷知识版块结构',
        },
        series: [{
          name: 'cat1',
          data: 50,
        }, {
          name: 'cat2',
          data: 30,
        }, {
          name: 'cat3',
          data: 1,
        }, {
          name: 'cat4',
          data: 1,
        }, {
          name: 'cat5',
          data: 46,
        },
        {
          name: 'cat5',
          data: 46,
        },
        {
          name: 'cat5',
          data: 46,
        }],
        width: 300,
        height: 300,
        dataLabel: true
      });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        this.ringShow();
        this.pieShow('column');
        this.lineShow('column');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})