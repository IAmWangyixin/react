## 待做
- 在网站上生成一个icon，替换favicon.icon

react设计理念: all in js.框架较推崇的一种理念（vue\angular也是）

- manifest 定义网页当成app使用，就可把它存储在桌面，有一个快捷方式可以进入这个网址。在这个文件里定义一些快捷方式的图标、网址等内容。

- registerServiceWorker (PWA progressive web application)借助网页写手机app的功能。
// 效果:使用该功能写出的页面，上传到https协议的服务器上，第一次浏览网页是需要联网，这时如果断网了，再访问页面依旧可以访问这个网页，因为registerServiceWork把网页存储在浏览器之内。
