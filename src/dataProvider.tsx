"use client";
import { 
    CreateParams, CreateResult, DataProvider, DeleteManyParams, DeleteManyResult, DeleteParams, DeleteResult, 
    GetManyParams, GetManyReferenceParams, GetManyReferenceResult, GetManyResult, GetOneParams, GetOneResult, 
    Identifier, RaRecord, UpdateManyParams, UpdateManyResult, UpdateParams, UpdateResult, fetchUtils 
} from "react-admin";

const apiURL = "http://localhost:8080";
const httpClient = fetchUtils.fetchJson;

const dataProvider: DataProvider = {
    getList: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const url = `${apiURL}/${resource}?_page=${page}&_limit=${perPage}&_sort=${field}&_order=${order}`;
        const response = await httpClient(url);
        return {
            data: await response.json,
            total: parseInt(response.headers.get("x-total-count") || '0', 10),
        };
    },
    
    getOne: async (resource, params) => {
        const url = `${apiURL}/${resource}/${params.id}` ;
        const response = await httpClient(url);
        return {
            data: await response.json,
        };
    },
    
    getMany: async (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiURL}/${resource}?${fetchUtils.queryParameters(query)}`;
        const response = await httpClient(url);
        return {
            data: await response.json,
        };
    },
    
    getManyReference: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiURL}/${resource}?${fetchUtils.queryParameters(query)}`;
        const response = await httpClient(url);
        return {
            data: await response.json,
            total: parseInt(response.headers.get("x-total-count") || '0', 10),
        };
    },
    
    update: async (resource, params) => {
        const url = `${apiURL}/${resource}/${params.id}`;
        const options = {
            method: 'PUT',
            body: JSON.stringify(params.data),
        };
        const response = await httpClient(url, options);
        return {
            data: await response.json,
        };
    },
    
    updateMany: async (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiURL}/${resource}?${fetchUtils.queryParameters(query)}`;
        const options = {
            method: 'PUT',
            body: JSON.stringify(params.data),
        };
        const response = await httpClient(url, options);
        return {
            data: await response.json,
        };
    },
    
    create: async (resource, params) => {
        const url = `${apiURL}/${resource}`;
        const options = {
            method: 'POST',
            body: JSON.stringify(params.data),
        };
        const response = await httpClient(url, options);
        return {
            data: await response.json,
        };
    },
    
    delete: async (resource, params) => {
        const url = `${apiURL}/${resource}/${params.id}`;
        const options = {
            method: 'DELETE',
        };
        const response = await httpClient(url, options);
        return {
            data: await response.json,
        };
    },
    
    deleteMany: async (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiURL}/${resource}?${fetchUtils.queryParameters(query)}`;
        const options = {
            method: 'DELETE',
        };
        const response = await httpClient(url, options);
        return {
            data: await response.json,
        };
    }
};

export default dataProvider;
