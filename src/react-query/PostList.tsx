import usePosts from "../hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage
  } = usePosts({ pageSize });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <ul className="list-group">
        {posts?.pages.map((page) =>
          page.map((post) => (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          ))
        )}
      </ul>
      <button disabled={isFetchingNextPage} className="btn btn-primary my-3 ms-1" onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? 'Loading...' : 'Load more'}
      </button>
    </div>
  );
};

export default PostList;
