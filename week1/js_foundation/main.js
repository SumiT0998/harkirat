// // // // let ismarried = true;

// // // // if (ismarried == true) {
// // // //   console.log("sumit is married");
// // // // } //if/else
// // // // else {
// // // //   console.log("not married");
// // // // }

// // // // let sum = 0;
// // // // for (let i = 0; i <= 3; i++) {
// // // //   sum += i; ////////////////////////////////////  for loop
// // // // }
// // // // console.log(sum);

// // // // const personarr = ["sumti","soni","amit","nitin","ankit"];

// // // // console.log(personarr[2]);

// // // // let numarr=[1,2,3,4,5,6,7];
// // // // let temp= numarr[0];
// // // // for(let i=1;i<numarr.length;i++){
// // // //     if(numarr[i]>temp){max=numarr[i]};

// // // // }
// // // // console.log(temp);

// // // // const user1 = {
// // // //   firstn: "aman",
// // // //   gender: "male",
// // // // };

// // // // const value = [1, 2, 3];

// // // //array of objects

// // // const alldata = [
// // //   { firstn: "kabir", gender: "male" },
// // //   { firstn: "sonali", gender: "female" },
// // //   { firstn: "nitesh", gender: "male" },
// // // ];

// // // for (let index = 0; index < alldata.length; index++) {
// // //   if (alldata[index]["gender"] == "male") {
// // //     console.log(alldata[index]["firstn"]);
// // //   }
// // // }

// // function fnSum(a,b){
// //     return a+b;
// // }

// // console.log(fnSum(2,3));

// let sum=0;
// for(let i=0;i<10000000000000;i++){
//     sum+=i;
// }
// console.log(sum);

///callback functions

// function findsum(a,b){
//     let result=a+b
//     displayres(result);
// }

// function findsum(a, b, fntoCall) {
//   //this is callback function
//   let result = a + b;
//   fntoCall(result);
// }
// function displayres(data) {
//   console.log("sum of number is=>" + data);
// }

// findsum(12342342, 9023940, displayres); //callbacks



//-->>>>>>>>>>>>.set timeout  

// function geet(){
//     console.log("hello world");
// }

// setTimeout(geet,10*1000);    //1 sec =1000 millisec

// setInterval(geet,2*1000); 



function arthmeetic(a,b,operation){
    const res =operation(a,b);
    displayres(res);

}

function add(a,b){return a+b;}
function sub(a,b){return a-b;}
function displayres(data){
    console.log("result is="+data);
}


arthmeetic(10,5,sub);

