
//Global Scope
let y =60
var a =10
 function test(){
    console.log(y);
    console.log(a);
 }
 test()
console.log(y,a,"sushma");

 
//function scope
 function demo(){
    var x =20
    console.log('inside the function',x  , "HIIII");
    
    if(true){
        let z=50
        // console.log('accessing z inside the block',z);
        console.log('accessing x inside the block',x , "heloo");
    }
}
    // console.log('accessing z inside the function and outside the block',z);
    //line 24 z cant access as z calling here outside of function
 demo()


 //block scope
 if(true)
 {
    var b = 30
    const c = 40
    console.log('accessing b and c inside the block',b,c);
 }
 console.log('accessing b outside the block',b);
//  console.log('accessing c outside the block',c);
 //inline 36 c cant access as c is in block scope 
