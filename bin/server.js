//创建一个服务器，配置相关信息。
const http=require('http');
const handleServer=require('../app');
      http.createServer(handleServer).listen(8081);

      //模块化开发：一个模块只干一类事