const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development', //设置为开发模式
    entry: path.join(__dirname, './src/main.js'), //入口文件
    output: { //出口选项
        path: path.join(__dirname, './dist'), //出口文件路径
        filename: 'bundle.js' //出口文件名称
    },
    devServer: { //自动打包配置
        port: 3000, //端口号3000
        contentBase: './src', //设置服务器所读取的文件目录
        hot: true,  //热加载
        inline: true, //当源文件改变时会自动刷新页面
        historyApiFallback: true
    },
    plugins: [ //所有webpack插件的配置节点
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), //指定模板文件路径
            filename: 'index.html' //设置生成的内存页面名称
        }),
        new VueLoaderPlugin()
    ],
    module: { //配置所有第三方loader模块的
        rules: [ //匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },    //处理css的loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader' ] },   //处理less的loader
            {
                //处理图片路径的loader     name=图片是本身的名字和.后缀名 
                test: /\.(png|jpg|gif|bmp|jpeg)$/,
                use: 'url-loader?limit=13958&name=[hash:8]-[name].[ext]'
            }, 
            //处理js的loader，排除node_modules中的js文件
            { 
                test: /\.js$/, 
                exclude: /node_modules/ , 
                use: 'babel-loader'
            },
            { 
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ] 
    }
};