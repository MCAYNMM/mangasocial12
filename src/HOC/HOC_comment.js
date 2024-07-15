import React, { useEffect, useRef, useState } from "react";
const WithComment = (WrappedComponent) => {
  return function WithCommentComponent(props) {
    const { cmt } = props;
    const scrollRef = useRef(null);
    const [viewReply, setViewReply] = useState(false);
    const renderMoreItems = 3;
    const [loading, setLoading] = useState(false);
    

    return (
      <WrappedComponent
        {...props}
      />
    );
  };
};

export default WithComment;