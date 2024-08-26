(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{336:function(t,s,a){t.exports=a.p+"assets/img/performance1.6fab12f7.png"},337:function(t,s,a){t.exports=a.p+"assets/img/performance.10cc2f4b.png"},338:function(t,s,a){t.exports=a.p+"assets/img/lcp_ux.e57e204b.svg"},339:function(t,s,a){t.exports=a.p+"assets/img/fid_ux.e5dfef54.svg"},340:function(t,s,a){t.exports=a.p+"assets/img/cls_ux.24fb9e37.svg"},439:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"性能监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能监控"}},[t._v("#")]),t._v(" 性能监控")]),t._v(" "),s("p",[t._v("前端性能监控是指通过收集、分析前端性能数据，以便于发现和解决应用性能问题的过程。前端性能监控可以帮助我们了解应用程序的整体性能和用户体验，并且可以帮助我们优化页面加载速度、提高应用程序的性能和可靠性，从而提高用户的满意度。")]),t._v(" "),s("h2",{attrs:{id:"performance-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#performance-api"}},[t._v("#")]),t._v(" Performance API")]),t._v(" "),s("p",[t._v("Performance API 是 HTML5 提供的 API 之一，用于在 Web 前端监控性能数据，可以帮助开发者对 Web 应用进行性能优化。Performance API 可以帮助我们了解页面的加载时间、资源的加载时间、页面渲染时间以及 JavaScript 执行时间等。")]),t._v(" "),s("p",[t._v("window.performance 会返回一个Performance类型的对象，其中，performance.timing包含了各种与浏览器性能有关的时间数据，提供浏览器各处理阶段的耗时。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("Navigation Timing Level 2 规范的出现，使得Navigation Timing 规范已被弃用，为更好的向后拓展，推荐优先使用新的规范，并使用老规范做兼容")])]),t._v(" "),s("h3",{attrs:{id:"navigation-timing-规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigation-timing-规范"}},[t._v("#")]),t._v(" Navigation Timing  规范")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timing\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("如下图是W3C Navigation Timing Level 1 的规范，2012 年底进入候选建议阶段，至今仍在日常使用中。\n从当前浏览器窗口卸载旧页面开始，到新页面加载完成，整个过程一共被切分为 9 个小块：提示卸载旧文档、重定向/卸载、应用缓存、DNS 解析、TCP 握手、HTTP 请求处理、HTTP 响应处理、DOM 处理、文档装载完成。每个小块的首尾、中间做事件分界，取 Unix 时间戳，两两事件之间计算时间差，从而获取中间过程的耗时（精确到毫秒级别）")]),t._v(" "),s("p",[s("img",{attrs:{src:a(336),alt:"Navigation Timing  规范"}})]),t._v(" "),s("h3",{attrs:{id:"navigation-timing-level-2-规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#navigation-timing-level-2-规范"}},[t._v("#")]),t._v(" Navigation Timing Level 2 规范:")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntriesByType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'navigation'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Level 2精度更高，功能更强大，层次更分明的。比如独立划分出来的 Resource Timing，可以获取具体资源的详细耗时信息。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(337),alt:"Navigation Timing Level 2 规范"}})]),t._v(" "),s("p",[t._v("浏览器加载页面的过程被区分成了9个阶段，performance.timing将每个阶段的关键节点发生变更时的毫秒时间戳都进行了标记，每个节点的时间戳的含义如下：")]),t._v(" "),s("ul",[s("li",[t._v("navigationStart：浏览器开始获取当前文档的时间。")]),t._v(" "),s("li",[t._v("unloadEventStart：当前文档 unload 事件抛出的时间，如果没有则返回0。")]),t._v(" "),s("li",[t._v("unloadEventEnd：当前文档 unload 事件完成的时间，如果没有则返回0。")]),t._v(" "),s("li",[t._v("redirectStart：重定向开始的时间，如果没有则返回0。")]),t._v(" "),s("li",[t._v("redirectEnd：重定向结束的时间，如果没有则返回0。")]),t._v(" "),s("li",[t._v("fetchStart：开始获取文档的时间，该时间通常与 navigationStart 相同。")]),t._v(" "),s("li",[t._v("domainLookupStart：开始进行 DNS 查询的时间，如果使用了缓存，则与 fetchStart 相同。")]),t._v(" "),s("li",[t._v("domainLookupEnd：DNS 查询结束的时间，如果使用了缓存，则与 fetchStart 相同。")]),t._v(" "),s("li",[t._v("connectStart：开始建立连接的时间，如果有多个连接，则返回最早的时间。")]),t._v(" "),s("li",[t._v("connectEnd：连接建立完成的时间，如果有多个连接，则返回最晚的时间。")]),t._v(" "),s("li",[t._v("secureConnectionStart：开始安全连接的时间，如果不是安全连接则返回0。")]),t._v(" "),s("li",[t._v("requestStart：向服务器发送请求的时间。")]),t._v(" "),s("li",[t._v("responseStart：接收到响应的时间，如果没有则返回0。")]),t._v(" "),s("li",[t._v("responseEnd：响应结束的时间，如果没有则返回0。")]),t._v(" "),s("li",[t._v("domLoading：开始解析文档的时间。")]),t._v(" "),s("li",[t._v("domInteractive：文档解析完成并且所有子资源（如图片、样式表）已经下载完成的时间。")]),t._v(" "),s("li",[t._v("domContentLoadedEventStart：DOMContentLoaded 事件抛出的时间。")]),t._v(" "),s("li",[t._v("domContentLoadedEventEnd：DOMContentLoaded 事件完成的时间。")]),t._v(" "),s("li",[t._v("domComplete：DOM 树构建完成的时间，但可能包括资源的加载。")]),t._v(" "),s("li",[t._v("loadEventStart：load 事件抛出的时间。")]),t._v(" "),s("li",[t._v("loadEventEnd：load 事件完成的时间。")])]),t._v(" "),s("p",[t._v("通过对以上指标取差值，可以得到每个阶段耗费的时间，从而建立更加直观的指标，部分示例如下：")]),t._v(" "),s("ul",[s("li",[t._v("重定向耗时：redirectEnd - redirectStart")]),t._v(" "),s("li",[t._v("DNS解析耗时：domainLookupEnd - domainLookupStart")]),t._v(" "),s("li",[t._v("TCP连接耗时：connectEnd - connectStart")]),t._v(" "),s("li",[t._v("SSL安全连接耗时：connectEnd - secureConnectionStart")]),t._v(" "),s("li",[t._v("DNS查询耗时：domainLookupEnd - domainLookupStart")]),t._v(" "),s("li",[t._v("TTFB 读取页面第一个字节的时间：responseStart - (navigationStart || fetchStart)")]),t._v(" "),s("li",[t._v("卸载页面的时间：unloadEventEnd - unloadEventStart")]),t._v(" "),s("li",[t._v("request请求耗时(TTFB)：responseStart - requestStart")]),t._v(" "),s("li",[t._v("解析dom树耗时：domComplete - domInteractive")]),t._v(" "),s("li",[t._v("白屏时间 ：domInteractive -  fetchStart")]),t._v(" "),s("li",[t._v("domReadyTime：fetchStart - domContentLoadedEventEnd")]),t._v(" "),s("li",[t._v("页面完全加载时间：loadEventStart - fetchStart")]),t._v(" "),s("li",[t._v("http 头部大小：transferSize - encodedBodySize")]),t._v(" "),s("li",[t._v("重定向次数：performance.navigation.redirectCount")]),t._v(" "),s("li",[t._v("重定向耗时：redirectEnd - redirectStart")])]),t._v(" "),s("p",[t._v("除此之外，performance还提供了getEntries()方法，它会返回一个PerformanceEntry对象数组，用于记录浏览器的绘制、资源加载等行为，可以借助它获取一些更复杂的指标")]),t._v(" "),s("h2",{attrs:{id:"核心性能指标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心性能指标"}},[t._v("#")]),t._v(" 核心性能指标")]),t._v(" "),s("p",[t._v("核心 Web 指标是适用于所有网页的 Web 指标子集，每位网站所有者都应该测量这些指标，并且这些指标还将显示在所有 Google 工具中。每项核心 Web 指标代表用户体验的一个不同方面，能够进行实际测量，并且反映出以用户为中心的关键结果的真实体验。")]),t._v(" "),s("p",[t._v("核心 Web 指标的构成指标会随着时间的推移而发展。当前针对 2020 年的指标构成侧重于用户体验的三个方面——加载性能、交互性和视觉稳定性——并包括以下指标（及各指标相应的阈值）：\n"),s("center",[s("img",{attrs:{src:a(338),width:"32%",title:"lcp"}}),t._v(" "),s("img",{attrs:{src:a(339),width:"32%",title:"fid"}}),t._v(" "),s("img",{attrs:{src:a(340),width:"32%",title:"cls"}})])],1),t._v(" "),s("ul",[s("li",[t._v("Largest Contentful Paint (LCP)：页面加载过程中，最大的可见内容绘制时间。通俗来说，即是页面上最显眼的元素（如图片、文字、视频等）加载完成并显示在屏幕上的时间点。根据Google的建议，页面的LCP时间应该小于2.5秒，否则用户体验会受到影响。")]),t._v(" "),s("li",[t._v("First Input Delay (FID)：测量页面上第一个可交互元素（如按钮、链接等）的响应延迟时间。FID是用户首次与页面进行交互的时间，通常与页面的JavaScript处理时间相关。根据Google的建议，页面的FID时间应该小于100毫秒，否则用户体验会受到影响。")]),t._v(" "),s("li",[t._v("Cumulative Layout Shift (CLS)：累积布局位移，指页面上所有元素在页面加载过程中的布局变化。例如，当用户在填写表单时，输入框被其他元素挤动的情况，这些布局变化都会影响到用户的体验。Google的建议是，页面的CLS指数应该小于0.1，否则用户体验会受到影响。")])]),t._v(" "),s("p",[t._v("Google 提供开源工具库"),s("a",{attrs:{href:"https://www.npmjs.com/package/web-vitals",target:"_blank",rel:"noopener noreferrer"}},[t._v("web-vitals"),s("OutboundLink")],1),t._v("，开发人员可以在项目中引入、调用对应的方法，获取性能指标数据。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getLCP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getFID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" getCLS "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'web-vitals'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLCP")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCLS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"其他指标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他指标"}},[t._v("#")]),t._v(" 其他指标")]),t._v(" "),s("p",[t._v("除了上述三个指标，其余指标也可以帮助开发人员衡量网站性能。它们可以做为核心指标的补充，帮助开发人员获取更多的信息，排查出特定的问题。")]),t._v(" "),s("ul",[s("li",[t._v("TTFB（Time To First Byte）：是指从客户端发出HTTP请求到服务端返回第一个字节的时间，反映了服务器响应速度。")]),t._v(" "),s("li",[t._v("FCP（First Contentful Paint）：是指页面中的第一块内容（例如文本、图片、svg等）被渲染到屏幕上的时间，它反映了页面加载速度。")]),t._v(" "),s("li",[t._v("TBT（Total Blocking Time）：是指在FCP（或首屏渲染）之后到页面上所有长任务执行完毕之前的时间总和，它反映了页面是否会有明显的卡顿现象。")]),t._v(" "),s("li",[t._v("TTI（Time To Interactive）：是指页面从完全空白的状态到可以响应用户交互的时间，它包括了FCP时间和JavaScript加载执行时间。")]),t._v(" "),s("li",[t._v("FMP（First Meaningful Paint）：是指页面中最有意义的内容开始出现的时间，反映了用户对页面内容的第一次感知。")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算 TTFB")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ttfb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseStart "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" performance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("requestStart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算 FCP")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" observer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entryList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fcpEntry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" entryList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntriesByName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first-contentful-paint'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fcp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fcpEntry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("FCP: ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("fcp"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nobserver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'paint'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("buffered")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算 TBT")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" observer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entryList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" longTasks "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" entryList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntries")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("filter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entry")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'self'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" blockingTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" longTasks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("total"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" task")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" total "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" task"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("TBT: ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("blockingTime"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nobserver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("entryTypes")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'longtask'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算 TTI")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" observer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entryList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ttiEntry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" entryList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntriesByName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'firstInteractive'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tti "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ttiEntry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("TTI: ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("tti"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nobserver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'largest-contentful-paint'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("buffered")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 计算 FMP")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" observer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PerformanceObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("entryList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fmpEntry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" entryList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntriesByName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first-paint'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" entryList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getEntriesByName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'first-contentful-paint'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fmp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fmpEntry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("startTime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("FMP: ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("fmp"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nobserver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'paint'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("buffered")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);