//处理用户相关的路由
function handleUserRouter(req,res){
    const method=req.method;
    if(method=='POST'&&req.path=='/api/user/login'){
        console.log(req.body);
        return{
            mes:'登陆的接口'
        }
    }
}
module.exports=handleUserRouter;
