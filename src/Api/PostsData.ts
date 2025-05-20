import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});


export const GetPost = async () => {
  const res = api.get("/posts");
  return (await res).data;
};

export const deletePost = async (id:Number)=>{
        return api.delete(`/posts/${id}`)

}