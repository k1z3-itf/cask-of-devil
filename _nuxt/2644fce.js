(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{261:function(e,t,n){"use strict";n.r(t),n.d(t,"ARui",(function(){return h}));var r=n(2),c=n(114),o=n(115),h=(n(21),n(57),n(47),n(61),function(){function e(t){var n=this;Object(c.a)(this,e),this.ar=t,this.initStyle(),window.setTimeout((function(){n.init()}),2e3)}var t,n,h,f,m,l,v,y,w,k;return Object(o.a)(e,[{key:"init",value:(k=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setScene();case 2:return e.next=4,this.setLight();case 4:return e.next=6,this.setCamera();case 6:return e.next=8,this.setObject();case 8:return e.next=10,this.setSysObject();case 10:return e.next=12,this.setEvent();case 12:return e.next=14,this.animate();case 14:return e.next=16,this.checkCamera();case 16:case"end":return e.stop()}}),e,this)}))),function(){return k.apply(this,arguments)})},{key:"setScene",value:(w=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.ar.setScene();case 1:case"end":return e.stop()}}),e,this)}))),function(){return w.apply(this,arguments)})},{key:"setLight",value:(y=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.ar.setLight();case 1:case"end":return e.stop()}}),e,this)}))),function(){return y.apply(this,arguments)})},{key:"setCamera",value:(v=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.ar.setCamera();case 1:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)})},{key:"setObject",value:(l=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.ar.setObject();case 1:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{key:"setSysObject",value:(m=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.ar.setSysObject();case 1:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)})},{key:"animate",value:(f=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.ar.animate();case 1:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})},{key:"setEvent",value:(h=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.ar.setEvent();case 1:case"end":return e.stop()}}),e,this)}))),function(){return h.apply(this,arguments)})},{key:"checkCamera",value:(n=Object(r.a)(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then((function(e){t.openCover()})).catch((function(e){alert("fault")}));case 1:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})},{key:"openCover",value:function(){window.setTimeout((function(){document.getElementById("iz-arkit-cover").classList.add("off"),window.setTimeout((function(){document.getElementById("iz-arkit-cover").style.display="none"}),1e3)}),2e3)}},{key:"initStyle",value:(t=Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.getElementById("iz-arkit");case 1:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})},{key:"openMenu",value:function(){}},{key:"escapeHtml",value:function(e){return e=(e=(e=(e=(e=e.replace(/&/g,"&amp;")).replace(/</g,"&lt;")).replace(/>/g,"&gt;")).replace(/"/g,"&quot;")).replace(/'/g,"&#39;")}}]),e}())}}]);