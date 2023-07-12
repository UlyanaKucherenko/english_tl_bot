import {Post} from "./Post";
import {Wrap} from "./styled.ts";
import {useEffect, useState} from "react";

export interface IPost {
    id: number;
    title: string;
    body: string;
}

export const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data)
                console.log('data', data)
            })
            .catch(error => console.log(error));
    }, [posts])


    return (
        <Wrap>
            {posts.map((post: IPost) => <Post key={post.id} post={post}/>)}
        </Wrap>
    )
}