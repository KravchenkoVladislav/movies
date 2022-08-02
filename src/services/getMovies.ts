import axios, {AxiosResponse} from "axios";

const getMovies = (category: string): Promise<AxiosResponse> => axios.get(`https://api.tvmaze.com/search/shows?q=${category}`);

export default getMovies;