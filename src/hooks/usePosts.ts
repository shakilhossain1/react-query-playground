import {
  keepPreviousData,
  useInfiniteQuery,
} from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  const fetchPosts = ({ pageParam = 1 }) =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _start: (pageParam - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);

  return useInfiniteQuery({
    queryKey: ["posts", query],
    queryFn: fetchPosts,
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage, pages) =>
      lastPage.length > 0 ? pages.length + 1 : undefined,
    initialPageParam: 1,
  });
};

export default usePosts;
