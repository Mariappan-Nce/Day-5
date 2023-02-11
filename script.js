//Print odd Numbers using IIFE:
(function () {
    let c= "12345".split("").join("");
    for (var i = 0; i < c.length; i++) {
      if (c[i] % 2 != 0) {
        console.log(c[i])
      }
    }
     })();
 //Using Anonymous Function
 let a = '12345'.split(" ").join("");
  (()=>{
      for (let i=0;i<a.length;i++){
          if(a[i]%2!=0){
              console.log(a[i])
          }
           }
  })()
//using FLAT ARROW FUNCTION
let b = '12345'.split(" ").join("");
const odd = (()=>{
     for (let i=0;i<b.length;i++){
         if(b[i]%2!=0){
             console.log(b[i])
         }
          }
 }) 
 odd();
 
 //Polindrome using IIFE
(function() {
  let d = "121"
      let e = d.split("").reverse(" ").join("")
           if(d===e){
          console.log(d)
      }
  }
)();
//Polindrome using Anonymous Function
let pol = '121'.split(" ").join("");
(()=>{
         let reversepol = pol.split("").reverse(" ").join("")
              if(pol===reversepol){
             console.log(pol)
         }
     })();
//Polindrome using Flat Arrow Function
let pol1 = '121'.split(" ").join("");
const polindrome= (()=>{
         let reversepol1 = pol.split("").reverse(" ").join("")
              if(pol1===reversepol1){
             console.log(pol1)
         }
     })
     polindrome();

//Print Prime Numbers using IIFE Function:
     let prime = '123456789'.split(" ").join("");
     (function(){
         for(i=0;i<prime.length;i++){
             if(prime[i]/1==prime[i] && prime[i]%2!=0){
                console.log(prime[i])
            }
         }       
         }
     )();

//Print Prime Numbers using Anonymous Function:
     let prime1 = '123456789'.split(" ").join("");
     (()=>{
         for(i=0;i<prime1.length;i++){
             if(prime1[i]/1==prime1[i] && prime1[i]%2!=0){
                console.log(prime1[i])
            }
         }       
         }
     )();
//Print Prime Numbers using Flat Arrow Function Function:
let prime2 = '123456789'.split(" ").join("");
const prim = (()=>{
    for(i=0;i<prime2.length;i++){
        if(prime2[i]/1==prime2[i] && prime2[i]%2!=0){
           console.log(prime2[i])
       }
    }       
    }
)
prim();
//Remove duplicate from array using IIFE Function
let dup = '1224345'.split(" ").join(""); 
(function(){
    let newarr = [...new Set(dup)];
console.log(newarr);
})();
//Remove duplicate from array using Anonymous Function
let dup1 = '1224345'.split(" ").join(""); 
(()=>{
    let newarr = [...new Set(dup1)];
console.log(newarr);
})();
//Remove duplicate from array using Flat Arrow Function
let dup2 = '1224345'.split(" ").join(""); 
const duplicate= (()=>{
    let newarr = [...new Set(dup2)];
console.log(newarr);
})
duplicate();
//find sum using IIFE function
let num = '12345'.split(" ").join(""); 
(function(){
    let sum=0;
  for(let i=0;i<num.length;i++){
     sum =sum + Number(num[i])
  }
   console.log(sum);
})
();
//find sum using Anonymous function
let num1 = '12345'.split(" ").join(""); 
(()=>{
    let sum=0;
  for(let i=0;i<num1.length;i++){
     sum =sum + Number(num1[i])
  }
   console.log(sum);
})
();
//find sum using Flat Arrow function
let num2 = '12345'.split(" ").join(""); 
const sums= (()=>{
    let sum=0;
  for(let i=0;i<num2.length;i++){
     sum =sum + Number(num2[i])
  }
   console.log(sum);
})
sums();
//Find Median Array Using IIFE
(function(arr1,arr2){
  let med1 = -1, med2=-1;
  let arrSize = arr1.length;
  let i=0, j=0,count;
  let result;
  for(count=0;count<=arrSize;count++)
  {
    if(i==arrSize)
    {
      med1=med2;
      med2=arr2[0];
      break;
    }
    else if(j==arrSize)
    {
      med1=med2;
      med2=arr1[0];
      break;
    }
    if(arr1[i]<=arr2[j]){
      med1=med2;
      med2=arr1[i];
      i++;
    }
    else{
      med1=med2;
      med2=arr2[j];
      j++;
    }
  }
  result= (med1+med2)/2;
  console.log(result);
})
([1,2,3],[8,17,20]);
  //Using Anonymous Function
((arr1,arr2)=>{
  let med1 = -1, med2=-1;
  let arrSize = arr1.length;
  let i=0, j=0,count;
  let result;
  for(count=0;count<=arrSize;count++)
  {
    if(i==arrSize)
    {
      med1=med2;
      med2=arr2[0];
      break;
    }
    else if(j==arrSize)
    {
      med1=med2;
      med2=arr1[0];
      break;
    }
    if(arr1[i]<=arr2[j]){
      med1=med2;
      med2=arr1[i];
      i++;
    }
    else{
      med1=med2;
      med2=arr2[j];
      j++;
    }
  }
  result= (med1+med2)/2;
  console.log(result);
})
([1,2,3],[8,17,20]);

//String to Title Caps using IIFE
(function (strArr) {
  let result = [];
  for (var i = 0; i < strArr.length; i++) {
    let x = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    result.push(x);
  }
  console.log( result);
})
(['apple', 'orange', 'mango', 'banana']);

//String to Title Caps using Anonymous
((strArr1) => {
  let result = [];
  for (var i = 0; i < strArr1.length; i++) {
    let x = strArr1[i].charAt(0).toUpperCase() + strArr1[i].slice(1);
    result.push(x);
  }
  console.log( result);
})
(['apple', 'orange', 'mango', 'banana']);
//String to Title Caps using Flat Arrow Function
const titlecaps= ((strArr1) => {
  let result = [];
  for (var i = 0; i < strArr1.length; i++) {
    let x = strArr1[i].charAt(0).toUpperCase() + strArr1[i].slice(1);
    result.push(x);
  }
  console.log( result);
})
titlecaps(['apple', 'orange', 'mango', 'banana']);
//rotate array by k times using IIFE
(function(arr,k){
  for(let i=1;i<=k;i++){
    let x = arr[arr.length - 1];
    arr.pop();
    arr.unshift(x);
  }
  console.log(arr);
} )
([1,2,3,4,7],2);
//rotate array by k times using anonymous
((arr1,k)=>{
  for(let i=1;i<=k;i++){
    let x = arr1[arr1.length - 1];
    arr1.pop();
    arr1.unshift(x);
  }
  console.log(arr1);
} )
([1,2,3,4,7],2);
