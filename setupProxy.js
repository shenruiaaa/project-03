const { createProxyMiddleware } = require("http-proxy-middleware")
// const proxy = require('http-proxy-middleware')
// const { createProxyMiddleware } = require('http-proxy-middleware')

// module.exports = function (app) {
//   app.use(createProxyMiddleware('/api', {
//     target: 'http://172.16.136.249:8080',
//     secure: false,
//     changeOrigin: true,
//     pathRewrite: {
//       "^/api": "/api"
//     }
//   }))
// }


module.exports = function (app) {
	app.use(
		createProxyMiddleware('/api1', { //遇见/api1前缀的请求，就会触发该代理配置
			target: 'http://localhost:5000', //请求转发给谁
			secure: false,
			changeOrigin: true,//控制服务器收到的请求头中Host的值
			pathRewrite: { '^/api1': '' } //重写请求路径(必须)
		})

	)
}