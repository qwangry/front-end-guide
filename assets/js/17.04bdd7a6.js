(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{330:function(t,a,e){t.exports=e.p+"assets/img/qiankun.81759ada.jpeg"},331:function(t,a,e){t.exports=e.p+"assets/img/Micro-app.23fc6cc7.png"},332:function(t,a,e){t.exports=e.p+"assets/img/WebComponents.6c3f5ae3.png"},333:function(t,a,e){t.exports=e.p+"assets/img/WebComponents2.a6587339.png"},334:function(t,a,e){t.exports=e.p+"assets/img/WebComponents3.3ff33318.png"},335:function(t,a,e){t.exports=e.p+"assets/img/mf.fd9e0149.png"},433:function(t,a,e){"use strict";e.r(a);var s=e(10),i=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"技术选型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术选型"}},[t._v("#")]),t._v(" 技术选型")]),t._v(" "),a("p",[t._v("微前端是一种架构设计模式，它的实现并不依赖某项功能，从最早的iframe开始，到Single-spa的出现，再到qiankun的完善，最后到现在使用浏览器标准Web Components的其他框架，我们都可以从中选择适合自己项目的微前端方案。")]),t._v(" "),a("h2",{attrs:{id:"iframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iframe"}},[t._v("#")]),t._v(" iframe")]),t._v(" "),a("p",[t._v("iframe 对于前端来说，都不陌生。它是HTML标签之一，它允许将一个 HTML 文档嵌入到另一个 HTML 文档中。这应该就是微前端思想最早的体现吧。")]),t._v(" "),a("h3",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("ol",[a("li",[t._v("原封不动的把嵌入的网页展现出来")]),t._v(" "),a("li",[t._v("可以增加代码的可重用性")]),t._v(" "),a("li",[t._v("web标准，兼容性好")]),t._v(" "),a("li",[t._v("解决加载缓慢的第三方内容如图标和广告等的加载问题")])]),t._v(" "),a("h3",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("ol",[a("li",[t._v("iframe会堵塞主页面的Onload事件")]),t._v(" "),a("li",[t._v("iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载")]),t._v(" "),a("li",[t._v("不利于seo")]),t._v(" "),a("li",[t._v("无法预加载，用户体验不好")]),t._v(" "),a("li",[t._v("产生多个页面，不易管理")]),t._v(" "),a("li",[t._v("性能差，每次子应用进入都是一次浏览器上下文重建、资源重新加载的过程。")]),t._v(" "),a("li",[t._v("url 不同步。浏览器刷新 iframe url 状态丢失、后退前进按钮无法使用。")]),t._v(" "),a("li",[t._v("UI 不同步，DOM 结构不共享。想象一下屏幕右下角 1/4 的 iframe 里来一个带遮罩层的弹框，同时我们要求这个弹框要浏览器居中显示，还要浏览器 resize 时自动居中..")]),t._v(" "),a("li",[t._v("全局上下文完全隔离，内存变量不共享。iframe 内外系统的通信、数据同步等需求，主应用的 cookie 要透传到根域名都不同的子应用中实现免登效果。")])]),t._v(" "),a("h2",{attrs:{id:"qiankun"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qiankun"}},[t._v("#")]),t._v(" qiankun")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://qiankun.umijs.org/zh",target:"_blank",rel:"noopener noreferrer"}},[t._v("qiankun"),a("OutboundLink")],1),t._v(" 是基于 single-spa 封装，提供了更加开箱即用的 API的一个前端开发框架，它提供了一种将多个独立的子应用程序整合到一个页面中的解决方案。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(330),alt:"qiankun"}})]),t._v(" "),a("h3",{attrs:{id:"优点-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点-2"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("ol",[a("li",[t._v("兼容性好")]),t._v(" "),a("li",[t._v("解决single-sap缺点")]),t._v(" "),a("li",[t._v("html entry 的方式引入子应用，相比 js entry 极大的降低了应用改造的成本")]),t._v(" "),a("li",[t._v("静态资源预加载能力")])]),t._v(" "),a("h3",{attrs:{id:"缺点-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点-2"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("ol",[a("li",[t._v("项目侵入性强")]),t._v(" "),a("li",[t._v("沙箱支持需加强")]),t._v(" "),a("li",[t._v("vite支持不好")]),t._v(" "),a("li",[t._v("加载子应用慢，配置复杂")]),t._v(" "),a("li",[t._v("适配成本高")]),t._v(" "),a("li",[t._v("无法同时激活多个子应用，也不支持子应用保活")])]),t._v(" "),a("h2",{attrs:{id:"micro-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#micro-app"}},[t._v("#")]),t._v(" Micro-app")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://zeroing.jd.com/micro-app/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Micro-app"),a("OutboundLink")],1),t._v(" 是一种基于 Web Components 和微前端架构的前端应用开发模式，它可以将多个独立的 Web 应用程序整合到一个页面中，实现页面的模块化和解耦。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(331),alt:"Micro-app"}})]),t._v(" "),a("h3",{attrs:{id:"优点-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点-3"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("ol",[a("li",[t._v("支持静态资源地址补全")]),t._v(" "),a("li",[t._v("支持元素隔离")]),t._v(" "),a("li",[t._v("插件系统丰富")]),t._v(" "),a("li",[t._v("依靠web标准，无需依赖")])]),t._v(" "),a("h3",{attrs:{id:"缺点-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点-3"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("ol",[a("li",[t._v("接入成本较 qiankun 有所降低，但是路由依然存在依赖")]),t._v(" "),a("li",[t._v("多应用激活后无法保持各子应用的路由状态，刷新后全部丢失")]),t._v(" "),a("li",[t._v("css 沙箱依然无法绝对的隔离，js 沙箱做全局变量查找缓存，性能有所优化")]),t._v(" "),a("li",[t._v("支持 vite 运行，但必须使用 plugin 改造子应用，且 js 代码没办法做沙箱隔离")]),t._v(" "),a("li",[t._v("对于不支持 web Components 的浏览器没有做降级处理")])]),t._v(" "),a("h3",{attrs:{id:"web-components-的兼容性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-components-的兼容性"}},[t._v("#")]),t._v(" Web Components 的兼容性")]),t._v(" "),a("p",[a("img",{attrs:{src:e(332),alt:"WebComponents"}})]),t._v(" "),a("p",[a("img",{attrs:{src:e(333),alt:"WebComponents"}})]),t._v(" "),a("p",[a("img",{attrs:{src:e(334),alt:"WebComponents"}})]),t._v(" "),a("p",[t._v("通过上图可以看到，Web Components 在主流浏览器上的支持已经极其良好，如果对向下兼容要求不严格的话，完全可以在生产环境中使用了。")]),t._v(" "),a("h2",{attrs:{id:"module-federation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-federation"}},[t._v("#")]),t._v(" Module Federation")]),t._v(" "),a("p",[t._v("Module Federation（模块联邦） 是 Webpack5 提出的一种新型的前端架构，它可以将多个独立的应用程序组合成一个整体，实现前端应用程序的模块化和解耦。Module Federation 的主要思想是将不同的应用程序打包成独立的模块，并通过共享模块来实现应用程序之间的通信和交互。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(335),alt:"Module Federation"}})]),t._v(" "),a("blockquote",[a("p",[t._v("Multiple separate builds should form a single application. These separate builds should not have dependencies between each other, so they can be developed and deployed individually. This is often known as Micro-Frontends, but is not limited to that.")]),t._v(" "),a("p",[t._v("一个应用可以由多个独立的构建组成，这些构建彼此独立没有依赖关系，他们可以独立开发、部署。这就是常被认为的微前端，但不局限于此")])]),t._v(" "),a("h3",{attrs:{id:"优点-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点-4"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("ol",[a("li",[t._v("webpack 联邦编译可以保证所有子应用依赖解耦")]),t._v(" "),a("li",[t._v("应用间去中心化的调用、共享模块")]),t._v(" "),a("li",[t._v("模块远程 ts 支持")])]),t._v(" "),a("h3",{attrs:{id:"缺点-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点-4"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("ol",[a("li",[t._v("强依赖webpack")]),t._v(" "),a("li",[t._v("没有有效的 css 沙箱和 js 沙箱，需要靠用户自觉")]),t._v(" "),a("li",[t._v("子应用保活、多应用激活无法实现")]),t._v(" "),a("li",[t._v("主、子应用的路由可能发生冲突")])])])}),[],!1,null,null,null);a.default=i.exports}}]);