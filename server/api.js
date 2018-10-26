const models = require('./db') //数据库链接信息
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('./sqlfun') //sql语句


//连接数据库
const conn = mysql.createConnection(models.mysql)

conn.connect(function(err){
    if(err){
        console.log(err)
        return
    }
})
const jsonWrite = function(res,ret){
    if(typeof ret === 'undefined'){
        res.json({
            code:'1',
            msg:'操作失败'
        })
    }else{
        res.json(ret)
    }
}

//登录用户接口
router.post('/login',(req,res) =>{
    var sql = $sql.user.login;
    var params = req.body
    console.log('sql',sql)
    console.log('params',params)
    conn.query(sql,[params.username],function(err,result){
        if(err){
           console.log(err)
        }
        if(result){
            jsonWrite(res,result)
            for(let i=0;i<result.length;i++){
                console.log("请求回来！",result[i])
                console.log('请求结果',result[i].password,typeof result[i])
                if(result[i].password =  params.password){
                    console.log(result[i])
                }
            }
            res.end('is over')
        }
    })
});
//用户注册接口
router.post('/addUser',(req,res)=>{
    const params = req.body;
    const searchSql = $sql.user.login;
    conn.query(searchSql,[params.username],function(err,result){
        if(err){
            console.log(err)
        }
        if(result){
            //jsonWrite(res,result)
            if(result.length==1){
                console.log("已注册")
            }else{
                const sql = $sql.user.add;
                conn.query(sql,[params.username,params.password],function(err,result){
                    if(err){
                        console.log(err)
                    }
                    if(result){
                        jsonWrite(res,result)
                        for(let i=0;i<result.length;i++){
                            console.log("请求回来！",result[i])
                            console.log("请求结果！",typeof result[i],result[i].password);
                            if (result[i].password == params.password) {
                                res.send("返回回来了！");
                            }
                        }
                        res.end('is over')
                    }
                })
            }
        }
    })
})
module.exports = router

