const commonFn = {
  methods: {
    j2s(obj) {
      return JSON.stringify(obj)
    },
    s2j(str) {
      return JSON.parse(str)
    },
    urlEncode(param) {
      /**
       * param 将要转为URL参数字符串的对象
       * return URL参数字符串
       */
      var arr = []
      for (var i in param) {
        var k = i
        var v = param[i]
        if (v !== '') {
          var str = k + '=' + v
          arr.push(str)
        }
      }
      return '?' + arr.join('&')
    },
    Toast(msg, type) {
      switch (type) {
        case 1:
          this.$message({
            type: 'success',
            mesage: msg,
            duration: 1000
          })
          break;
        case 2:
          this.$message({
            type: 'error',
            message: msg,
            duration: 1500
          })
          break;
      }
    },
    dealError(res) {
      this.$message({
        type: 'error',
        message: res.msg,
        duration: 1500
      })
    },
    // 获取url参数
    getUrlData () {
      let str = location.href
      let index = str.indexOf('?') + 1
      var urlStr = str.substring(index)
      if (urlStr == '') {
        return false
      }
      var urlArr = urlStr.split('&')
      var urlData = {}
      for (var i = 0; i < urlArr.length; i++) {
        var item = urlArr[i].split('=')
        urlData[item[0]] = decodeURIComponent(item[1])
      }
      return urlData
    }
  }
}

export default commonFn
