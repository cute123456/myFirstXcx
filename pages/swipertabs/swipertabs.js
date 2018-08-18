// pages/more/test.js
Page({
  data: {
    listTab: [
      { "code": "01", "text": "tab1" },
      { "code": "02", "text": "tab2" },
      { "code": "03", "text": "tab3" },
      { "code": "04", "text": "tab4" },
      { "code": "05", "text": "tab5" },
      { "code": "06", "text": "tab6" },
      { "code": "07", "text": "tab7" }
    ],
    curIndex: 0,
    curText: null,
    scrollLength: 0
  },
  onLoad: function () {
    console.log('onLoad')
    this.initData(0)
  },
  //初始化数据
  initData: function (index) {
    var that = this
    this.setData({
      curIndex: index,
      curText: that.data.listTab[index].text,
    })
  },
  //tab点击事件，刷新数据
  reflashData: function (event) {
    var that = this

    var index = event.currentTarget.dataset.index
    //移动滚动条,//200和35是我估算的
    if (index > this.data.curIndex) {
      if (that.data.scrollLength < 200) {
        this.setData({
          scrollLength: that.data.scrollLength + 35 * (index - that.data.curIndex)
        })
      }
    } else {
      if (that.data.scrollLength > 0) {
        this.setData({
          scrollLength: that.data.scrollLength - 35 * (that.data.curIndex - index)
        })
      }
    }
    //移动view位置，改变选中颜色
    this.initData(index)


  },
})