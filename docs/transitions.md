1、了解 transitions （过渡动画）的基本原理
    简单来说，就是当模块消失、出现时，会以什么样的形式消失和出现；如果要使用过渡动画，则在标签里加入属性：transition=”过渡动画名”
    例如：
        <div class="box" v-if="box_1" transition="mytran">1</div>
    这里是mytran就是过渡动画名，他是一个类名，动画将基于这个名字而添加多个不同的扩展名，如下所示：
        .mytran-transition：动画状态，css的transition属性放在这里，他表示的类会始终存在于DOM之上
        .mytran-enter：进入时，组件从这个css状态扩展为当前css状态，这个类只存在最开始的一帧
        .mytran-leave：退出时，组件从原来的css状态恢复为这个状态，这个类从退出开始时生效，在退出结束时删除

    JavaScript钩子：
        Vue.transition('mytran', { 
            beforeEnter: function (el) {
                console.log("进入动画开始时间:" + new Date().getTime()); 
            }, 
            enter: function (el) { 
                console.log("进入动画时间:" + new Date().getTime()); 
            }, 
            afterEnter: function (el) { 
                console.log("进入结束时间:" + new Date().getTime()); 
            }, 
            beforeLeave: function (el) { 
                console.log("离开动画开始时间:" + new Date().getTime()); 
            }, 
            leave: function (el) { 
                console.log("离开中..." + new Date().getTime()); 
            }, 
            afterLeave: function (el) { 
                console.log("离开结束时间:" + new Date().getTime()); 
            } 
        })

    使用第三方库时，涉及自定义过渡类名：
        Vue.transition("bounce", { 
            enterClass: 'bounceInLeft', 
            leaveClass: 'bounceOutRight'
        })

    在Vuejs中，animation动画和transition动画是不同的。
        transition动画分为三步：常驻类，进入时触发的类，退出时触发的类；只有常驻类有transition动画属性，其他两步只有css状态；
        而animation动画分为两步：进入时触发的类，退出时触发的类，还有xxx-transition这个类存在于dom之中（这个类可以用于设置动画原点，或者不设置）

    vue2-animate:第三方插件

2、router方案
    经过初步的调研，决定放弃继承vue-router，而是直接使用F7自带的router系统。这是因为F7作为多页面管理系统，其页面布局、路由思路和vue-router有较大差别
    1、f7-view 作为组件注入点
    2、设置 f7-list-item 的 link 属性实现静态路由跳转
    3、监听 f7-link 的点击事件，通过Router API实现动态跳转，例如：
        <f7-link @click="$f7router.back()">Go back via Router API</f7-link>
    4、设置 f7-link 的 href 属性实现静态路由跳转
    5、在函数句柄内通过 this.$f7router 对象调用相应的API

3、集成vuex
    1、引入vuex， 并通过 Vue.use(Vuex) 应用此插件
    2、新建 src/modules 目录，建立三个文件，分别是 actionType.js - 存放全部action的命名枚举，mutationType.js - 存放全部mutation的命名枚举，moduleA.js - 一个示范性的数据文件
    3、通过 "new Vuex.Store" 构造函数，创建一个联合所有数据文件的数据仓库store
    4、将 store 添加到应用程序对象 myApp 的属性节点中
    5、在模板文件中，添加计算属性来导入所需要的数据仓库属性，注意要通过 store.数据文件名.属性名 的层次结构进行引用
    6、在模板文件的方法中，调用 this.$store.commit 或 this.$store.dispatch 来分发 action 或 mutation

