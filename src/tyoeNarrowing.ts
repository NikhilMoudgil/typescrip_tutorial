//Type Narrowing
function getSync(kind: string|number){
    if(typeof kind === "string"){
        // Handle string case
        return`Making ${kind} Request...`
    } 
    return `Making order${kind} Request...`
}
//truthiness
function discordAnnouncement(message?: string){
    if(!message){
        return `No ${message} announcement today!`
    }
    return `Today's announcement default`
}

//exhaustive checks
function subscribe(subscription: "free" | "basic" | "premium"| number) {
    if (subscription === "free") {
        return "You have a free subscription.";
    }
    if (subscription === "basic"|| subscription === "premium") {
        return `You have a ${subscription} subscription.`;
    }

    if (typeof subscription === "number") {
        return `You have a subscription with ID: ${subscription}.`;
    }
}

//safety guards
class User {
 userInfo(){
    return "User information";
 }
}
class User2 {
 userInfo(){
    return "User information";
 }
}
function getUserInfo(user: User | User2) {
    if(user instanceof User) {
        return user.userInfo();
    }
}
//validation checks
type Admin = {
    type: "admin";
    permissions: string[];
}
function isAdmin(obj: any): obj is Admin {
    return(typeof obj==="object" && obj !== null && "type" in obj && obj.type === "admin");
}

function admininfo(itme: Admin |string){
    if(isAdmin(itme)){
        return `Information about admin: ${itme.type} with permissions: ${itme.permissions}`;
    }
    return `Information about user: ${itme}`;
} 

