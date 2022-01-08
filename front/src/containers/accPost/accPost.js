import {AccPost} from "../../components/accPost/accPost.js";

export function AccPostContainer({ author, handle, verified, content, date}) {
    const authorPost = `${author} @${handle}`;
    return <AccPost authorPost={authorPost}  verified={verified} content={content} date={date}/>;
}