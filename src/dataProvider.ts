 import jsonServerProvider from "ra-data-json-server";

 export const dataProvider = jsonServerProvider("http://localhost:8000/data.json");


// import fakeRestDataProvider from "ra-data-json-server";
// import data from "./data.json";

// export const dataProvider = fakeRestDataProvider(data);
