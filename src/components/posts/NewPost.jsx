import { useState } from "react";
import { useAuth } from "../../hooks";
import PostEntry from "./PostEntry";
const NewPost = () => {
  const [showPostEntry, setPostEntry] = useState(false);
  const { auth } = useAuth();
  return (
    <>
      {showPostEntry ? (
        <PostEntry onCreate={() => setPostEntry(false)} />
      ) : (
        <div className="card">
          <div className="flex-center mb-3 gap-2 lg:gap-4">
            <img
              className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
              src={`${import.meta.env.VITE_SERVER_BASE_URL}/${
                auth?.user?.avatar
              }`}
              alt="avatar"
            />

            <div className="flex-1">
              <textarea
                onClick={() => setPostEntry(true)}
                className="h-16 w-full rounded-md bg-lighterDark p-3 focus:outline-none sm:h-20 sm:p-6"
                name="post"
                id="post"
                placeholder="What's on your mind?"
              ></textarea>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewPost;
