// component/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      listq:{
        type: Array,
        value:[1,2,3,4]
      }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */

  methods: {
    test:function(e){
      console.log(111)
      console.log(e)
    }
  }
})
