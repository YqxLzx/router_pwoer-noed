//Express提供了包装路由方式
var express = require("express")
//创建一个路由容器
var router = express.Router()
//token
const jwt = require("jsonwebtoken");

router.post("/login", (req,res) => {
    const data = req.body;
    if(data.name === "admin") {
        const token = "Bearer " + jwt.sign({ 
        	id:"001",
        	power:"admin"
        }, "my_token", {
            expiresIn: 3600 * 2
        });

        res.status(200).json({  
            code: "000001",
            data: token,
            showList:[{id:0,title:"管理权限",path:"/admin"},{id:2,title:"公共权限",path:"/publicPwoer"}],
            msg: "登录成功",

        })

    } else if(data.name === "user"){
        const token = "Bearer " + jwt.sign({ 
        	id:"02",
        	power:"user"
        }, "my_token", {
            expiresIn: 3600 * 2
        });
        
        res.status(200).json({  
            code: "000002",
            data: token,
            showList:[{id:1,title:"用户权限",path:"/user"},{id:2,title:"公共权限",path:"/publicPwoer"}],
            msg: "登录成功",

        })
    }
    else {
        res.status(201).json({
            code: "000003",
            data: null,
            msg: "用户名或密码错误",
        })
    }
});

/*
router.post("/route",(req,res) => {
	const data = req.body
	if(data.power === "admin"){
		res.status(200).json({
			showList:[{id:0,name:"admin",path:"/admin",meta:{title:"admin"}}]
		})
	}
})
*/

/*退出登陆路由
router.get("/logout",function(req,res){
	//清除登陆状态
	req.session.user = null
})
*/


//导出路由
module.exports = router 