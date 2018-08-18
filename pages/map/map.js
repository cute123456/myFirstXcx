Page({
  data: {
    currentCity: '',
    longitude:'',
    latitude:''
  },
  onLoad: function (options) {
    this.getLocation();
  },
  getLocation: function () {    
    var page = this
    wx.getLocation({
      type: 'gcj02',   //<span class="comment" style="margin:0px;padding:0px;border:none;">默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标</span><span style="margin:0px;padding:0px;border:none;"> </span>  
      success: function (res) {
        // success    
        var longitude = res.longitude
        var latitude = res.latitude;
        page.setData({
          longitude: longitude,
          latitude: latitude
        });
        console.log(longitude, latitude)
        page.loadCity(longitude, latitude)
      }
    });
    // 地图选择
    wx.chooseLocation({
      success: function (res) {
        // success
        console.log(res, "location")
        console.log(res.name)
        console.log(res.latitude)
        console.log(res.longitude)
        page.setData({
          currentCity: res.name
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  loadCity: function (longitude, latitude) {
    var page = this
    wx.request({
      url: 'http://apis.map.qq.com/ws/geocoder/v1/?location=' + latitude + ',' + longitude + '&key=DVBBZ-HD4WJ-BYSFF-FMCML-PSOWQ-S6BLT&get_poi=1',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // success    
        console.log(res);
        var city = res.data.result.address;
        page.setData({ currentCity: city });
        // wx.openLocation({
        //   latitude: latitude,
        //   longitude: longitude,
        //   name: city,
        //   scale: 28
        // }) 
      },
      fail: function () {
        page.setData({ currentCity: "获取定位失败" });
      },

    })
  },
  togo(){
    var that = this;
    wx.openLocation({
      latitude: that.data.latitude,
      longitude: that.data.longitude,
      name: that.data.currentCity,
      scale: 28
    }) 
  }
})    
