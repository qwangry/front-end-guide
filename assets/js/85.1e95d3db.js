(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{420:function(t,e,n){"use strict";n.r(e);var a=n(14),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"容器化部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器化部署"}},[t._v("#")]),t._v(" 容器化部署")]),t._v(" "),e("p",[t._v("传统的部署方式存在着许多问题，比如手动配置和管理、不稳定性、资源浪费等。为了解决这些问题，容器化部署等新兴的部署方式逐渐受到了广泛的关注和应用。")]),t._v(" "),e("p",[t._v("在容器化部署中，应用程序及其依赖项被打包成容器镜像。这些镜像包含应用程序代码、运行时环境、依赖项、配置文件等，并通过容器运行时引擎（如Docker、Kubernetes等）在不同的计算环境中运行。因为容器镜像是轻量级和可移植的，所以容器化部署可以确保应用程序在任何地方都能以相同的方式运行，而无需担心计算环境的差异性。")]),t._v(" "),e("p",[t._v("容器化部署有许多优点，包括：")]),t._v(" "),e("ul",[e("li",[t._v("可移植性：应用程序和其依赖项在容器中打包，容器镜像可以在不同的计算环境中轻松部署，而不需要担心依赖项或环境变量的变化。")]),t._v(" "),e("li",[t._v("可扩展性：容器可以根据需要动态扩展或缩小，可以根据负载自动调整资源使用量，以确保应用程序在高流量时保持高可用性。")]),t._v(" "),e("li",[t._v("安全性：容器化部署有助于隔离应用程序及其依赖项，以减少安全漏洞的风险。")]),t._v(" "),e("li",[t._v("管理性：容器化部署可以简化应用程序部署和管理，例如升级、回滚、监视、日志记录等操作都可以在一个中心化的位置进行。")])]),t._v(" "),e("h2",{attrs:{id:"docker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[t._v("#")]),t._v(" Docker")]),t._v(" "),e("p",[t._v("Docker是一种容器化平台，可以将应用程序及其依赖项打包在一个可移植的容器中，以便在任何地方以相同的方式运行。")]),t._v(" "),e("p",[t._v("使用Docker，开发人员可以轻松地将应用程序打包、部署和扩展，同时确保应用程序在不同环境中的一致性。")]),t._v(" "),e("p",[t._v("Docker有如下优点：")]),t._v(" "),e("ul",[e("li",[t._v("隔离性：Docker 容器可以提供应用程序与主机操作系统之间的隔离，使得应用程序可以在任何系统上运行，避免了不同系统环境之间的兼容性问题。")]),t._v(" "),e("li",[t._v("可移植性：Docker 容器可以在不同的环境中运行，从而使得应用程序的部署更加便捷，可以快速地在不同的服务器之间进行迁移和部署。")]),t._v(" "),e("li",[t._v("易于管理：使用 Docker 镜像和容器可以方便地进行应用程序的打包、部署、升级和维护，同时也可以更好地管理多个版本的应用程序。")]),t._v(" "),e("li",[t._v("提高开发效率：使用 Docker 可以提高开发效率，因为开发人员可以在本地环境中测试应用程序，避免了在不同环境中进行测试的麻烦。")]),t._v(" "),e("li",[t._v("节省资源：使用 Docker 部署应用程序可以节省服务器资源，因为 Docker 容器可以共享主机操作系统的内核，避免了虚拟机的额外开销。")])]),t._v(" "),e("p",[t._v("接下来我们尝试用基于 Docker 部署 React :")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("准备 Docker 环境\n首先需要安装 Docker 并启动 Docker 服务。具体安装方法可以参考 Docker 官方文档，这里不再赘述。")])]),t._v(" "),e("li",[e("p",[t._v("编写 Dockerfile\n在 React 应用程序的根目录下创建一个名为 Dockerfile 的文件，并添加以下内容：")])])]),t._v(" "),e("div",{staticClass:"language-Dockerfile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 基于官方的 Node 镜像")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" node:12.16.1-alpine")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置工作目录")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WORKDIR")]),t._v(" /app")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装依赖")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" package*.json ./")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm install")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拷贝应用程序代码")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COPY")]),t._v(" . .")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建应用程序")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("RUN")]),t._v(" npm run build")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动命令")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CMD")]),t._v(" [ "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm"')]),t._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"start"')]),t._v(" ]")]),t._v("\n")]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1725881873532-62381"}},[t._v("成功")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":'# 基于官方的 Node 镜像\nFROM node:12.16.1-alpine\n\n# 设置工作目录\nWORKDIR /app\n\n# 安装依赖\nCOPY package*.json ./\nRUN npm install\n\n# 拷贝应用程序代码\nCOPY . .\n\n# 构建应用程序\nRUN npm run build\n\n# 启动命令\nCMD [ "npm", "start" ]\n',"data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1725881873532-62381","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br")])]),e("p",[t._v("这个 Dockerfile 的作用是基于官方的 Node 镜像创建一个容器，然后在容器内安装 React 应用程序的依赖，构建应用程序并启动应用程序。")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("构建 Docker 镜像\n在终端中进入 React 应用程序的根目录，执行以下命令来构建 Docker 镜像：")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("docker build -t my-react-app .\n")]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1725881873537-46015"}},[t._v("成功")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"docker build -t my-react-app .\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1725881873537-46015","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("其中，-t 参数用来为镜像命名，. 表示 Dockerfile 的路径为当前目录。")]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("运行 Docker 容器\n使用以下命令来运行 Docker 容器：")])]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-p")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v(":3000 my-react-app\n")]),e("div",{pre:!0,attrs:{class:"m-mdic-copy-wrapper"}},[e("div",{pre:!0,attrs:{class:"u-mdic-copy-notify",id:"j-notify-1725881873537-73779"}},[t._v("成功")]),e("button",{pre:!0,attrs:{class:"u-mdic-copy-btn j-mdic-copy-btn","data-mdic-content":"docker run -p 3000:3000 my-react-app\n","data-mdic-attach-content":"","data-mdic-notify-id":"j-notify-1725881873537-73779","data-mdic-notify-delay":"2000","data-mdic-copy-fail-text":"copy fail",onclick:"!function(t){const e={copy:(t='',e='')=>new Promise((c,o)=>{const n=document.createElement('textarea'),d=e?`\\n\\n${e}`:e;n.value=`${t}${d}`,document.body.appendChild(n),n.select();try{const t=document.execCommand('copy');document.body.removeChild(n),t?c():o()}catch(t){document.body.removeChild(n),o()}}),btnClick(t){const c=t&&t.dataset?t.dataset:{},o=c.mdicNotifyId,n=document.getElementById(o),d=c.mdicNotifyDelay,i=c.mdicCopyFailText;e.copy(c.mdicContent,c.mdicAttachContent).then(()=>{n.style.display='block',setTimeout(()=>{n.style.display='none'},d)}).catch(()=>{alert(i)})}};e.btnClick(t)}(this);"}},[t._v("复制代码")])])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("其中，-p 参数用来将 Docker 容器的 3000 端口映射到宿主机的 3000 端口，my-react-app 是刚才为 Docker 镜像指定的名称。")]),t._v(" "),e("p",[t._v("现在你就可以在浏览器中访问 http://localhost:3000 来访问你的 React 应用程序了。")]),t._v(" "),e("h2",{attrs:{id:"kubernetes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes"}},[t._v("#")]),t._v(" Kubernetes")]),t._v(" "),e("p",[e("code",[t._v("Kubernetes")]),t._v("（通常简称为"),e("code",[t._v("K8s")]),t._v("）是一个用于自动化部署、扩展和管理容器化应用程序的开源平台。")]),t._v(" "),e("p",[t._v("可以用于自动化部署、扩展和管理容器化应用程序。它最初是由 Google 设计并捐赠给 Cloud Native Computing Foundation (CNCF) 的。Kubernetes 的目标是让部署和运行容器化应用程序变得更加容易、高效和可靠。")]),t._v(" "),e("p",[t._v("Kubernetes 的主要功能包括：")]),t._v(" "),e("ul",[e("li",[t._v("容器编排：Kubernetes 可以在集群中部署、管理和扩展容器化应用程序。")]),t._v(" "),e("li",[t._v("自动化部署：Kubernetes 可以自动部署应用程序，并监视它们的状态以确保它们一直在运行。")]),t._v(" "),e("li",[t._v("负载均衡和服务发现：Kubernetes 可以分配应用程序的负载，并自动调整以适应变化的流量。")]),t._v(" "),e("li",[t._v("存储编排：Kubernetes 可以管理应用程序所需的存储资源。")]),t._v(" "),e("li",[t._v("自我修复和弹性：Kubernetes 可以自动修复失败的容器，并根据需要进行扩展。")]),t._v(" "),e("li",[t._v("扩展性：Kubernetes 可以轻松地扩展到支持大型、复杂的应用程序。")])]),t._v(" "),e("p",[t._v("举个例子，假设有一个使用 Node.js 编写的 Web 应用程序。使用 Kubernetes，可以将该应用程序打包成 Docker 容器，并使用 Kubernetes 部署到集群中。Kubernetes 会自动管理容器的状态、存储资源和网络连接，同时可以实现自动扩缩容、故障恢复等功能。这样，就可以轻松地管理、运行和扩展该应用程序，从而节省了时间和成本。")]),t._v(" "),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),e("p",[t._v("容器化部署是一种新兴的部署方式，它将应用程序和其所有依赖项打包到一个可移植、可复制的容器中，以保证应用程序在不同环境下的一致性。容器化部署可以快速地创建、启动和销毁应用程序，并且容器之间是相互隔离的，因此应用程序之间不会发生冲突。与传统的部署方式相比，容器化部署可以更快地部署、扩展和更新应用程序，同时也可以提高应用程序的可靠性和稳定性。")])])}),[],!1,null,null,null);e.default=s.exports}}]);