this.onMessage=function(res){
    var sum=res.data.num1+res.data.num2;
    this.postMessage(sum);
}