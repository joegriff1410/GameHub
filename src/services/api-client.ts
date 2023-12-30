import axios from 'axios';

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b765fc1fb0a044288aeea5596729a36c',
    },
    headers: {},
});
