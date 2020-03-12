//存放blog路由相关内容
function handleBlogRouter(req,res){
    const method =req.method;
    if(method=='GET' && req.path=='/api/blog_me/list'){
        //向数据库获取博客信息 sql
        return {
            id:'1',
            title:'标题',
            content:'内容',
            time:'221545615'
        }
    }
    if(method=='GET' && req.path=='/api/blog_me/detail'){
        //向数据库获取博客信息 sql
        return {
        id:'2',
        title:'标题1',
        content:'详情内容XXXXXXXXXXXXX',
        time:'2353425345'
        }
    }
    if(method=='POST' && req.path=='/api/blog_me/new'){
        //向数据库获取博客信息 sql
        return {
            mes: '新增博客接口'
        }
    }
    if(method=='POST' && req.path=='/api/blog_me/updata'){
        //向数据库获取博客信息 sql
        return {
            mes: '更新博客的接口'
        }
    }
    if(method=='POST' && req.path=='/api/blog_me/del'){
        //向数据库获取博客信息 sql
        return {
            mes: '删除博客的接口'
        }
    }
}
module.exports=handleBlogRouter;
