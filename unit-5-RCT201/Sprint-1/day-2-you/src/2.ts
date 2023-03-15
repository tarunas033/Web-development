
type User = {
    firstName: string;
    lastName: string;
}

function getName(user: User): string {
       return `${user.firstName} ${user.lastName}`;
}
   const user:User ={
    firstName: "Taruna",
    lastName: "Sharma"
   }

   const userFullName = getName(user);