
//    creating Interface of user 
export interface IUser {
    id : number ;
    role : 'student';
    name : {
        firstName : string ;
        middleName? : string ;
        lastName? : string 
    };
    gender : 'male' | 'female';
    email?:string ;
    birthDate?: string ;
    presentAddress : string ;
    permanentAddress : string ;
    emergencyContact: number
};