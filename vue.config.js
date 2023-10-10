module.exports = {
    outputDir: 'docs',
    devServer: {
        // 端口号
        port: 8080,
        // 自动打开浏览器
        open: true,
        // 配置代理
        proxy: {
            '/api': {
                target: 'http://api.vikingship.xyz/', // 在.env.development和.env.production配置过的数据，例如：http://localhost:8082/
                // 是否改变域名
                changeOrigin: true,
                // 代理websockets
                ws: true,
                // 路径重写
                pathRewrite: {
                    /**
                     * 注意：一般项目有统一的访问名称：如api,此时需要路径重写为如下，相当于代理为：http://localhost:8082/api,如
                     * 路径为：http://localhost:8082，那么就不需要重写代理名，或者写为："/api": "/"
                     */
                    '/api': '/api'
                },
                // 重写cookie路径，很有必要，此操作可以保证浏览器中可以保存cookie值
                cookiePathRewrite: {
                    '/api': '/'
                }
            }
        }
    }
}