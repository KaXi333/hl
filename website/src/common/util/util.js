const ShowDeviseFn = function(a,b){
    if(a < 600){
    	b=true
    	console.log('小于600',b)
    }else{
    	b=false
    	console.log('大于600',b)
    }
    return b
    console.log(a,b)	 
}
export {ShowDeviseFn}