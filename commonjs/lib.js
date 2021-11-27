console.log("Hello lib")

// 模块输出
exports.hello = "Hello World"

exports.play = function(){
    console.log("Hello Play function")
}

module.exports = function(){
    console.log("module.exports")
}