// pages/address-list/address-list.js
let app = getApp() 
var util = require("../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: '',
    page: 1,
    limit: 10,
    total: 0,
    addressList: [], // 地址列表
    isDone: false, // 是否加载完毕
  },
  /**
   * 页面跳转
   */
  toAdd: function () {
    wx.navigateTo({
      url: '../add-address/add-address'
    })
  },
  goList: function (e) {
    console.log('e', e)
    let id = e.currentTarget.id; // （获取传过来的参数）
    console.log('id:',id)
    wx.navigateTo({
      url: '../edit-address/edit-address?id='+id
    })
  },
  /**
   * 选择地址
   */
  seleAddress: function (e) {
    let id = e.currentTarget.id;
    util.myrequest({id: id, openid: wx.getStorageSync('openid'), uniacid:3 }, '/address/default', 'PUT', res=> {
      if (res.result) {
        wx.showToast({
          title: res.message,
          icon: 'success',
          duration: 1000
        })
        this.data.offset = 0
        this.getAddress()
        wx.navigateBack({
          delta: 1
        })
      } else {
        this.wetoast.toast({
          title: res.message,
          duration: 2000
        })
      }
      
    })

  },

  getAddress:function (){
    let params={
      offset: (this.data.page - 1) * this.data.limit, 
      limit: this.data.limit, 
      openid: wx.getStorageSync('openid'), 
      uniacid:3
    }
    util.myrequest(params , '/member/address', 'GET', res=> {
      if (res.result) {
        this.setData({
          addressList: res.datas.rows,
          total: res.datas.total
        })
        console.log(this.data.addressList)
        if (this.data.addressList.length >= this.data.total) {   /* 所有数据加载完毕 */
          this.setData({
            isDone: true
          })
          // console.log('开始结束', this.data.isDone)
          return
        }
      } else {
        this.wetoast.toast({
          title: res.message,
          duration: 2000
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    new app.WeToast() //创建可重复使用的WeToast实例，并附加到this上，通过this.Wetoast访问
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight - 50
        })
        // console.log(this.data.height)
      }
    })

  },

    /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getAddress();
    
  },

   /**
   * 页面上拉触底事件的处理函数
   */
  loadMore: function () {
    console.log(11)
    // console.log('加载更多')
    // console.log(this.data.addressList.length, this.data.total)
    // console.log( this.data.page, Math.ceil(this.data.total / this.data.limit))
    if (this.data.addressList.length >= this.data.total || this.data.page >= Math.ceil(this.data.total / this.data.limit)) {   /* 所有数据加载完毕 */
      this.setData({
        isDone: true
      })
      // console.log('结束', this.data.isDone)
      return
    }

    this.data.page++

    let params={
      offset: (this.data.page - 1) * this.data.limit, 
      limit: this.data.limit, 
      openid: wx.getStorageSync('openid'), 
      uniacid:3
    }

    util.myrequest(params , '/member/address', 'GET', res=> {
      if (res.result) {

        this.setData({
          addressList: this.data.addressList.concat(res.datas.rows),
          total: res.datas.total
        })
        
      } else {
        this.wetoast.toast({
          title: res.message,
          duration: 2000
        })
      }

    })
  },

})