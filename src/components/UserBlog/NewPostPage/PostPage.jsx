import React from "react";
import {PostPageHeader} from "./PostPageHeader";

const PostPage = ({type}) => {
    return(
        <PostPageHeader type={type} onClose={onclose}  />
    )
}
