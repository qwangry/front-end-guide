(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{463:function(s,a,t){"use strict";t.r(a);var e=t(10),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"安装和更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装和更新"}},[s._v("#")]),s._v(" 安装和更新")]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),a("p",[s._v("跟我们使用"),a("code",[s._v("Node.js")]),s._v("一样，都需要先到官网进行安装，并且安装时会将编译器和包管理器一同安装到系统中。"),a("a",{attrs:{href:"https://www.rust-lang.org/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Rust官网地址"),a("OutboundLink")],1)]),s._v(" "),a("table",[a("thead",[a("tr",[a("th"),s._v(" "),a("th",[s._v("Node")]),s._v(" "),a("th",[s._v("Rust")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("运行命令")]),s._v(" "),a("td",[s._v("node")]),s._v(" "),a("td",[s._v("rustc")])]),s._v(" "),a("tr",[a("td",[s._v("包管理器")]),s._v(" "),a("td",[s._v("npm")]),s._v(" "),a("td",[s._v("cargo")])]),s._v(" "),a("tr",[a("td",[s._v("版本管理")]),s._v(" "),a("td",[s._v("nvm")]),s._v(" "),a("td",[s._v("rustup")])])])]),s._v(" "),a("p",[a("code",[s._v("Rust")]),s._v(" 是编译型语言，通过编译器 "),a("code",[s._v("rustc")]),s._v(" 将静态语言编译成目标平台的原生可执行文件，这些可执行文件可以直接在目标平台上运行。类似于"),a("code",[s._v("TypeScript")]),s._v("的解析器"),a("code",[s._v("tsc")]),s._v("将"),a("code",[s._v(".ts")]),s._v("文件解析为可执行的"),a("code",[s._v(".js")]),s._v("文件。")]),s._v(" "),a("h3",{attrs:{id:"linux或macos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux或macos"}},[s._v("#")]),s._v(" Linux或MacOS")]),s._v(" "),a("p",[s._v("MacOS、Linux 或其它类 Unix 系统。要下载 "),a("code",[s._v("Rustup")]),s._v(" 并安装 "),a("code",[s._v("Rust")]),s._v("，请在终端中运行以下命令")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--proto")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'=https'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--tlsv1.2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sSf")]),s._v(" https://sh.rustup.rs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("rustup安装后，系统会提示您三个选项：")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("1) Proceed with installation (default)\n2) Customize installation\n3) Cancel installation\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("默认选择第一个就可以，安装完成后，界面会提示")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("stable installed - rustc 1.75.0 (82e1608df 2023-12-21)\n\n\nRust is installed now. Great!\n\nTo get started you need Cargo's bin directory ($HOME/.cargo/bin) in your PATH\nenvironment variable. Next time you log in this will be done automatically.\n\nTo configure your current shell run source $HOME/.cargo/env\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"windows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[s._v("#")]),s._v(" Windows")]),s._v(" "),a("p",[s._v("在 Windows 上，访问"),a("a",{attrs:{href:"https://www.rust-lang.org/zh-CN/tools/install",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装页面"),a("OutboundLink")],1),s._v("并按照说明安装 Rust。")]),s._v(" "),a("p",[s._v("在安装过程的某个步骤，你可能会收到一条消息，提示你还需要适用于 Visual Studio 2013 或更高版本的 C++ 的构建工具（C++ build tools）。获取这些构建工具的最简单方法是安装 Visual Studio 2019 的构建工具。当被问及要安装哪些内容时，请确保已选择 “C++ build tools”，并包括 Windows 10 SDK 和英文语言包。")]),s._v(" "),a("p",[s._v("要检查是否正确安装了 Rust，可打开 shell 并输入下面这行")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("rustc "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后就会看到最新发布的稳定版本的版本号、提交哈希值和提交日期，如下所示格式")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("rustc x.y.z "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("abcabcabc yyyy-mm-dd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果有表示你安装成功了，如果没有并且是Windows，请把 "),a("code",[s._v("C:\\Users\\{PC}\\.cargo\\bin")]),s._v(" 添加到环境变量 PATH 里，如果没有生效，重启一下即可。")]),s._v(" "),a("h2",{attrs:{id:"安装其他版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装其他版本"}},[s._v("#")]),s._v(" 安装其他版本")]),s._v(" "),a("p",[s._v("前面我们说过，"),a("code",[s._v("rustc")]),s._v("是可以管理 "),a("code",[s._v("Rust")]),s._v(" 多个版本的，例如，想安装"),a("code",[s._v("1.29.0")]),s._v(" 版本")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("rustup "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.29")]),s._v(".0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("安装完成后，你可以使用以下命令切换到已安装的特定版本")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("rustup default "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.29")]),s._v(".0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"更新和卸载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新和卸载"}},[s._v("#")]),s._v(" 更新和卸载")]),s._v(" "),a("p",[s._v("通过 "),a("code",[s._v("rustup")]),s._v(" 安装 "),a("code",[s._v("Rust")]),s._v(" 后，更新到最新版本很简单。在 "),a("code",[s._v("shell")]),s._v(" 中运行以下更新命令：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("rustup update\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("要卸载 "),a("code",[s._v("Rust")]),s._v(" 和 "),a("code",[s._v("rustup")]),s._v("，在 "),a("code",[s._v("shell")]),s._v(" 中运行以下卸载命令：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("rustup self uninstall”\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"包管理器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包管理器"}},[s._v("#")]),s._v(" 包管理器")]),s._v(" "),a("p",[a("code",[s._v("Rust")]),s._v(" 的包管理器叫 "),a("code",[s._v("cargo")]),s._v("，我们使用"),a("code",[s._v("cargo --help")]),s._v("会发现，"),a("code",[s._v("cargo")]),s._v("主要有如下命令")]),s._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[s._v("build, b    构建当前包\ncheck, c    分析当前包并报告错误，但不构建目标文件\nclean       删除构建的目录\ndoc, d      构建当前包及其依赖项目的文档（会创建 `target/doc` 目录，使用浏览器打开可以查看详细的文档）\nnew         创建一个新的包\ninit        在现有目录中创建一个新的包\nadd         添加依赖项到当前项目中\nremove      从当前项目中删除依赖项\nrun, r      构建并运行项目\ntest, t     运行测试\nbench       运行基准测试\nupdate      更新在 Cargo.lock 注册的依赖项版本\nsearch      搜索 crates\npublish     打包并上传当前包 （crates.io）\ninstall     安装 Rust 二进制文件，默认目录在 $HOME/.cargo/bin\nuninstall   卸载 Rust 二进制文件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("后续我们在使用过程中，会逐步了解每个命令的详细作用")])])}),[],!1,null,null,null);a.default=n.exports}}]);