!function(e){function t(l){if(a[l])return a[l].exports;var c=a[l]={exports:{},id:l,loaded:!1};return e[l].call(c.exports,c,c.exports,t),c.loaded=!0,c.exports}var a={};return t.m=e,t.c=a,t.p="/asset/dev/",t(0)}([function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{"default":e}}var c=a(1),n=l(c);a(4);var r=a(5),s=l(r),u=a(6),i=l(u),m=a(7),R=l(m),o=a(8),E=l(o),d=a(9),p=l(d),v=a(10),f=l(v),N=a(11),h=l(N),g=a(12),x=l(g),y=a(13),C=l(y),b=React.createClass({displayName:"Page",getInitialState:function(){return{}},componentDidMount:function(){Reveal.initialize(n["default"]),hljs.initHighlighting()},render:function(){return React.createElement("div",{className:"slides"},React.createElement(s["default"],null),React.createElement(i["default"],null),React.createElement(R["default"],null),React.createElement(E["default"],null),React.createElement(p["default"],null),React.createElement(f["default"],null),React.createElement(h["default"],null),React.createElement(x["default"],null),React.createElement(C["default"],null))}});ReactDOM.render(React.createElement(b,null),document.querySelector("#app"))},function(e,t,a){"use strict";a(2);var l={controls:!0,progress:!1,history:!0,center:!0,width:1200,height:700,transition:"convex",slideNumber:!1,keyboard:!0,overview:!0,touch:!0,loop:!1,rtl:!1,fragments:!0,embedded:!1,help:!0,showNotes:!1,autoSlide:0,autoSlideStoppable:!0,mouseWheel:!1,hideAddressBar:!0,previewLinks:!1,transitionSpeed:"default",backgroundTransition:"default",viewDistance:3,parallaxBackgroundImage:"",parallaxBackgroundSize:"",parallaxBackgroundHorizontal:null,parallaxBackgroundVertical:null};e.exports=l},function(e,t){},,function(e,t){},function(e,t){"use strict";var a=React.createClass({displayName:"page",render:function(){return React.createElement("section",null,React.createElement("h1",null,"标题"),React.createElement("h3",null,"描述"),React.createElement("p",null,"—— 作者"))}});e.exports=a},function(e,t){"use strict";var a=React.createClass({displayName:"page",render:function(){return React.createElement("section",null,React.createElement("h2",null,"What are here?"),React.createElement("ol",null,React.createElement("li",null,React.createElement("a",{href:"#/2"},"第一部分：布局")),React.createElement("li",null,React.createElement("a",{href:"#/5"},"第二部分：分步浏览")),React.createElement("li",null,React.createElement("a",{href:"#/6"},"第三部分：子页")),React.createElement("li",null,React.createElement("a",{href:"#/7"},"第四部分：常用样式"))))}});e.exports=a},function(e,t){"use strict";var a=React.createClass({displayName:"page",render:function(){return React.createElement("section",null,React.createElement("h2",null,"布局"),React.createElement("ol",null,React.createElement("li",null,React.createElement("a",{href:"#/3"},"弹性盒子：box-layout")),React.createElement("li",null,React.createElement("a",{href:"#/4"},"十二列：col-layout"))))}});e.exports=a},function(e,t){"use strict";var a=React.createClass({displayName:"page",render:function(){return React.createElement("section",null,React.createElement("h2",null,"布局：弹性盒子"),React.createElement("div",{className:"box-layout"},React.createElement("div",null,"非弹性子元素"),React.createElement("div",{className:"flex"},React.createElement("div",null,"弹性子元素"),React.createElement("pre",null,React.createElement("code",null,'<div className="box-layout">\n	<div>非弹性子元素</div>\n	<div className="flex">弹性子元素</div>\n</div>')))))}});e.exports=a},function(e,t){"use strict";var a=React.createClass({displayName:"page",render:function(){return React.createElement("section",null,React.createElement("h2",null,"布局：12列"),React.createElement("div",{className:"col-layout"},React.createElement("div",{className:"col-4"},"4/12"),React.createElement("div",{className:"col-8"},React.createElement("div",null,"8/12"),React.createElement("pre",null,React.createElement("code",null,'<div className="col-layout">\n	<div className="col-4">4/12</div>\n	<div className="col-8">8/12</div>\n</div>')))),React.createElement("div",{className:"tl",style:{marginTop:"30px"}},"说明：子元素的col之和",React.createElement("span",{className:"cw"},"不大于"),"12."))}});e.exports=a},function(e,t){"use strict";var a=React.createClass({displayName:"page",render:function(){return React.createElement("section",null,React.createElement("h2",null,"分步浏览"),React.createElement("div",null,"这是你一进来可以看到的内容。按",React.createElement("span",{className:"cw"}," → 或 ↓"),", 浏览下一部分的内容。"),React.createElement("pre",null,React.createElement("code",null,'<div className="fragment">带有 .fragment 这个className的，都会被分步展现</div>')),React.createElement("div",{className:"fragment"},"第2部分"),React.createElement("div",{className:"fragment"},"第3部分"),React.createElement("div",{className:"fragment"},"第4部分"))}});e.exports=a},function(e,t){"use strict";var a=React.createClass({displayName:"page",render:function(){return React.createElement("section",null,React.createElement("section",null,React.createElement("h2",null,"子页"),React.createElement("div",{className:"tl"},"平时，我们都是按 → 到达下一个页面。现在你可以通过按",React.createElement("span",{className:"cw"}," ↓ "),"切到该页PPT的子页。"),React.createElement("pre",null,React.createElement("code",null,"<section>我是 section 标签，所以，我被判断为子页</section>"))),React.createElement("section",null,"2/3 子页"),React.createElement("section",null,"3/3 子页"))}});e.exports=a},function(e,t){"use strict";var a=React.createClass({displayName:"Page0",render:function(){return React.createElement("section",null,React.createElement("ol",{className:"nav-list"},React.createElement("li",null,"标题")),React.createElement("div",null,React.createElement("h1",null,"h1"),React.createElement("h2",null,"h2"),React.createElement("h3",null,"h3"),React.createElement("h4",null,"h4"),React.createElement("h5",null,"h5"),React.createElement("h6",null,"h6")))}}),l=React.createClass({displayName:"Page1",render:function(){return React.createElement("section",null,React.createElement("ol",{className:"nav-list"},React.createElement("li",null,"标题"),React.createElement("li",null,"导航列表")),React.createElement("div",{className:"col-layout"},React.createElement("ul",{className:"nav-list col-4"},React.createElement("li",null,"我共一个")),React.createElement("ul",{className:"nav-list col-4"},React.createElement("li",null,"我是第1/2个"),React.createElement("li",null,"我是第2/2个")),React.createElement("ul",{className:"nav-list col-4"},React.createElement("li",null,"我是第1/3个"),React.createElement("li",null,"我是第2/3个"),React.createElement("li",null,"我是第3/3个"))),React.createElement("pre",null,React.createElement("code",null,'<ul className="nav-list">\n	<li>我是第1/3个</li>\n	<li>我是第2/3个</li>\n	<li>我是第3/3个</li>\n</ul>')))}}),c=React.createClass({displayName:"Page2",render:function(){return React.createElement("section",null,React.createElement("ol",{className:"nav-list"},React.createElement("li",null,"标题"),React.createElement("li",null,"导航列表"),React.createElement("li",null,"凸显")),React.createElement("div",null,"这是一个凸显的颜色：",React.createElement("span",{className:"cw"},"红色")),React.createElement("pre",null,React.createElement("code",null,'<div>这是一个凸显的颜色：<span className="cw">红色</span></div>')))}}),n=React.createClass({displayName:"page",render:function(){return React.createElement("section",null,React.createElement("h2",null,"常用样式"),React.createElement(a,null),React.createElement(l,null),React.createElement(c,null))}});e.exports=n},function(e,t){"use strict";var a=React.createClass({displayName:"page",render:function(){return React.createElement("section",{className:"tl"},React.createElement("h1",null,"THE END"),React.createElement("div",null,"参考资料"),React.createElement("ul",null,React.createElement("li",null,React.createElement("a",{href:"xxx",target:"_blank"},"参考资料1")),React.createElement("li",null,React.createElement("a",{href:"xxx",target:"_blank"},"参考资料2")),React.createElement("li",null,React.createElement("a",{href:"xxx",target:"_blank"},"参考资料3"))))}});e.exports=a}]);