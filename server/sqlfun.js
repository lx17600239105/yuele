//sql语句
var sqlMap = {
    //用户
    user:{
        login:'SELECT password FROM user WHERE username = ?;',
        add:'INSERT into user(username,password) values(?,?);'
    }
}
module.exports = sqlMap