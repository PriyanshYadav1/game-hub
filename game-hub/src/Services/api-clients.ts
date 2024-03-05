import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "20c007557801401299121a4d5047c5f5",
  },
});
