import PostAction from "./PostAction";
import PostBody from "./PostBody";
import PostComments from "./PostComments";
import PostHeaders from "./PostHeaders";

const PostCard = ({ post }) => {
  return (
    <>
      <article className="card mt-6 lg:mt-8">
        <PostHeaders post={post} />

        <PostBody poster={post?.image} content={post?.content} />
        <PostAction post={post} commentCount={post?.comments?.length} />

        <PostComments post={post} />
      </article>
    </>
  );
};

export default PostCard;
