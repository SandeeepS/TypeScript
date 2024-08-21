// infer types >>>>>

// let userName = "sandeep";
// userName = 10;


//Defining types (Explicit Types) >>>>>
// let userName: string = "sandeep";
// let number: number = 5000;
// let isSubscribed: boolean = true;
// let skills: string[] = ["js","TS"];
// let count: number[] = [4,2,5];
// let emptyArray: [] = [];
// let userDetails: {name:string;age:number} = {
//     name:"sandeep",
//     age:22,
// };

//Interface >>>>

// interface Details {
//     name:string;
//     age:number;
//     salary:number;
//     getName: () => void;
// }
// let userDetails: Details = {
//     name:"sandeep",
//     age:22,
//     salary:60000,
//     getName() {
//         console.log(this.name)
//     },
// };


//Type >>>>
// type Details = {
//     name:string;
//     age:number;
//     salary:number;
//     getName: () => void;
// }

// let userDetails: Details = {
//     name:"sandeep",
//     age:22,
//     salary:60000,
//     getName() {
//         console.log(this.name)
//     },
// };


// Union / Optional >>>>
// type Details = {
//     name:string;
//     age:number | string;
//     salary:number | string;
//     getName?: () => void; // provided optional functionality
// }

// let userDetails: Details = {
//     name:"sandeep",
//     age:22,
//     salary:60000,

// };

//Functions >>>>>

// type Details = {
//     name:string;
//     age:number | string;
//     salary:number | string;
//     getName?: () => void; // provided optional functionality
// }

// let userDetails: Details = {
//     name:"sandeep",
//     age:22,
//     salary:60000,

// };

// function getUserName(userDetails:Details):name{
//       return userDetails.age
// }

// getUserName(userDetails);
 

     // -- creting with inline
  
    
    // function getUserName({name,age} : {name:string; age:number}){
    //       return age;
    // }
    
    // getUserName({name:"sandeep",age:20});

// Named Types >>>>

type StatusType = "pending" | "completed" | "failed";
let currentStatus:StatusType = "pending";