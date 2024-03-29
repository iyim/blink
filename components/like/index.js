// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean,
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    likeSrc: 'images/like.png',
    noSrc: 'images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function (event) {
      console.log('inner-like')
      let like = this.properties.like
      let count = this.properties.count
      count = like ? --count : ++count
      this.setData({
        like: !like,
        count: count
      })
      const likeState = this.data.like ? 'like': 'unlike'
      this.triggerEvent('like', {
        likeState: likeState
      }, {})
    }
  }
})
