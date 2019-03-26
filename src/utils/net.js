const host = 'http://api.qq.im/'

function request (url, method, data = {},sign = true) {
    wx.showLoading({
        title: '加载中' // 数据请求前loading
    })
    return new Promise((resolve, reject) => {
        wx.request({
            url: host + url, // 仅为示例，并非真实的接口地址
            method: method,
            data: data,
            header: {
                'content-type': 'application/json', // 默认值
                'Authorization': 'Bearer '+ mpvue.getStorageSync("token") //读取信息
            },
            success: function (res) {
                if(res.statusCode == 401 && sign){
                    return request ('refresh', 'POST', {},false).then(res => {
                        mpvue.setStorageSync('token', res.access_token)
                        request (url, method, data,false).then(res => {
                            resolve(res.data)
                        });
                    });
                }
                resolve(res.data)
            },
            fail: function (res) {
                reject(res)
            },
            complete: function () {
                wx.hideLoading()
            }
        })
    })
}

function get (obj) {
    return request(obj.url, 'GET', obj.data)
}

function post (obj) {
    return request(obj.url, 'POST', obj.data)
}

export default {
    request,
    get,
    post,
    host
}