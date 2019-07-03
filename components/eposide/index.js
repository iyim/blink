// components/eposide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
      observer: function (newVal, oldVal, changePath) {
        let _index = ''
        if (newVal < 10) {
          _index = `0${newVal}`
        } else {
          _index = newVal
        }
        this.setData({
          _index: `0${newVal}`
        })

      }
    }
  },

  attached: function () {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    this.setData({
      year,
      month: `${this.data.months[month]}月`
    })
  },

  /**
   * 组件的初始数据
   */
  data: {
    months: ["一", '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
    year: 0,
    month: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
