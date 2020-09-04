function setBody() {
    var ifMobile = this.ismobile()
    var _this = this;
    // console.log("ifMobileifMobileifMobileifMobile")
    if (ifMobile == true) {
        let meta = document.createElement('meta');
        let content = ""

        _this.presentFloat = true;
        // console.log(" document.body.style.width ",  document.getElementsByTagName("body")[0])
        document.getElementsByTagName("body")[0].style.width = "1300px"
        var phoneWidth = parseInt(window.screen.width);
        // console.log("phoneWidth",phoneWidth)
        // var phoneHeight = parseInt(window.screen.height);
        var phoneScale = phoneWidth / 1300; //除以的值按手机的物理分辨率					console.log('phoneScale',phoneScale)
        var ua = navigator.userAgent;
        if (/Android (\d+\.\d+)/.test(ua)) {
            var version = parseFloat(RegExp.$1);
            // console.log("Android")
            // andriod 2.3
            if (version > 2.3) {
                content = 'width=device-width,initial-scale=' + phoneScale + ',minimum-scale=' + phoneScale + ',maximum-scale=' + phoneScale + ',user-scalable=no'
                // andriod 2.3以上
            } else {
                content = 'width=device-width,user-scalable=no'
            }
        } else {//console.log("ios")
            content = 'width=device-width, initial-scale=' + phoneScale + ',minimum-scale=' + phoneScale + ',maximum-scale =' + phoneScale + ',user-scalable=no'
        }
        meta.content = content;
        meta.name = "viewport";
        document.getElementsByTagName('head')[0].appendChild(meta);
    }
}
function ismobile() {
    var mobileArry = ["iPhone", "iPad", "Android", "Windows Phone", "BB10; Touch", "BB10; Touch", "PlayBook", "Nokia"];
    var ua = navigator.userAgent;
    var res = mobileArry.filter(function (arr) {
        return ua.indexOf(arr) > 0;
    });
    return res.length > 0;
}