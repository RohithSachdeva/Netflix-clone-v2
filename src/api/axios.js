import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;

// Api v3 393966212dde1f8752eb35830b4db0bd
// https://github.com/axios/axios
