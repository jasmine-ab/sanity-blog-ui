import useSWR from "swr";
import { getPosts } from "./api/post";

function App() {
  const { data, isLoading } = useSWR("get-post", getPosts);

  return (
    <>
      <h1 className="font-bold text-4xl mb-10">Welcome to my blog</h1>
      <h2 className="font-bold text-3xl mb-5">Posts</h2>
      {isLoading && <p>Loading...</p>}
      <div className="grid grid-cols-5 gap-7">
        {data &&
          data.map((post) => (
            <div className="border p-4 border-gray-300" key={post._id}>
              <p>Title: {post.title}</p>
              <p className="flex items-center gap-3">
                Author: {post.author.name}{" "}
                <img src={post.author.image} className="w-10 h-10 rounded-full" />
              </p>
              <p>Body: {post.body}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
