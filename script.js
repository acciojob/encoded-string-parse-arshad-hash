function parseCode(str){
let red =/0+/g;
let yell=str.split(red);
console.log(str);
console.log(yell);
let ans={
   firstname: null,
   lastName:null,
   id: null
};  
yell.forEach( (a,i)=>{
 let key = Object.keys(ans)[i];
 ans[key]=yell[i];
});
return (ans);
   };
  
//   // Do not change the code below
  const str = prompt("Enter str: ");
  alert(JSON.stringify(parseCode(str)));