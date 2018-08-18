Page({
  data: {
    // input默认是1  
    num: 1,
    // 使用data数据对象设置样式名  
    minusStatus: 'disabled',
    money:50
  },
  /* 点击减号 */
  bindMinus: function () {
    var num = this.data.num;
    // 如果大于1时，才可以减  
    if (num > 1) {
      num--;
    }
    var money = 50;
    var total = money * num;
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    // var minusStatus = num <= 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      // minusStatus: minusStatus,
      money: total
    });
  },
  /* 点击加号 */
  bindPlus: function () {
    var num = this.data.num;
    // 不作过多考虑自增1  
    num++;
    var money = 50;
    var total = money*num;
    console.log(total)
    // 只有大于一件的时候，才能normal状态，否则disable状态  
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    // 将数值与状态写回  
    this.setData({
      num: num,
      minusStatus: minusStatus,
      money:total
    });
  },
  /* 输入框事件 */
  bindManual: function (e) {
    var num = e.detail.value;
    // 将数值与状态写回  
    this.setData({
      num: num
    });
  },
  toAddress:function(){
    wx.navigateTo({
      url: '/pages/add-address/add-address',
    })
  },
  getTop:function(){
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  }
})  