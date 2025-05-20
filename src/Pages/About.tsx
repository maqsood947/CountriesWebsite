import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { deletePost, GetPost } from "../Api/PostsData";
import { Loader } from "../components/Loader";
import { Post } from "../Types/Types";

export default function About() {
  const queryClient = useQueryClient();
  const {
    data: posts = [],
    isLoading,
    isError,
  } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: GetPost,
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deletePost(id),
    onSuccess: (data, id: number) => {
      queryClient.setQueryData<Post[]>(["posts"], (oldPosts) => {
        return oldPosts?.filter((post) => post.id !== id);
      });
    },
  });

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <div className="container-gradient flex justify-center items-center">
        Failed to load posts.
      </div>
    );

  return (
    <div className="container-gradient flex justify-center items-center">
      <div className="p-5">
        <h1 className="text-2xl text-white font-bold mb-4">Posts</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li
              key={post.id}
              className="p-4 border border-white rounded-xl shadow">
              <h2 className="text-xl text-white font-semibold">{post.title}</h2>
              <p className="text-white">{post.body}</p>
              <button
                onClick={() => deleteMutation.mutate(post.id)}
                className="bg-green-600 p-3 rounded-2xl">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
