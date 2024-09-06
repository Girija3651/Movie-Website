import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        "Content-Type": "application/json"
    },
});

instance.interceptors.request.use(
    (config) => {
        // TODO: Utilize environment variables. Using throwaway account for now.
        config.headers["Authorization"] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjI2M2EyZWYzYmIwMzNkZjkyYTNiM2U1NThiN2Y0OCIsInN1YiI6IjY1YWZmN2JkMDljMjRjMDBjYWFmOWRiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mGFNASQ77QsTzDZIBgrSXfHsKplbZ6NL3alBK1E_cPw`;
        return config;
    },
    (error) => {
        console.log("REQUEST ERROR")
        return Promise.reject(error);
    }
)

export default instance;