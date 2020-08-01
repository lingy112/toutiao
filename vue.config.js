module.exports = {
    lintOnSave: false,
    publicPath:'./',
    productionSourceMap:false ,//默认不生成sourceMap  : 源代码文件
    devServer: {
        proxy: 'http://tt.linweiqin.com/api/tt/', // 转发的地址
    }
}