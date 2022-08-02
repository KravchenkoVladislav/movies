import axios, {AxiosResponse} from "axios";

const getId = (id: string): Promise<AxiosResponse> => axios.get(`https://api.tvmaze.com/shows/${id}`);

export default getId;