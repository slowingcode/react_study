import React from "react";
import Comment from "./Comment";

function CommentList(props) {
  return (
    <div>
      <Comment name={"김철수"} comment={"안녕하세요, 수플입니다."} />
      <Comment name={"콩진호호"} comment={"안녕하세요. 안녕하세요요."} />
    </div>
  );
}

export default CommentList;
