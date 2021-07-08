import { useQuery } from "react-query";
import axios from "axios";

const fetchError = async () => {
  const instance = axios.create({
    baseURL: "http://localhost:8080",
  });
  return await instance.get("/error");
};

export function Error() {
  const { data, isLoading, error } = useQuery("error", fetchError, {
    onError: (error) => console.log(error.response),
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        <h1>Status Code: {error.response.status}</h1>
        <h2>{error.response.data.message}</h2>
      </div>
    );
  }
  return <div>Oops!</div>;
}
