// Union and Any types in TypeScript
let subscription:number | string = 1; // Union type: can be number or string
subscription = "Premium"; // Valid assignment

//usage of Union
let apiRequestStatus: "success" | "error" | "pending"; // Union type with string literals
apiRequestStatus = "success";
apiRequestStatus = "error";
// apiRequestStatus = "completed"; // Type error: not assignable to type '"success" | "error" | "pending"'

// Any type in TypeScript
const orders=['12','13','14','15','16','17','18','19','20'] 
let currrentOrder: any;
for(let order of orders){
    if(order=='15'){
        currrentOrder=order;
    }
}

console.log(currrentOrder); // Output: 15