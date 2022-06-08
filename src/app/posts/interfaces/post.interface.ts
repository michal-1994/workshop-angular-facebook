import { User } from "./user.interface";

export interface Post {
    author: User,
    body: string,
    createdTime: string,
    id: string, 
    images: string[]
}