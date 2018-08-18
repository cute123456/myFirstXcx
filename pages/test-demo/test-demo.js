var app = getApp();
Page({
  data: {
    GZtate: true,
    // 轮播
    imgUrls: [
      'http://mz.djmall.xmisp.cn/files/product/20161201/148058328876.jpg',
      'http://mz.djmall.xmisp.cn/files/product/20161201/148058328876.jpg',
      'http://mz.djmall.xmisp.cn/files/product/20161201/148058328876.jpg'
    ],
    indicatorDots: false,
    interval: 5000,
    duration: 1000,
    autoplay: true,
    // over

    list: [],

    clientHeight: 0, arr: [], arrHight: []
  },

  onLoad: function () {
    var that = this
    var page = that.data.page
    // wx.request({
    //   url: request_url,
    //   data: {
    //     'signature': signature,
    //     'page': 1,
    //     'pageSize': 2
    //   },
    //   success: function (res) {
    //     let list = res.data.content
    //     for (var i = 0; i < list.length; i++) {
    //       list[i].url = "../../img/771.gif" //用json的格式创建url，作为加载过度图片
    //     }
    //     that.setData({
    //       list: list,
    //     })
    //   }
    // })
  },

  //监听图片加载页面
  _imgOnLoad: function (e) {
    // console.log(e)
    var loadedUrl = e.target.id
    let that = this
    let list = that.data.list
    for (var i = 0; i < list.length; i++) {
      if (list[i].cover_url == loadedUrl) {
        list[i].loaded = true
      }
      that.setData({
        list
      })
    }
  }
})