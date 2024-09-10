module.exports = {
  '/advanced/esbuild/': [
    '/advanced/esbuild/',
    {
      title: '使用介绍',
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        '/advanced/esbuild/cmd',
        '/advanced/esbuild/code',
        '/advanced/esbuild/summary',
      ]
    },
    '/advanced/esbuild/plugin',
  ],
  '/advanced/rollup/': [
    '/advanced/rollup/',
    {
      title: '使用介绍',
      collapsable: false, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        '/advanced/rollup/cmd',
        '/advanced/rollup/code',
        '/advanced/rollup/config',
        '/advanced/rollup/api',
        '/advanced/rollup/usePlugin',
      ]
    },
    '/advanced/rollup/plugin',
  ]
}
    