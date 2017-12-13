// pages/first/first.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "https://github.com/Chen-T/hello-world/blob/master/images/index/section01.png?raw=true",
      "https://github.com/Chen-T/hello-world/blob/master/images/index/section02.png?raw=true",
      "https://github.com/Chen-T/hello-world/blob/master/images/index/section03.png?raw=true"
    ],
    navigation_img: [
      "../images/index_icon/index_icon01.png",
      "../images/index_icon/index_icon02.png",
      "../images/index_icon/index_icon03.png",
      "../images/index_icon/index_icon04.png"
    ],
    indicatorDots: true,
    duration: 500,
    autoplay: true,
    interval: 5000,
    indicatorActive: "#66B3FF",
  
    /*模板数据 */
    module01: {
      moduleTitle: "小社群"
    },
    module02: {
      moduleTitle: "频道"
    },
    module03: {
      moduleTitle: "最新"
    },
    soliciting: {
      group_image: "https://github.com/Chen-T/hello-world/blob/master/images/index/group01.png?raw=true",
      groupType: "求租",
      description01: "求合租",
      description02:" 招室友整租",
      value01: 536,
      value02: 214
    },
    ridicule:{
      group_image: "https://github.com/Chen-T/hello-world/blob/master/images/index/group02.png?raw=true",
      groupType: "吐槽",
      description01: "黑中介",
      description02: " 黑房东登记",
      value01: 107,
      value02: 15
    },
    rent:{
      group_image: "https://github.com/Chen-T/hello-world/blob/master/images/index/group03.png?raw=true",
      groupType: "出租",
      description01: "房东直租",
      description02: " 个人转租",
      value01: 378,
      value02: 87
    },

    rental_information:{
      channel_image:"https://github.com/Chen-T/hello-world/blob/master/images/index/channel01.png?raw=true",
      channel_title:"【北京地铁】沿线真实租房情况分享'",
      channel_description:"首都租客联盟发起“北京·租客计划”，众多盟友响应，参与。联盟现将盟友提供的真实租房情",
      channel_total:"5"
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
