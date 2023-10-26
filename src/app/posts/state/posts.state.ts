import { Post } from "src/app/models/posts.model"

export interface PostsState {
    posts: Post[];
}

export const initialState: PostsState = {
   posts: [
    {
        id: '1',
        title: 'Sample title 1',
        description: 'Sample Description 1'
    },
    {
        id: '1',
        title: 'Sample title 1',
        description: 'Sample Description 1'
    },
   ] 
}