"use client";
import {Admin,Resource,ListGuesser,EditGuesser} from "react-admin";
import jsonServerProvider from "ra-data-json-server";

 const dataProvider=jsonServerProvider('http://localhost:8080/station/');

 const AdminApp=() =>(
     <Admin dataProvider={dataProvider}>
       <Resource
       name="station"
       list={ListGuesser}
       edit={EditGuesser}
       recordRepresentation="name"
       />
       {/* <Resource
       name="posts"
       list={ListGuesser}
       edit={EditGuesser}
       recordRepresentation="title"
       />
       <Resource
        name="comments" 
        list={ListGuesser} 
        edit={EditGuesser} /> */}
     </Admin>
 );

 export default AdminApp;

