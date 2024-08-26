(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{298:function(v,e,t){v.exports=t.p+"assets/img/WX20240823-183214.11c61060.png"},299:function(v,e,t){v.exports=t.p+"assets/img/vite.a386e419.png"},300:function(v,e,t){v.exports=t.p+"assets/img/image-20230809140430026.358b81a3.png"},301:function(v,e,t){v.exports=t.p+"assets/img/image-20230809140453894.4f5c75d7.png"},375:function(v,e,t){"use strict";t.r(e);var _=t(10),s=Object(_.a)({},(function(){var v=this,e=v._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"esbuild-概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esbuild-概述"}},[v._v("#")]),v._v(" esbuild 概述")]),v._v(" "),e("h2",{attrs:{id:"文档"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[v._v("#")]),v._v(" 文档")]),v._v(" "),e("p",[e("a",{attrs:{href:"https://esbuild.github.io/",target:"_blank",rel:"noopener noreferrer"}},[v._v("esbuild 英文文档"),e("OutboundLink")],1)]),v._v(" "),e("p",[e("a",{attrs:{href:"https://www.esbuild.cn/",target:"_blank",rel:"noopener noreferrer"}},[v._v("esbuild 中文文档"),e("OutboundLink")],1)]),v._v(" "),e("h2",{attrs:{id:"什么是esbuild"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是esbuild"}},[v._v("#")]),v._v(" 什么是esbuild")]),v._v(" "),e("p",[e("code",[v._v("esbuild")]),v._v(" 是一种高速的 JavaScript 和 TypeScript 构建工具和打包器。它以极快的构建速度和低资源消耗著称，主要用于打包、转译和优化前端项目的代码。"),e("code",[v._v("esbuild")]),v._v(" 构建工具的核心目标是开创构建工具性能的新时代， 同时创建一个易于使用的现代构建工具。")]),v._v(" "),e("h2",{attrs:{id:"有多快"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#有多快"}},[v._v("#")]),v._v(" 有多快")]),v._v(" "),e("p",[v._v("下图为 "),e("code",[v._v("esbuild")]),v._v(" 和其他的构建工具使用默认配置，并从 0 开始构建 10 份 three.js 库的构建时间， 其中包括代码压缩以及 source map。")]),v._v(" "),e("p",[e("img",{attrs:{src:t(298),alt:"速度对比"}})]),v._v(" "),e("p",[e("code",[v._v("esbuild")]),v._v(" 号称在目前 web 构建工具的速度大约是上述工具的 10 - 100 倍")]),v._v(" "),e("h2",{attrs:{id:"为何-esbuild-如此之快"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为何-esbuild-如此之快"}},[v._v("#")]),v._v(" 为何 esbuild 如此之快？")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("用 Go 语言编写")])])]),v._v(" "),e("p",[v._v("Esbuild 是用 Go 语言编写的，而 Go 语言天生具备高效的并发处理能力和良好的内存管理。相比 JavaScript 编写的构建工具（如 Webpack），Go 语言在执行效率和资源消耗上有显著优势。Go 编译后的二进制文件执行速度非常快，尤其在处理大量文件和复杂操作时表现出色。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("多核并行")])])]),v._v(" "),e("p",[v._v("Esbuild 的核心架构设计充分利用了多核 CPU 的优势，采用了并行处理的方式来加速构建过程。它会同时处理多个文件或任务，最大限度地利用系统资源。这种并行处理显著减少了构建时间，特别是在处理大型项目时。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("最小化 I/O 操作")])])]),v._v(" "),e("p",[v._v("Esbuild 尽量减少了 I/O 操作，避免了不必要的磁盘读写。在可能的情况下，Esbuild 会将数据尽可能多地保存在内存中，而不是频繁地写入或读取磁盘。这减少了 I/O 带来的性能瓶颈。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("直接处理源码")])])]),v._v(" "),e("p",[v._v("Esbuild 能够直接处理 JavaScript 和 TypeScript 源码，而无需将其转化为中间格式或依赖其他工具进行处理。传统工具往往需要将源码转化为不同的格式或依赖插件，这些过程都会增加构建时间。而 Esbuild 则简化了这些步骤，从而提高了整体效率。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("内置的优化功能")])])]),v._v(" "),e("p",[v._v("Esbuild 内置了一些常见的代码优化功能，如树摇优化（Tree Shaking）和代码压缩，这些功能在构建过程中无需额外的插件或步骤，进一步加快了构建速度。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("避免不必要的复杂性")])])]),v._v(" "),e("p",[v._v("Esbuild 避免了许多构建工具中常见的复杂性，比如繁重的插件系统和配置机制。它的设计哲学是简单、直接、性能至上，因此减少了很多导致速度下降的潜在因素。")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("高效的 AST 解析与处理")])])]),v._v(" "),e("p",[v._v("Esbuild 内部使用了高度优化的抽象语法树（AST）解析器，能够快速解析、分析和处理 JavaScript/TypeScript 代码。相比于传统构建工具使用的 JavaScript 解析器，Esbuild 的 AST 解析器速度更快且占用内存更少。")]),v._v(" "),e("p",[v._v("这些因素中每一点都只是有显著的提速， 但综合起来， 它们可以使得构建工具的速度比目前其他常用的构建工具快好几个数量级。")]),v._v(" "),e("h2",{attrs:{id:"有哪些缺点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#有哪些缺点"}},[v._v("#")]),v._v(" 有哪些缺点")]),v._v(" "),e("p",[v._v("从esbuild的官方文档 "),e("a",{attrs:{href:"https://esbuild.github.io/faq/#upcoming-roadmap",target:"_blank",rel:"noopener noreferrer"}},[v._v("upcoming roadmap"),e("OutboundLink")],1),v._v(" 中，就能看出下面的问题：")]),v._v(" "),e("ul",[e("li",[v._v("esbuild 没有提供 AST 的操作能力，打包产物无法降级到 ES5 及以下，不能兼容一些低版本浏览器")]),v._v(" "),e("li",[v._v("Code splitting 还在计划中")]),v._v(" "),e("li",[v._v("没有TS的类型检测")]),v._v(" "),e("li",[v._v("默认不支持vue，angular等代码文件格式")]),v._v(" "),e("li",[v._v("......")])]),v._v(" "),e("p",[v._v("简单来说，现在希望直接将esbuild放入到生产环境中，还需要一些路走，并不足以支撑一个大型项目的开发需求。有些内容虽然我们可以通过插件去实现，但是并不是开箱即用的功能，对于项目开发的新手来说，并不友好。变相增加了开发成本")]),v._v(" "),e("h2",{attrs:{id:"为什么要学习esbuild"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么要学习esbuild"}},[v._v("#")]),v._v(" 为什么要学习esbuild?")]),v._v(" "),e("p",[v._v("esbuild 被我们熟知，更多的还是因为 "),e("code",[v._v("Vite")]),v._v("， "),e("code",[v._v("esbuild")]),v._v(" 是组成 "),e("code",[v._v("Vite")]),v._v(" 的两架马车之一。 下面是 vite 的架构图")]),v._v(" "),e("p",[e("img",{attrs:{src:t(299),alt:"vite架构图"}})]),v._v(" "),e("h2",{attrs:{id:"为什么vite要使用esbuild"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么vite要使用esbuild"}},[v._v("#")]),v._v(" 为什么Vite要使用esbuild？")]),v._v(" "),e("p",[v._v("一个字...快")]),v._v(" "),e("p",[v._v("现在来说，Vite在下面几个地方都依托于esbuild，而未来随着esbuild的完善，应该会做进一步处理")]),v._v(" "),e("ul",[e("li",[e("strong",[v._v("依赖预构建---作为 Bundle 工具")])]),v._v(" "),e("li",[e("strong",[v._v("单文件编译——作为 TS 和 JSX 编译工具")])]),v._v(" "),e("li",[e("strong",[v._v("代码压缩——作为压缩工具")])])]),v._v(" "),e("h2",{attrs:{id:"什么是no-bundle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是no-bundle"}},[v._v("#")]),v._v(" 什么是no-bundle?")]),v._v(" "),e("p",[e("code",[v._v("ESM")]),v._v("是"),e("code",[v._v("JavaScript")]),v._v("提出的官方标准化模块系统，不同于之前的"),e("code",[v._v("CJS")]),v._v("，"),e("code",[v._v("AMD")]),v._v("，"),e("code",[v._v("CMD")]),v._v("等等，"),e("code",[v._v("ESM")]),v._v("提供了更原生以及更动态的模块加载方案，最重要的就是它是浏览器原生支持的，也就是说我们可以直接在浏览器中去执行"),e("code",[v._v("import")]),v._v("，动态引入我们需要的模块，而不是把所有模块打包在一起。")]),v._v(" "),e("p",[v._v("Vite 是一个提倡 "),e("code",[v._v("no-bundle")]),v._v(" 的构建工具，相比于传统的 Webpack，能做到开发时的模块按需编译，而不用先打包完再加载。")]),v._v(" "),e("p",[e("img",{attrs:{src:t(300),alt:"image-20230809140430026"}})]),v._v(" "),e("p",[e("img",{attrs:{src:t(301),alt:"image-20230809140453894"}})]),v._v(" "),e("h2",{attrs:{id:"什么是依赖预构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是依赖预构建"}},[v._v("#")]),v._v(" 什么是依赖预构建？")]),v._v(" "),e("p",[v._v("模块代码其实分为两部分，一部分是源代码，也就是业务代码，另一部分是第三方依赖的代码，即"),e("code",[v._v("node_modules")]),v._v("中的代码。所谓的"),e("code",[v._v("no-bundle")]),v._v("只是对于源代码而言，对于第三方依赖而言，我们基本不会去改变他，Vite 还是选择 bundle(打包)，这个部分，就依赖于"),e("code",[v._v("esbuild")]),v._v("。")]),v._v(" "),e("p",[v._v("但是关键点是，为什么在开发阶段我们要对第三方依赖进行预构建? 如果不进行预构建会怎么样？")]),v._v(" "),e("p",[v._v("首先 Vite 是基于浏览器原生 ES 模块规范实现的 Dev Server，不论是应用代码，还是第三方依赖的代码，理应符合 ESM 规范才能够正常运行。但是，我们没有办法控制第三方的打包规范。还有相当多的第三方库仍然没有 ES 版本的产物。")]),v._v(" "),e("p",[v._v("此外，ESM还有一个比较重要的问题——"),e("strong",[v._v("请求瀑布流问题")]),v._v("。ESM的每个"),e("code",[v._v("import")]),v._v("都会触发一次新的文件请求，因此在"),e("code",[v._v("依赖层级深")]),v._v("、"),e("code",[v._v("涉及模块数量多")]),v._v("的情况下，会触发很多个网络请求，巨大的请求量加上 "),e("strong",[v._v("Chrome 对同一个域名下只能同时支持 6个 HTTP 并发请求的限制")]),v._v("，导致页面加载十分缓慢，与 Vite 主导性能优势的初衷背道而驰。")]),v._v(" "),e("p",[v._v("在进行"),e("strong",[v._v("依赖的预构建")]),v._v("之后，这种第三方库的代码被打包成了一个文件，这样请求的数量会骤然减少，页面加载也快了许多")])])}),[],!1,null,null,null);e.default=s.exports}}]);