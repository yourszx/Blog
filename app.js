const handleBlogRouter=require('./src/router/blog');
const handleUserRouter=require('./src/router/user')
const querystring=require('querystring');
function handleServer(req,res){
    const method=req.method;
    req.path=req.url.split('?')[0];            // /api/blog/list
    res.setHeader('Content-type','application/json');
    req.query=querystring.parse(req.url.split('?')[1]); 
    //处理post 参数
    req.body='';
    req.on('data',function(data){
        req.body+=data.toString();
    });
    req.on('end',function(){
        const blogDate=handleBlogRouter(req,res);
        if(blogDate){
        res.end(JSON.stringify(blogDate));
        return;
    }
    //处理用户(登陆，注册)
    
        const userDate=handleUserRouter(req,res);
        if(userDate){
            res.end(JSON.stringify(userDate));
            return;
        }
    });
    res.writeHead('404',{'Content-Type':'text/plain'});
    res.write('404 Not Found');
    res.end();
    
}

module.exports = handleServer;