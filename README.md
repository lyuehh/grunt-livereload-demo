## 简介

此demo参考<https://github.com/yeoman/generator-angular>, 使用
[grunt](https://github.com/gruntjs/grunt), 
[yeoman](http://yeoman.io/),
[bower](http://bower.io/)等工具, 展示一个前端项目构建所需要的步骤, 工具和流程

## 包含的功能

* 处理css文件, 给CSS3属性增加浏览器私有前缀 [grunt-autoprefixer](https://github.com/ai/autoprefixer)
* 编译CoffeeScript文件为js文件 [grunt-contrib-coffee](https://github.com/gruntjs/grunt-contrib-coffee)
* 编译Sass文件为css文件 [grunt-contrib-compass](https://github.com/gruntjs/grunt-contrib-compass)
* 将多个文件合并为一个文件 [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)
* 复制文件和文件夹到新的路径 [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)
* 压缩css文件 [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin)
* 压缩html文件 [grunt-contrib-htmlmin](https://github.com/gruntjs/grunt-contrib-htmlmin)
* 压缩图片文件, 支持png, jpeg, gif, svg [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)
* js文件校验, 使用jshint [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
* 压缩js文件, 使用uglify [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
* 检测文件变化, 若变化则自动刷新浏览器 [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
* 替换资源文件为Google CDN上的资源(国内用户不建议使用...) [grunt-google-cdn](https://github.com/btford/grunt-google-cdn)
* 自动给js, css, 图片文件加上时间戳 [grunt-rev](https://github.com/cbas/grunt-rev)
* 构建过程统计, 便于优化构建过程 [time-grunt](https://github.com/sindresorhus/time-grunt)

## 搭建步骤

* 安装[Node.js](http://nodejs.org)
* 克隆项目 `git clone git@github.com:lyuehh/grunt-livereload-demo.git`
* 安装 grunt, bower `npm install -g grunt-cli; npm install -g bower`
* 安装依赖 `cd grunt-livereload-demo; npm install; bower install`
* 预览项目 `grunt serve`, 会自动打开浏览器
* 修改下 `app/index.html`, 会看到浏览器自动刷新了
* done~

## 其他命令

* `grunt test`, 测试项目
* `grunt build`, 构建项目, 会在当前目录下生成build文件夹, 其中包含了处理后的文件, 把这些文件部署到自己的服务器上即可
