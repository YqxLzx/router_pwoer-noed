//Express提供了包装路由方式
var express = require('express')
//创建一个路由容器
var router = express.Router()
//token
const jwt = require('jsonwebtoken');

router.post('/login', (req,res) => {
    const data = req.body;
    if(data.name === 'admin') {
        const token = 'Bearer ' + jwt.sign({ //一般项目开发都是Bearer+空格的字符串开头
        	id:'001',
        	pwoer:'adimn'
        }, 'my_token', {
            expiresIn: 3600 * 2
        });

        res.status(200).json({  // 返回一个json  也可以用res.send
            code: '000001',
            data: token,
            msg: '登录成功',

        })

    } else if(data.name === 'user'){
        const token = 'Bearer ' + jwt.sign({ //一般项目开发都是Bearer+空格的字符串开头
        	id:'02',
        	pwoer:'user'
        }, 'my_token', {
            expiresIn: 3600 * 2
        });
        
        res.status(200).json({  // 返回一个json  也可以用res.send
            code: '000001',
            data: token,
            msg: '登录成功',

        })
    }
    else {
        res.status(201).json({
            code: '000002',
            data: null,
            msg: '用户名或密码错误',
        })
    }
});

/*退出登陆路由
router.get('/logout',function(req,res){
	//清除登陆状态
	req.session.user = null
})
*/


//导出路由
module.exports = router 