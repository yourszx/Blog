const handleBlogRouter=require('./src/router/blog');
const handleUserRouter=require('./src/router/user')
const querystring=require('querystring');
function getPostDate(req){
    const method=req.method;
    //封装promise
    const promise=new Promise(function(resolve,reject){
        if(method !== "POST"){
            resolve({});
            return;
        }
        //客户端post发送数据的时候，只能发送json数据
        if(req.headers['content-type'] !=='application/json'){
            resolve({});
            return;
        }
        var postData='';
        req.on('data',function(data){
            postData+=data; 
        })
        req.on('end',function(){
            if(!postData){
                resolve({});
                return;
            }
            resolve(JSON.parse(postData));
        })
    });

    return promise;
}
function handleServer(req,res){
    res.setHeader('Content-type','application/json');
    const method=req.method;
    req.path=req.url.split('?')[0];            // /api/blog/list
    req.query=querystring.parse(req.url.split('?')[1]); 
    //处理post 参数
    getPostDate(req).then(function(postData){

        req.body=postData;
    //处理博客请求
    const blogData=handleBlogRouter(req,res);
        if(blogData){
    res.end(JSON.stringify(blogData));
        return;
        }
        //处理用户(登陆，注册)
    const userDate=handleUserRouter(req,res);
        if(userDate){
            res.end(JSON.stringify(userDate));
            return;
        }
    res.writeHead('404',{'Content-Type':'text/plain'});
    res.write('404 Not Found');
    res.end();
    });
    
}

module.exports = handleServer;