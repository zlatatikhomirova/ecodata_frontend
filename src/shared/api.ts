import axios from "axios";

const axiosInstance = axios.create();

class BaseQueryService {
    resource;
    constructor(resource: string) {
        this.resource = resource;
    }

    static getList() {
        return axiosInstance.get(this.resource);
    }

    static getOne(id: string) {
        return axiosInstance.get(`${this.resource}/${id}`);
    }
}