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

            // type StatusType = "pending" | "completed" | "failed";
            // let currentStatus:StatusType = "pending";


            // //Fucntion overloading >>>>
            // function add1(num1:number | string,num2:number | string):number | string{
            //     if(typeof num1 === "string" || typeof num2 === "string"){
            //         return num1 + " " + num2;
            //     }

            //     return num1 + num2;
            // }


            // //about code is chenged to below code
            // function add(num1:string,num2:string):string;
            // function add(num1:number,num2:number):number;
            // function add(num1:any,num2:any):any{
            //     return num1 + num2;
            // }

            // add1(2,2); //4
            // add1("2","2"); //22


//Generic >>>>>>

            //normal funciton
            // function getAge(age:string|number): string|number{
            //     return age;
            // }

            // getAge(20);
            // getAge("20");

            // funciton useing generics
            // function getAge<T>(age:T):T{
            //     return age;
            // }

            // getAge<number>(20);
            // getAge<string>("20");

// //combining two types 

            //         type UserDetails = {
            //             name: string;
            //             age:number;
            //         }

            //         type AdminDetails = UserDetails &  {
            //             role: string;
            //         }


// combining two interfaces >>>

            //    interface UserDetails {
            //         name: string;
            //         age:number;
            //     }

            //    interface AdminDetails extends UserDetails {
            //         role: string;
            //     }

//Enums >>>> 

            // type StatusType = "pending" | "completed" | "failed"; without enum 

            // enum StatusType {
            //     PENDING=1,              //provided capital letter due to a industry standard
            //     COMPLETED,
            //     FAILED,
            // }

//as const >>>>

        // let userName = "debug media" as const;
        // userName = "debug media";
            
// keyof typeOf
            // type StatusType = "pending" | "completed" | "failed"; without enum 

            enum StatusType {
                PENDING=1,              //provided capital letter due to a industry standard
                COMPLETED,
                FAILED,
            }

            function getStatus(orderId:string,status:StatusType){
                console.log(orderId,"==",status);
            }
            getStatus("1234",StatusType.COMPLETED);
//utility Types


