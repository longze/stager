// 成为过来人

Page({
  data: {
    userInfo: {},
    locationName: '百度科技园附近'
  },
  onLoad() {
    // wx.chooseLocation({
    //     success: res => {
    //         this.locationName = res.name;
    //     },
    //     fail: res => {
    //         this.locationName = '未授权获取当前位置';
    //     }
    // });
    wx.setNavigationBarTitle({
      title: '成为过来人'
    });
  }
});