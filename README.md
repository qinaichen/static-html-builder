Static HTML Builder
======================

这个工具帮助用户编写基于 AngularJS 的单页面应用。它生成静态 HTML 文件，可用于服务器托管，也可用于构建 Cordova 应用。

特点：

- 使用 less 管理样式
- 使用 bower 管理第三方依赖包
- 支持 IE9 以上浏览器
- 自动整合压缩脚本、样式文件，提高生产环境加载速度
- 开发时内置代理，无需手动关闭浏览器安全性
- 自动引入 `*.js` 与 `*.less`，无需手动维护
- 生成 less source map 文件，方便调试页面
- 自动加入闭包，避免全局命名空间污染
- 支持 ngAnnotate 语法

系统环境安装
=======================

- 系统安装git客户端
- 安装Node.js
- 启动命令行，执行如下命令


    ```shell

    npm install -g bower
    npm install -g grunt-cli

    ```
 - 执行npm install安装所有依赖
 - 命令行执行grunt
 - 启动浏览器，访问9000端口

 前端依赖包安装
 =======================

 - 在[https://bower.io/search/](https://bower.io/search/)中查找需要的安装包
 - 使用bower install安装，如安装jquery
 ```shell
    bower install jquery --save
 ```
 - 在bower.json的dependencies中找到相应的依赖记录，拷贝到app/project.json中的dependencies下
 - 在bower_component中查看安装好的依赖包中的bower.json,检查其main属性中是否包括项目需要依赖的所有文件,如果依赖不完整或与其中的依赖与项目需要的依赖不符,则需要在app/project.json中重置依赖
 如bootstrap：依赖包中bower.json的main是

 ```json
 "main": [
   "less/bootstrap.less",
   "dist/js/bootstrap.js"
 ]
 ```
 则我们需要改为：

 ```json
 "bootstrap": [
     "dist/css/bootstrap.css",
     "dist/js/bootstrap.js"
 ]
 ```
与服务器端交互
========================

在app/project.json中配置proxies,则可以通过反向代理，与服务器端进行数据交互，如：
```json
"proxies": {
    "/api": "http://localhost:8080"
}
```
