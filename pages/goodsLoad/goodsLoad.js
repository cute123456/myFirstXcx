Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'red',
    scrollTop: 100,
    navbar: ['护肤', '彩妆', '香水', '个人护理'],
    currentTab: 0,
    fixed:'relative',
      swiperIndex: 0,//这里不写第一次启动展示的时候会有问题
    // banner
      imgUrls: [
      'http:\/\/mz.djmall.xmisp.cn\/files\/banner\/20161219\/148211980641.png',
      'http:\/\/mz.djmall.xmisp.cn\/files\/banner\/20161222\/148238831285.png',
      'http:\/\/mz.djmall.xmisp.cn\/files\/banner\/20161222\/14823895573.png'
    ],
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000, //自动切换时间间隔,3s
    duration: 1000, //  滑动动画时长1s

    hot_products:
    [
      {
        product_id: 1,
        imageurl: 'http://mz.djmall.xmisp.cn/files/banner/20161222/148237182618.png',
        html: "http://mz.djmall.xmisp.cn/files/activity/20161216/5853a0137573e84/mz2_ajax/index.html"
      },
      {
        product_id: 2,
        imageurl: 'http://mz.djmall.xmisp.cn/files/banner/20161202/148066038440.png',
        html: "http://mz.djmall.xmisp.cn/files/activity/20161208/584926f0017d874/mz1/index.html"
      }
    ],

    // navItems
    navItems: [
      {
        typeId: 0,
        name: '品牌馆',
        url: 'bill',
        imageurl: '../../images/bottom10.png',
      },
      {
        typeId: 1,
        name: '类目',
        url: 'bill',
        imageurl: '../../images/bottom2.png',
      },
      {
        typeId: 2,
        name: '特惠专场',
        url: 'bill',
        imageurl: '../../images/bottom4.png'
      },
      {
        typeId: 3,
        name: '推荐好友',
        url: 'bill',
        imageurl: '../../images/bottom6.png'
      }
    ],

    // 新品上架
    goodsItems: [
      {
        goodId: 0,
        name: '兰蔻小黑瓶',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057921620.jpg',
        newprice: "￥200.00",
        oldprice: "￥300.00",
      },
      {
        goodId: 1,
        name: '兰蔻清莹柔肤爽肤水',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057953326.jpg',
        newprice: "￥120.00",
        oldprice: "￥200.00",
      },
      {
        goodId: 2,
        name: '倩碧水嫩保湿精华面霜',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058228431.jpg',
        newprice: "￥320.00",
        oldprice: "￥400.00",
      },
      {
        goodId: 3,
        name: '特效润肤露',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/14805828016.jpg',
        newprice: "￥30.00",
        oldprice: "￥80.00",
      },
      {
        goodId: 4,
        name: '倩碧焕妍活力精华露',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058301941.jpg',
        newprice: "￥30.00",
        oldprice: "￥80.00",
      }, {
        goodId: 5,
        name: '日本资生堂洗颜',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058328876.jpg',
        newprice: "￥30.00",
        oldprice: "￥80.00",
      }
    ],

    newgoods_head_url: "http://mz.djmall.xmisp.cn/files/banner/20161202/148066062976.jpg",

    // 新品上架
    recommends: [

      {
        goodId: 7,
        name: 'OLAY玉兰油精油沐浴露玫瑰滋养二合一450ml',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161213/148162245074.jpg',
        newprice: "￥36.60",
        oldprice: "￥40.00",
      },
      {
        goodId: 10,
        name: '兰蔻玫瑰清滢保湿柔肤水嫩肤水化妆水400ml补水保湿温和不刺激',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057937593.jpg',
        newprice: "￥30.00",
        oldprice: "￥80.00",
      }, {
        goodId: 11,
        name: 'Lancome/兰蔻清莹柔肤爽肤水/粉水400ml补水保湿玫瑰水化妆水',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057953326.jpg',
        newprice: "￥30.00",
        oldprice: "￥80.00",
      },
      {
        goodId: 12,
        name: '美国CLINIQUE倩碧黄油无油/特效润肤露125ml',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/14805828016.jpg',
        newprice: "￥239.00",
        oldprice: "￥320.00",
      },
      {
        goodId: 13,
        name: '法国LANCOME兰蔻柔皙轻透隔离防晒乳霜50ML2017年3月到期',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058014894.jpg',
        newprice: "￥130.00",
        oldprice: "￥180.00",
      },
    ],
  },

  //加载更多
  onReachBottom: function () {
    console.log('加载更多');
    var _that = this;
    if (_that.data.goodsItems.length<100){
      console.log(1111)
      _that.data.goodsItems.push(..._that.data.goodsItems);
      setTimeout(() => {
        _that.setData({
          isHideLoadMore: true,
          goodsItems: _that.data.goodsItems
        })
      }, 1000)
    }

  },
    bindchange(e) {
        this.setData({
            swiperIndex: e.detail.current
        })
    },
  getSroll: function() {
    // wx.pageScrollTo({
    //   scrollTop: 100,
    //   duration: 300
    // });
    console.log(111)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },
  scroll: function (e) {
    var that = this;
    if (e.detail.scrollTop>100){
      that.setData({
        fixed:'fixed'
      })
    }else {
      that.setData({
        fixed: 'relative'
      })
    }
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },


  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})