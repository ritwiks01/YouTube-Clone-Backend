const {dosomething,againdosomething,createfun,readfun,updatefun,deletefun}=require('./newmodel.js')
console.log("is test using nodejs")


//dosomething();
//againdosomething();
console.log(createfun(15));
console.log(createfun(10));
console.log(readfun());
console.log(updatefun(0,130));
console.log(deletefun(1));
