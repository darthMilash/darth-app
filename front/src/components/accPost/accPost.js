import "./accPost.css";

export function AccPost({ authorPost, verified, content, date }) {
    return (
        <div className="post">
            <div className="authorPost">{authorPost}</div>
            <div className="verified">{verified}</div>
            <div className="contentPost">{content}</div>
            <div className="datePost">{date}</div>
        </div>
    );
}

