'use strict';

var img = "data:image/svg+xml;base64,PCEtLSBCeSBTYW0gSGVyYmVydCAoQHNoZXJiKSwgZm9yIGV2ZXJ5b25lLiBNb3JlIEAgaHR0cDovL2dvby5nbC83QUp6YkwgLS0+Cjxzdmcgd2lkdGg9IjM4IiBoZWlnaHQ9IjM4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmZmIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgc3Ryb2tlLXdpZHRoPSIyIj4KICAgICAgICAgICAgPGNpcmNsZSBzdHJva2Utb3BhY2l0eT0iLjUiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMzYgMThjMC05Ljk0LTguMDYtMTgtMTgtMTgiPgogICAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0KICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVOYW1lPSJ0cmFuc2Zvcm0iCiAgICAgICAgICAgICAgICAgICAgdHlwZT0icm90YXRlIgogICAgICAgICAgICAgICAgICAgIGZyb209IjAgMTggMTgiCiAgICAgICAgICAgICAgICAgICAgdG89IjM2MCAxOCAxOCIKICAgICAgICAgICAgICAgICAgICBkdXI9IjFzIgogICAgICAgICAgICAgICAgICAgIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiAgICAgICAgICAgIDwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==";

function index () {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'loading...';
  var id = 'loading_' + Math.random().toString().replace('.', '');
  var html = "<div  style=\"position: fixed; z-index: 1000; top: 0; right: 0; left: 0; bottom: 0; background: rgba(0,0,0,.25); display: flex; justify-content: center; align-items: center;\">\n            <div id=\"".concat(id, "\" class=\"fadeIn\" style=\"box-sizing: border-box;background-color:rgba(18, 18, 18,0.65);  border-radius: 4px; color: white; padding: 20px; font-size: 14px; width: 98px; height: 98px; line-height: 20px; text-align: center; display: flex; flex-wrap: wrap; -ms-flex-wrap: wrap; justify-content: center; align-items: center;\">\n               <img src=\"").concat(img, "\">\n                <div style=\"width: 100%;text-align: center;margin-top: 5px\">").concat(text, "</div>\n            </div>\n          </div>");
  var elem = document.createElement('div');
  elem.id = id + '-wrap';
  elem.innerHTML = html;
  document.body.appendChild(elem);
  return {
    close: function close() {
      document.getElementById(id + '-wrap').remove(); // document.getElementById(id).classList.remove('fadeIn')
      // document.getElementById(id).classList.add('fadeOut')
      // setTimeout(()=>{
      //     document.getElementById(id+'-wrap').remove()
      // },1000)
    }
  };
}

module.exports = index;
