import { useQuery } from "@tanstack/react-query";
import { GetPost } from "../Api/data";
import { Loader } from "../components/Loader";
import { Post } from "../Types/Types";

export default function About() {

  const { data:posts = [],  isLoading, isError} = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: GetPost,
  });

  if (isLoading) return <Loader/>;
  if (isError) return <p>Failed to load posts.</p>;



  return (
 <div className="container-gradient flex justify-center items-center">
     <div className="p-5">
      <h1 className="text-2xl text-white font-bold mb-4">Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border border-white rounded-xl shadow">
            <h2 className="text-xl text-white font-semibold">{post.title}</h2>
            <p className="text-white">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}
