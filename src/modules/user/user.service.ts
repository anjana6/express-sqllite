import { ApplicationError } from "../../utils/ApplicationError";
import { UserNotFoundError } from "./user.error";

export const fetchUsers = async() => {
    console.log('aaaaaaaaaaaaaaaaa')
    const user = {name: 'anjana'}



    return user;
}

export const createUser = (user:any) => {
    return user
}