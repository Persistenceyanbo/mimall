module.exports = {
    devServer: {
        host: 'localhost',
        port: '8080',
        proxy: { // '/api' 是一个拦截， target目标表示代理到哪里去, 是否将主机头的原点设置为目标原点
            '/api': {
                target: 'https://www.imooc.com',
                changeOrigin: true,// 改变原点
                pathRewrite: {
                    '/activity': '/activity'
                }
            }
        }
    }
}
