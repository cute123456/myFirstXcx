// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[3,4,5,6,6,7,5]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

    onMyEvent: function (e) {
      console.log(111)
    e.detail // 自定义组件触发事件时提供的detail对象
  },
})