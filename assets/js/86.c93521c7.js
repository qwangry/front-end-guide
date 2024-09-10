(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{421:function(t,n,s){"use strict";s.r(n);var a=s(14),e=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"统一规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#统一规范"}},[t._v("#")]),t._v(" 统一规范")]),t._v(" "),n("p",[t._v("代码规范是指对代码编写的规则和规范，旨在提高代码的可读性、可维护性和可扩展性，以及降低代码出错的风险。")]),t._v(" "),n("p",[t._v("例如，在开发团队中，如果没有一个统一的命名规范，开发人员可能会使用不同的命名方式，这会使代码的可读性下降，导致其他开发人员需要花费更多的时间来理解代码。")]),t._v(" "),n("p",[t._v("此外，代码规范还有以下好处")]),t._v(" "),n("ul",[n("li",[t._v("提高代码可读性")]),t._v(" "),n("li",[t._v("提高代码可维护性")]),t._v(" "),n("li",[t._v("降低代码出错的风险")]),t._v(" "),n("li",[t._v("提高团队协作效率")]),t._v(" "),n("li",[t._v("改善代码质量")])]),t._v(" "),n("h2",{attrs:{id:"代码规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#代码规范"}},[t._v("#")]),t._v(" 代码规范")]),t._v(" "),n("p",[t._v("具体前端代码规范已单独整理，请点击查看"),n("RouterLink",{attrs:{to:"/guide/"}},[t._v("代码规范")]),t._v("，包含如下内容")],1),t._v(" "),n("ul",[n("li",[t._v("HTML代码规范")]),t._v(" "),n("li",[t._v("CSS规范")]),t._v(" "),n("li",[t._v("静态资源")]),t._v(" "),n("li",[t._v("Git规范")]),t._v(" "),n("li",[t._v("JS规范")]),t._v(" "),n("li",[t._v("框架规范")]),t._v(" "),n("li",[t._v("工具规范")])]),t._v(" "),n("h2",{attrs:{id:"eslint工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#eslint工具"}},[t._v("#")]),t._v(" ESLint工具")]),t._v(" "),n("p",[t._v("已将上述规范整理为可用的ESLint工具，请点击查看"),n("a",{attrs:{href:"https://github.com/CrayonPig/eslint-plugin-guide",target:"_blank",rel:"noopener noreferrer"}},[t._v("eslint-plugin-guide"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("致力于开箱即用的JavaScript、Vue、React、TypeScript的ESlint规则集合")]),t._v(" "),n("h3",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" eslint-plugin-guide "),n("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--dev")]),t._v("\n")]),n("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[n("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1725940332583-84861"}},[t._v("成功")]),n("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"npm install eslint-plugin-guide --dev\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1725940332583-84861","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h3",{attrs:{id:"使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),n("h4",{attrs:{id:"在js中使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在js中使用"}},[t._v("#")]),t._v(" 在JS中使用")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"guide"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:guide/base"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")]),n("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[n("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1725940332583-609"}},[t._v("成功")]),n("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":'module.exports = {\n  plugins: ["guide"],\n  extends: [\n    "plugin:guide/base"\n  ],\n};\n',"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1725940332583-609","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("h4",{attrs:{id:"在ts中使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在ts中使用"}},[t._v("#")]),t._v(" 在TS中使用")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"guide"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:guide/base"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:guide/typeScript"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")]),n("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[n("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1725940332583-85859"}},[t._v("成功")]),n("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":'module.exports = {\n  plugins: ["guide"],\n  extends: [\n    "plugin:guide/base",\n    "plugin:guide/typeScript", \n  ],\n};\n',"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1725940332583-85859","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("h3",{attrs:{id:"在react中使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在react中使用"}},[t._v("#")]),t._v(" 在React中使用")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"guide"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:guide/base"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:guide/typeScript"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:guide/react"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:guide/reactHooks"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")]),n("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[n("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1725940332583-15320"}},[t._v("成功")]),n("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":'module.exports = {\n  plugins: ["guide"],\n  extends: [\n    "plugin:guide/base",\n    "plugin:guide/typeScript", \n    "plugin:guide/react", \n    "plugin:guide/reactHooks", \n  ],\n};\n',"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1725940332583-15320","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br")])]),n("h4",{attrs:{id:"在vue2中使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在vue2中使用"}},[t._v("#")]),t._v(" 在Vue2中使用")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"guide"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:guide/base"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:guide/typeScript"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:guide/vue2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")]),n("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[n("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1725940332583-56002"}},[t._v("成功")]),n("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":'module.exports = {\n  plugins: ["guide"],\n  extends: [\n    "plugin:guide/base",\n    "plugin:guide/typeScript", \n    "plugin:guide/vue2", \n  ],\n};\n',"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1725940332583-56002","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("h4",{attrs:{id:"在vue3中使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在vue3中使用"}},[t._v("#")]),t._v(" 在Vue3中使用")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"guide"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:guide/base"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:guide/typeScript"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"plugin:guide/vue3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")]),n("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[n("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1725940332585-78917"}},[t._v("成功")]),n("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":'module.exports = {\n  plugins: ["guide"],\n  extends: [\n    "plugin:guide/base",\n    "plugin:guide/typeScript", \n    "plugin:guide/vue3", \n  ],\n};\n',"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1725940332585-78917","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);