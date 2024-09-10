(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{444:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"白屏监控"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#白屏监控"}},[t._v("#")]),t._v(" 白屏监控")]),t._v(" "),s("p",[t._v("白屏通常指的是页面打开后，浏览器上面的地址栏已经显示完整的 URL，但是页面内容无法渲染，只有白色的空白页面。")]),t._v(" "),s("p",[t._v("导致白屏的原因大致可分为两类:")]),t._v(" "),s("ul",[s("li",[t._v("资源加载问题")]),t._v(" "),s("li",[t._v("代码执行错误")])]),t._v(" "),s("p",[t._v("从现代前端视角来看，这两种原因都跟当前SPA框架的广泛使用有关。")]),t._v(" "),s("h2",{attrs:{id:"资源加载问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源加载问题"}},[t._v("#")]),t._v(" 资源加载问题")]),t._v(" "),s("blockquote",[s("p",[t._v("这里的资源特指 JavaScript 脚本、样式表、图片等静态资源，不包括接口调用等动态资源。")])]),t._v(" "),s("p",[t._v("资源加载问题导致的白屏可以分为可恢复的和不可恢复的两大类")]),t._v(" "),s("h3",{attrs:{id:"可恢复的白屏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可恢复的白屏"}},[t._v("#")]),t._v(" 可恢复的白屏")]),t._v(" "),s("p",[t._v("可恢复的白屏常见于第一次进人页面时，由于资源加载过慢或者接口请求未返回，所以浏览器无法执行下一步骤。")]),t._v(" "),s("p",[t._v("这种白屏通常是网络状况太差或者设备性能太差等原因导致的，一般在浏览器返回后，就能恢复页面渲染，可以通过监控首屏时间来发现。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("如果生产环境的首屏时间呈异常上升趋势，那么一定是页面白屏时间过长导致的，开发人员应该及时关注并排查近期改动的代码。")])]),t._v(" "),s("h3",{attrs:{id:"不可恢复的白屏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不可恢复的白屏"}},[t._v("#")]),t._v(" 不可恢复的白屏")]),t._v(" "),s("p",[t._v("不可恢复的白屏大多是由于网络或缓存问题导致的。")]),t._v(" "),s("p",[t._v("常见的例子莫过于 React、Vue 等 SPA 框架构建的 Web 应用，一旦 [bundle|app].js 因为网络原因访问失败，便会引发页面白屏。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("你可以访问任意SPA框架构建的Web应用，按照如下步骤复现：打开 DevTools > Network，找到 app.xxx.js，右键并选中 Block request URL，随后刷新页面。")])]),t._v(" "),s("p",[t._v("另一个例子是SPA项目打包后，在非首次线上替换dist文件时，某些手机/浏览器在之后首次打开页面，可能出现白屏情况")]),t._v(" "),s("p",[t._v("在用户端会默认缓存index.html入口文件，而由于vue打包生成的css/js都是哈希值，跟上次的文件名都不同，因此会出现找不到css/js的情况，导致白屏的产生。在服务端更新包之后，由于旧的文件被删除，而index.html所链接的路径依然是旧文件路径，因此会找不到文件，从而白屏。")]),t._v(" "),s("h2",{attrs:{id:"代码执行错误"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码执行错误"}},[t._v("#")]),t._v(" 代码执行错误")]),t._v(" "),s("p",[t._v("代码执行错误导致的白屏一般伴随着功能流程的阻断出现,并且很难通过等待或者页面刷新等方法修复。")]),t._v(" "),s("p",[t._v("这类问题出现的原因通常是前端代码逻辑错误，或是后端接口的脏数据导致的前端数据解析逻辑错误，最终导致运行异常的前端代码触发了页面崩溃。")]),t._v(" "),s("p",[t._v("例如，如果 React 中的组件发生了异常，并且外部没有使用 componentDidCatch 或者getDerivedStateFromError 捕错误，那么 React 组件 render 挂载的目标节点下的 DOM 树会被移除、页面就会出现白屏。")]),t._v(" "),s("blockquote",[s("p",[t._v("自React 16 起,任何未被错误边界捕获的错误将会导致整个 React 组件树被卸载。")])]),t._v(" "),s("h2",{attrs:{id:"白屏检测"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#白屏检测"}},[t._v("#")]),t._v(" 白屏检测")]),t._v(" "),s("h3",{attrs:{id:"检测根节点是否渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检测根节点是否渲染"}},[t._v("#")]),t._v(" 检测根节点是否渲染")]),t._v(" "),s("p",[t._v("这种方法的原理是在当前主流 SPA 框架下，DOM 一般挂载在一个根节点之下（比如 "),s("code",[t._v('<div id="app"></div>')]),t._v(" ），发生白屏后通常是根节点下所有 DOM 被卸载。")]),t._v(" "),s("p",[t._v("我们可以通过在页面渲染完成后，检查页面根节点的子元素是否存在，如果不存在，则可以判断页面是白屏状态。")]),t._v(" "),s("p",[t._v("这种方案简洁明了，但缺点也很明显，项目有骨架屏渲染的情况下无法判断是否白屏。")]),t._v(" "),s("p",[t._v("如在 Vue.js 中可以使用钩子函数 mounted 或 created 在页面渲染完成后进行检测。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("created")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取页面根节点")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rootNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 检测根节点的子元素是否存在")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rootNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面是白屏状态")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'页面白屏了！'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 页面正常显示")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'页面正常显示'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),s("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[s("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1725940356079-50928"}},[t._v("成功")]),s("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"export default {\n  created() {\n    // 获取页面根节点\n    const rootNode = document.querySelector('#app');\n    // 检测根节点的子元素是否存在\n    if (rootNode.children.length === 0) {\n      // 页面是白屏状态\n      console.error('页面白屏了！');\n    } else {\n      // 页面正常显示\n      console.log('页面正常显示');\n    }\n  },\n}\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1725940356079-50928","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("由于 SPA 应用通常使用异步加载方式加载组件和数据，因此需要确保在页面组件渲染完成后再进行白屏检测。如果在组件渲染之前进行检测，可能会误判为白屏。另外，SPA 应用可能会存在某些异步请求失败或加载超时等问题，也需要考虑这些因素对白屏检测的影响。")])]),t._v(" "),s("h2",{attrs:{id:"mutation-observer-监听-dom-变化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mutation-observer-监听-dom-变化"}},[t._v("#")]),t._v(" Mutation Observer 监听 DOM 变化")]),t._v(" "),s("p",[t._v("Mutation Observer 是一种在 DOM 树发生变化时进行回调的方式，可以用于监听页面元素的变化。可以通过 Mutation Observer 来监听 DOM 树变化，从而判断页面是否白屏。")]),t._v(" "),s("p",[t._v("但这个方式的缺点也很明显：")]),t._v(" "),s("ul",[s("li",[t._v("对性能的影响：使用 Mutation Observer 监听 DOM 变化会对浏览器性能造成一定影响，尤其是当 DOM 树变化频繁时，会导致回调函数频繁执行，影响页面的响应速度和用户体验。")]),t._v(" "),s("li",[t._v("兼容性问题：Mutation Observer 的兼容性不是很好，不同浏览器支持程度不同，需要进行兼容性处理。")]),t._v(" "),s("li",[t._v("误判问题：有些情况下，页面并不是真正的白屏，但是 Mutation Observer 仍然会误判为白屏，例如页面中有一个空白的 div 元素占位，此时即使页面内容未加载，也不会被判定为白屏状态。")])]),t._v(" "),s("p",[t._v("具体实现步骤如下：")]),t._v(" "),s("ol",[s("li",[t._v("创建一个 Mutation Observer 实例，并指定回调函数。")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" observer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MutationObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mutations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mutations 表示 DOM 树的变化列表")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")]),s("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[s("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1725940356079-55261"}},[t._v("成功")]),s("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"const observer = new MutationObserver((mutations) => {\n  // mutations 表示 DOM 树的变化列表\n});\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1725940356079-55261","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("将 Mutation Observer 实例与根节点进行绑定，并指定监测的选项。")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rootNode "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("documentElement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" observerConfig "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("childList")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听子节点的变化")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("subtree")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听所有后代节点的变化")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("attributes")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听节点属性的变化")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("characterData")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 监听节点文本内容的变化")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("attributeOldValue")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 记录节点属性变化前的值")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("characterDataOldValue")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 记录节点文本内容变化前的值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nobserver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("observe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rootNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" observerConfig"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")]),s("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[s("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1725940356079-13311"}},[t._v("成功")]),s("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"const rootNode = document.documentElement;\nconst observerConfig = {\n  childList: true, // 监听子节点的变化\n  subtree: true, // 监听所有后代节点的变化\n  attributes: true, // 监听节点属性的变化\n  characterData: true, // 监听节点文本内容的变化\n  attributeOldValue: true, // 记录节点属性变化前的值\n  characterDataOldValue: true, // 记录节点文本内容变化前的值\n};\nobserver.observe(rootNode, observerConfig);\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1725940356079-13311","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("在回调函数中检查 DOM 树的变化，如果发现根节点的子元素存在，则可以判断页面不是白屏状态。")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" observer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MutationObserver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("mutations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 检查根节点的子元素是否存在")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rootNode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'页面正常显示'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'页面白屏了！'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")]),s("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[s("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1725940356080-94185"}},[t._v("成功")]),s("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"const observer = new MutationObserver((mutations) => {\n  // 检查根节点的子元素是否存在\n  if (rootNode.children.length > 0) {\n    console.log('页面正常显示');\n  } else {\n    console.error('页面白屏了！');\n  }\n});\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1725940356080-94185","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("h2",{attrs:{id:"页面截图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面截图"}},[t._v("#")]),t._v(" 页面截图")]),t._v(" "),s("p",[t._v("通过对网页进行截图，对截图进行像素点分析，判断页面是否白屏。一般情况下，可以统计截图中所有像素点的 RGB 值，如果所有像素点的 RGB 值都相同，且与白色（RGB(255, 255, 255)）非常接近，那么就可以判断页面是白屏状态。")]),t._v(" "),s("p",[t._v("这个方式的缺点如下：")]),t._v(" "),s("ul",[s("li",[t._v("页面截图需要包含足够的像素点，以便能够准确地检测页面是否白屏。如果截图不够清晰，可能会导致误判。")]),t._v(" "),s("li",[t._v("有些情况下，页面并不是真正的白屏，但是由于一些外部原因（例如网络问题）导致页面未加载，此时页面截图也会被判定为白屏状态。")]),t._v(" "),s("li",[t._v("页面存在骨架屏的情况下，需要对比骨架屏")])])])}),[],!1,null,null,null);s.default=e.exports}}]);