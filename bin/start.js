const opn = require('opn');

//打开基于浏览器/Cordova的SPV节点应用
opn(`file:///${__dirname}/index.html#`);
