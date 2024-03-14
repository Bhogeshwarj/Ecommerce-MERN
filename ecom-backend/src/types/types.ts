// used to create api and type


export interface NewUserRequestBody{
    name: string;
    email: string;
    password: string;
    role: string;
    photo: string;
    dob: Date;
    _id: string;
    gender:string;
}