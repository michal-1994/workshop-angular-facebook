import { Post } from "../app/posts/interfaces/post.interface";
import { userFactory } from './user.factory';

export function postFactory(): Post {
    return {
        id: 'fake-id',
        createdTime: 'fake-',
        author: userFactory(),
        body: 'fake-body',
        images: [],
    }
}