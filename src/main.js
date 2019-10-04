import Vue from 'vue'; 
/*
    找包的过程：
    1. 在项目根目录中找到node_modules
    2. 找到vue文件夹
    3. 在vue文件夹中找package.json文件,在package.json中找到main属性，main属性指向的路径就是该资源包是runtime-only,
    runtime-only功能不完善，我们所需要的是完整的vue.js文件。所以↓
*/
// import Vue from '../node_modules/vue/dist/vue.js';

// 1.导入login组件
import login from './login.vue';
//webpack无法打包.vue文件，需要安装对应的loader：
//cnpm i vue-loader vue-template-compiler -D。然后在配置文件去配置
//这时候使用components的方式无效

//因为runtime-only功能不完善，使用components的方式无效，那么就需要用单文件组件的方式然后用render函数来渲染
// const login = {
//     template: '<h1>网页形式中的登录组件</h1>'
// }

const vm = new Vue({
    el: '#app',
    data: {
        message: '123'
    },
    methods: {},
    // components: {
    //     login
    // },
    render: function(createElements){
        return createElements(login);
    }
});
