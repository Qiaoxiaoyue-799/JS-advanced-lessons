try{
	//监听的代码块
	throw "error curr";
}catch(error){
	console.log(error);
	//捕获到异常后的处理
}finally{
	//无论是否捕获到异常都会执行
}


try {
    function abc(x,cb) {
        console.log(x);
        cb();
    }

    abc("xx",function() {
        var arr = new Array(-1);
    });
}
catch(e) {
    console.log(e);
}


try {
    function abc(x,cb) {
        console.log(x);
        cb();
    }
}
catch(e) {
    console.log()
}


