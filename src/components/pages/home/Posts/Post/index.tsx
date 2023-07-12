import {PostItem} from "./styled.ts";
import {RBox} from "../../../../RBox";

export const Post = ({post}: any) => {
    const {id,title, body} = post;

    return (
        <RBox>
            <PostItem>
                Post {id}
                {title}{body}
            </PostItem>
        </RBox>
    )
}