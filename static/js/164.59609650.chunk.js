(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{1153:function(t,e,n){"use strict";n.r(e),n.d(e,"IonImg",function(){return o});var i=n(793),o=function(){function t(){}return t.prototype.srcChanged=function(){this.addIO()},t.prototype.componentDidLoad=function(){this.addIO()},t.prototype.addIO=function(){var t=this;void 0!==this.src&&("IntersectionObserver"in window?(this.removeIO(),this.io=new IntersectionObserver(function(e){e[0].isIntersecting&&(t.load(),t.removeIO())}),this.io.observe(this.el)):setTimeout(function(){return t.load()},200))},t.prototype.load=function(){this.loadSrc=this.src,this.ionImgDidLoad.emit()},t.prototype.removeIO=function(){this.io&&(this.io.disconnect(),this.io=void 0)},t.prototype.render=function(){return Object(i.b)("img",{src:this.loadSrc,alt:this.alt,decoding:"async"})},Object.defineProperty(t,"is",{get:function(){return"ion-img"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{alt:{type:String,attr:"alt"},el:{elementRef:!0},loadSrc:{state:!0},src:{type:String,attr:"src",watchCallbacks:["srcChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionImgDidLoad",method:"ionImgDidLoad",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{-o-object-fit:contain;object-fit:contain}:host,img{display:block}img{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"},enumerable:!0,configurable:!0}),t}()}}]);
//# sourceMappingURL=164.59609650.chunk.js.map