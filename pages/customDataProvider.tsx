import { fetchUtils, DataProvider } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { CreateParams, CreateResult, UpdateParams, UpdateResult, GetOneParams, GetOneResult } from 'ra-core';
import { headers } from 'next/headers';
import { json } from 'stream/consumers';

const httpClient = fetchUtils.fetchJson;
const dataProvider = jsonServerProvider('http://localhost:8080', httpClient);

const customDataProvider: DataProvider = {
    ...dataProvider,
    create: (resource: string, params: CreateParams): Promise<CreateResult> => {

        if (resource === 'allCar') {
            const url = 'http://localhost:8080/carAdd';
            const options = {
                method: 'POST',
                body: JSON.stringify(params.data),
                headers: new Headers({ 'Content-Type': 'application/json' }),
            };
            return httpClient(url, options).then(({ json }) => ({ data: json }));

        } else if (resource === 'allAppointment') {
            const url = 'http://localhost:8080/addAppointment';
            const options = {
                method: 'POST',
                body: JSON.stringify(params.data),
                headers: new Headers({ 'Content-Type': 'application/json' }),
            };
            return httpClient(url, options).then(({ json }) => ({ data: json }));
        }

        return dataProvider.create(resource, params);
    },
    update: (resource: string, params: UpdateParams): Promise<UpdateResult> => {
        if (resource === 'allCar') {
            const url = 'http://localhost:8080/changeStatusCar';
            const options = {
                method: 'POST',
                body: JSON.stringify(params.data),
                headers: new Headers({ 'Content-Type': 'application/json' }),
            };
            return httpClient(url, options).then(({ json }) => ({ data: json }));
        }
        return dataProvider.update(resource, params);
    },
    getOne: (resource: string, params: GetOneParams): Promise<GetOneResult> => {
        if (resource === 'allCar') {
            const url = `http://localhost:8080/allCar/${params.id}`;
            return httpClient(url).then(({ json }) => ({ data: json.data }));
        }
        return dataProvider.getOne(resource, params);
    }
};

export default customDataProvider;
