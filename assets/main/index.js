System.register("chunks:///_virtual/AutoPrompt.ts",["cc"],(function(){var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"8ea4b76cLpPILjT3Bg+XVeL","AutoPrompt",void 0),console.log("auto prompt"),window.addEventListener("beforeinstallprompt",(function(t){t.preventDefault(),t.prompt()})),window.addEventListener("appinstalled",(function(){console.log("PWA was installed")})),t._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Canvas,g=t.UITransform,h=t.instantiate,p=t.Label,c=t.Color,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[c.WHITE,c.BLACK,c.RED,c.GREEN,c.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(a)){var t=this.node.parent.getComponent(g),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=h(s);l.parent=this.node,l.name="Buttons";var r=h(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=h(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(p);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=c.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?h(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(p);this.labelComponentList[this.labelComponentList.length]=S;var x=h(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(p)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=h(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(p)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=h(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?h(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/DiceRoll.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,o,n,i,r,a,s,l,c,p,u,h,d,b,g;return{setters:[function(e){t=e.applyDecoratedDescriptor,o=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){r=e.cclegacy,a=e._decorator,s=e.RigidBody,l=e.Node,c=e.Camera,p=e.RichText,u=e.input,h=e.Input,d=e.Vec3,b=e.math,g=e.Component}],execute:function(){var f,y,m,v,w,z,_,x,R,D,L,T,S,M;r._RF.push({},"da0faPPHPpDbKzQ5Oqov+uU","DiceRoll",void 0);var P=a.ccclass,B=a.property;e("DiceRoll",(f=P("DiceRoll"),y=B({type:s}),m=B({type:[l]}),v=B({type:c}),w=B({type:p}),f((x=t((_=function(e){function t(){for(var t,o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return t=e.call.apply(e,[this].concat(r))||this,n(t,"_rb",x,i(t)),n(t,"facesList",R,i(t)),t._hasStoppedRolling=!1,t._hasEverBeenRolled=!1,t.diceNumber="",n(t,"offsetXaxis",D,i(t)),n(t,"offsetYaxis",L,i(t)),n(t,"isGrounded",T,i(t)),n(t,"camera",S,i(t)),t.defaultAngularDamping=void 0,n(t,"textResult",M,i(t)),t}o(t,e);var r=t.prototype;return r.start=function(){this._rb=this.getComponent(s),this.defaultAngularDamping=this._rb.angularDamping},r.onLoad=function(){var e=this;u.on(h.EventType.MOUSE_DOWN,(function(){e._hasEverBeenRolled=!0,console.log("mouseDown");var t=new d(100,0,-100);e._rb.applyImpulse(t);for(var o=0;o<2;o++){var n=new d(b.randomRange(2500,5e3),b.randomRange(-5e3,5e3),b.randomRange(2500,5e3));e._rb.applyTorque(n)}})),u.on(h.EventType.MOUSE_UP,(function(e){2==e.getButton()&&console.log("leftmouse")})),u.on(h.EventType.TOUCH_START,(function(t){e._hasEverBeenRolled=!0,console.log("mouseDown");var o=new d(100,0,-100);e._rb.applyImpulse(o);for(var n=0;n<2;n++){var i=new d(b.randomRange(2500,5e3),b.randomRange(-5e3,5e3),b.randomRange(2500,5e3));e._rb.applyTorque(i)}}))},r.ScreenBound=function(){var e=new d;this.camera.screenToWorld(new d(0,0),e);var t=.825,o=.875;if(this.node.position.x<=e.x*t||this.node.position.x>=-e.x*t){var n=Math.abs(e.x),i=0;i=b.clamp(this.node.position.x,-n*t,n*t),console.log("value "+i),console.log("The real postion "+this.node.position);var r=new d(i,this.node.position.y,this.node.position.z);this.node.setPosition(r),console.log("new position "+this.node.position);var a=new d;this._rb.getLinearVelocity(a),a=new d(a.x,a.y,a.z);var s=r.normalize(),l=d.dot(a,s),c=new d;c.x=a.x+-2*l*s.x,c.y=a.y+-2*l*s.y,c.z=a.z+-2*l*s.z,c.normalize,this._rb.setLinearVelocity(new d(c.x,a.y,c.z))}if(this.node.position.z>=e.z*o||this.node.position.z<=-e.z*o){n=Math.abs(e.z),i=0;i=b.clamp(this.node.position.z,-n*o,n*o),console.log("value "+i),console.log("The real postion "+this.node.position);var p=new d(this.node.position.x,this.node.position.y,i);this.node.setPosition(p),console.log("new position "+this.node.position);a=new d;this._rb.getLinearVelocity(a),a=new d(a.x,a.y,a.z);var u=p.normalize(),h=d.dot(a,u),g=new d;g.x=a.x+-2*h*u.x,g.y=a.y+-2*h*u.y,g.z=a.z+-2*h*u.z,g.normalize,this._rb.setLinearVelocity(new d(g.x,a.y,g.z))}},r.CheckFaceResult=function(){for(var e=0,t=0;t<this.facesList.length;t++)0!=t&&this.facesList[e].worldPosition.y<this.facesList[t].worldPosition.y&&(e=t);console.log("Dice Number "+(e+1)),this.textResult.string="<color=#000000> <b> Dice Number: "+(e+1)+"</b> </color>"},r.checkObjectHasStopped=function(){var e=new d;this._rb.getAngularVelocity(e);var t=new d;this._rb.getLinearVelocity(t),Math.abs(e.x)<=.05&&Math.abs(e.y)<=.05&&Math.abs(e.z)<=.05&&Math.abs(t.x)<=.05&&Math.abs(t.y)<=.05&&Math.abs(t.z)<=.05?this._hasStoppedRolling=!0:this._hasStoppedRolling=!1},r.update=function(e){this.ScreenBound();var t=new d,o=new d;this._rb.getAngularVelocity(t),this._rb.getLinearVelocity(o),t.x>=25||t.z>=25||t.y>=25?this._rb.angularDamping=.75:this._rb.angularDamping=this.defaultAngularDamping;var n=new d(0,-25,0);this._rb.applyForce(n),1==this._hasStoppedRolling&&1==this._hasEverBeenRolled&&this.CheckFaceResult(),this.checkObjectHasStopped()},t}(g)).prototype,"_rb",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=t(_.prototype,"facesList",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),D=t(_.prototype,"offsetXaxis",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),L=t(_.prototype,"offsetYaxis",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),T=t(_.prototype,"isGrounded",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),S=t(_.prototype,"camera",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=t(_.prototype,"textResult",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=_))||z));r._RF.pop()}}}));

System.register("chunks:///_virtual/DisplayMode.ts",["cc"],(function(){var c;return{setters:[function(e){c=e.cclegacy}],execute:function(){c._RF.push({},"b23c78n+stCPaTTYfTbjEuc","DisplayMode",void 0),c._RF.pop()}}}));

System.register("chunks:///_virtual/InstallButton.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,n,o,r,l,i,s,a;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){l=t.cclegacy,i=t._decorator,s=t.Button,a=t.Component}],execute:function(){var c,p,u,d,f;l._RF.push({},"a772d6BkHtFg7OZHHMeQzaD","InstallButton",void 0);var h=i.ccclass,m=i.property;t("InstallButton",(c=h("InstallButton"),p=m(s),c((f=e((d=function(t){function e(){for(var e,n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return e=t.call.apply(t,[this].concat(l))||this,o(e,"button",f,r(e)),e}n(e,t);var l=e.prototype;return l.onLoad=function(){this.button.node.on(s.EventType.CLICK,this.promptInstall,this)},l.promptInstall=function(){deferredPrompt&&(deferredPrompt.prompt(),deferredPrompt.userChoice.then((function(t){"accepted"===t.outcome?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt"),deferredPrompt=null})))},e}(a)).prototype,"button",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),u=d))||u));l._RF.pop()}}}));

System.register("chunks:///_virtual/InstallPrompt.ts",["cc"],(function(){var e;return{setters:[function(t){e=t.cclegacy}],execute:function(){e._RF.push({},"8d326WKTUNLHp19bPd+CMP8","InstallPrompt",void 0),window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),console.log("'beforeinstallprompt' event was fired.")})),window.addEventListener("appinstalled",(function(){console.log("PWA was installed")})),e._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./debug-view-runtime-control.ts","./AutoPrompt.ts","./DiceRoll.ts","./DisplayMode.ts","./InstallButton.ts","./InstallPrompt.ts"],(function(){return{setters:[null,null,null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});