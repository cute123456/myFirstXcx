// pages/add-address/add-address.js
// 获取应用实例

let app = getApp()
var tcity = require("../../utils/citys.js");
var util = require("../../utils/util.js");


Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '', // 填写的个人信息
    mibile: '',
    detail: '',
    provinces: [], // 省市区地址选择
    province: '',
    citys: [],
    city: '',
    countys: [],
    county: '',
    value: [0, 0, 0],
    values: [0, 0, 0],
    condition: false
  },
  /**
   * 表单绑定函数
   */
  input_name: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  input_mobile: function(e){
      this.setData({
        mobile: e.detail.value
      })
  },
  input_detail: function(e) {
    this.setData({
      detail: e.detail.value
    })
  },
  bindChange: function(e) {
    //console.log(e);
    var val = e.detail.value
    var t = this.data.values;
    var cityData = this.data.cityData;
    
    if(val[0] != t[0]){
      console.log('province no ');
      const citys = [];
      const countys = [];

      for (let i = 0 ; i < cityData[val[0]].sub.length; i++) {
        citys.push(cityData[val[0]].sub[i].name)
      }
      for (let i = 0 ; i < cityData[val[0]].sub[0].sub.length; i++) {
        countys.push(cityData[val[0]].sub[0].sub[i].name)
      }

      this.setData({
        province: this.data.provinces[val[0]],
        city: cityData[val[0]].sub[0].name,
        citys:citys,
        county: cityData[val[0]].sub[0].sub[0].name,
        countys:countys,
        values: val,
        value:[val[0],0,0]
      })
      
      return;
    }
    if(val[1] != t[1]){
      console.log('city no');
      const countys = [];

      for (let i = 0 ; i < cityData[val[0]].sub[val[1]].sub.length; i++) {
        countys.push(cityData[val[0]].sub[val[1]].sub[i].name)
      }
      
      this.setData({
        city: this.data.citys[val[1]],
        county: cityData[val[0]].sub[val[1]].sub[0].name,
        countys:countys,
        values: val,
        value:[val[0],val[1],0]
      })
      return;
    }
    if(val[2] != t[2]){
      console.log('county no');
      this.setData({
        county: this.data.countys[val[2]],
        values: val
      })
      return;
    }
  },
  open:function(){
    this.setData({
      condition:!this.data.condition
    })
  },

  /**
   * 保存地址
   */
  save: function(){
    if (this.data.name && this.data.mobile && this.data.detail && this.data.province && this.data.city && this.data.county ) {
      if (/^1[3|4|5|7|8]\d{9}$/gi.test(this.data.mobile)) {
        let params = {
          realname: this.data.name, 
          mobile:this.data.mobile, 
          province: this.data.province,
          city: this.data.city,
          area:  this.data.county,
          address: this.data.detail,
          openid: wx.getStorageSync('openid'), 
          uniacid:3
        }
        util.myrequest( params, '/address/add/update', 'GET', res=> {
          if (res.result) {
            wx.showToast({
              title: '添加成功',
              icon: 'success',
              duration: 1000
            })
            // wx.navigateTo({
            //   url: '../address-list/address-list'
            // })
            wx.navigateBack({
              delta: 1
            })
          } else {
            // this.wetoast.toast({
            //   title: res.message,
            //   duration: 2000
            // })
          }
          
        })
      } else {
        // this.wetoast.toast({
        //   title: '请填写正确的电话号码',
        //   duration: 2000
        // })
      }
    } else {
      // this.wetoast.toast({
      //   title: '请将信息补充完整',
      //   duration: 2000
      // })
    }
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // new app.WeToast() //创建可重复使用的WeToast实例，并附加到this上，通过this.wetoast访问
    // wx.showLoading({
    //   title: '加载中',
    // })
    console.log("onLoad");
    var that = this;
    
    tcity.init(that);

    var cityData = that.data.cityData;

    
    const provinces = [];
    const citys = [];
    const countys = [];

    for(let i=0;i<cityData.length;i++){
      provinces.push(cityData[i].name);
    }
    console.log('省份完成');
    for (let i = 0 ; i < cityData[0].sub.length; i++) {
      citys.push(cityData[0].sub[i].name)
    }
    console.log('city完成');
    for (let i = 0 ; i < cityData[0].sub[0].sub.length; i++) {
      countys.push(cityData[0].sub[0].sub[i].name)
    }

    that.setData({
      'provinces': provinces,
      'citys':citys,
      'countys':countys,
      'province':cityData[0].name,
      'city':cityData[0].sub[0].name,
      'county':cityData[0].sub[0].sub[0].name,
    })

    wx.hideLoading()
    
    console.log('初始化完成');

  },
})