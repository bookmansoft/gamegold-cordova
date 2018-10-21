# 游戏金核心 Game Gold Core for Cordova

## 概述
游戏金核心是一个类比特币应用，它采用区块链技术，试图建立一个基于对等网络的新型游戏生态系统。

Game Gold Core for Cordova 是游戏金核心针对 Browser/Cordova 项目封装的核心库，可以在浏览器/Hybird环境下运行SPV节点应用。

lib/gamegold.js 是一个独立封装库文件，可以打包到第三方浏览器/Hybird应用中，并不依赖 node 环境。

本项目依托 Node 环境，搭建了一个独立演示项目，成功运行该项目后，将会在本地打开一个浏览器窗口，启动一个游戏金SPV节点。
对项目进行适当的参数配置后再次运行，它将自动成为游戏金对等网络上的一个SPV节点，参与全局信息交换、数据缓存等工作。
```js
const node = new gamegold.spvnode({
  config: false, //Web 环境下不支持外部配置文件
  hash: true,
  query: true,
  prune: true,
  network: 'testnet',
  db: 'leveldb',
  coinCache: 30000000,
  persistent: true,
  logConsole: true,
  workers: true,
  logger: logger,
  /**
   * 为当前节点(Cordava SPV)传入默认seeds列表
   */
  seeds: [
    `112.74.65.55`
  ],
  //插件列表
  plugins: [ //2018.5.3 当前版本要求：钱包插件最后载入
    gamegold.wallet.plugin,    //钱包管理插件，可以在全节点或SPV节点加载
  ],
  'http-remote-host': '112.74.65.55',
  'api-key': 'bookmansoft',
});
```

## 安装指南

一、克隆项目模式
1、安装 nodejs 10.4.0 及其以上版本

2、克隆代码仓库
```bash
git clone https://github.com/bookmansoft/gamegold-cordova
```

3、安装依赖库
```bash
cd gamegold-cordova
npm i
```

4、运行项目
```bash
npm start
```

5、在浏览器命令窗口上直接执行命令：
```bash
cp.list
```
将列表显示主链上注册的所有厂商信息

二、npm安装模式
1、在现有项目根目录下，执行如下命令：
```bash
npm i gamegold-cordova
```

2、在现有项目的js文件中，引用核心库：
```js
const gamegold = require('gamegold-cordova');
const node = new gamegold.spvnode({
  config: false, //Web 环境下不支持外部配置文件
  hash: true,
  query: true,
  prune: true,
  network: 'testnet',
  db: 'leveldb',
  coinCache: 30000000,
  persistent: true,
  logConsole: true,
  workers: true,
  logger: logger,
  /**
   * 为当前节点(Cordava SPV)传入默认seeds列表
   */
  seeds: [
    `112.74.65.55`
  ],
  //插件列表
  plugins: [ //2018.5.3 当前版本要求：钱包插件最后载入
    gamegold.wallet.plugin,    //钱包管理插件，可以在全节点或SPV节点加载
  ],
  'http-remote-host': '112.74.65.55',
  'api-key': 'bookmansoft',
});
```

## 关联项目

全节点仓库
https://github.com/bookmansoft/gamegold

全节点示范项目，将游戏金核心作为依赖包引入
https://github.com/bookmansoft/gamegoldnode

全节点管理后台
https://github.com/bookmansoft/gamegold-mgr

API说明文档
https://github.com/bookmansoft/gamegoldapi
