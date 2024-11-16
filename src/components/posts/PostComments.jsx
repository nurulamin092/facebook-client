import { useState } from "react";
import { useAvatar } from "../../hooks";
import PostCommentList from "./PostCommentList";

const PostComments = ({ post }) => {
  const [showCommentsAction, setShowCommentsActions] = useState(false);
  const { avatarUrl } = useAvatar(post);

  return (
    <>
      {" "}
      <div>
        <div className="flex-center mb-3 gap-2 lg:gap-4">
          <img
            className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
            src={avatarUrl}
            alt="avatar"
          />

          <div className="flex-1">
            <input
              type="text"
              className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
              name="post"
              id="post"
              placeholder="What's on your mind?"
            />
          </div>
        </div>

        <div className="mt-4">
          <button
            className="text-gray-300 max-md:text-sm"
            onClick={() => setShowCommentsActions(!showCommentsAction)}
          >
            All Comment ▾
          </button>
        </div>
        {showCommentsAction && <PostCommentList comments={post?.comments} />}
      </div>
    </>
  );
};

export default PostComments;
