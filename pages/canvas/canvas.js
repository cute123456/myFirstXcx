


Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.down();
    this.saveToPhoto();    
  },
  
  // canvas用法
  saveToPhoto: function () {
    var contex = wx.createCanvasContext('ttcanvas');//ttcanvas为该canvas的ID
    //var contex = ctx.getContext('2d');
    var avatarurl_width = 300;//这个是画布宽
    var avatarurl_heigth = 240;//这个是高
    var avatarurl_x = 50;
    var avatarurl_y = 50;
    // contex.arc(avatarurl_width / 2 + avatarurl_x, avatarurl_heigth / 2 + avatarurl_y, avatarurl_width / 2, 0, Math.PI * 2, false);//这个地方我画了个头像的圆
    // contex.clip();
    contex.drawImage('../../images/bottom.jpg', 0, 0, avatarurl_width, avatarurl_heigth); // 这个是我的背景图片，本地的！
    contex.restore();
    contex.save();
    contex.beginPath(); //开始绘制
    contex.arc(150, 50, 30, 0, Math.PI * 2, false);
    contex.clip();
    //contex.arc(25, 25, 25, Math.PI * 2, false);
    //contex.clip();
    contex.drawImage(self.data.locolurl, 120, 20, 60, 60);
    contex.restore();
    contex.setFontSize(20)
    contex.fillStyle = "#fff";
    contex.fillText(self.data.gameConfig.myScore, 130, 132)
    contex.restore();
    contex.draw(true, setTimeout(function () {
      wx.canvasToTempFilePath({//导出图片
        width: 300,
        height: 240,
        destWidth: 300,
        destHeight: 240,
        canvasId: 'ttcanvas',
        success: res => {
          console.log(res.tempFilePath)
          self.data.shareurl = res.tempFilePath;
          self.setData(self.data);
        }
      }, this)
    }, 100))

  },

  onShareAppMessage: function () {
    var self = this;
    return {
      title: '抬头',
      desc: '分享描述',
      path: '分享后的打开路径',
      imageUrl: self.data.shareurl,
      success: function (res) {
        console.log(res)
      }
    }
  },
down:function(){
  wx.downloadFile({
    url: 'https://gshopapi.anasit.com',
    success: res => {
      // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
      if (res.statusCode === 200) {
        this.setData({
          locolurl: res.tempFilePath//将下载下来的地址给data中的变量变量
        });
      }
    }, fail: res => {
      console.log(res);
    }
  });
}


})