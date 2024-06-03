"use client"
import React from 'react'
import { Admin,Resource,ListGuesser } from 'react-admin';
import restProvider from "ra-data-simple-rest";
import jsonServer from "ra-data-json-server";
import { GET_LIST } from 'react-admin';
//const parentUrl=restProvider('http://localhost:8080/station/*');
const dataProvider=jsonServer(loadPosts);

function AdminApp() {
    return (
     <Admin dataProvider={dataProvider}>
        <Resource name='station' list={ListGuesser} />
     </Admin>

    )
  // console.log(res)
  // const req= await fetch(`http://localhost:8080/station/*`)
  // const res= req.json();
}
export default AdminApp;

 export async function loadPosts(){
   const res= await fetch('http://localhost:8000/data.json');
   const data = await res.json()
   return data;
 }
// export async function getStaticProps(){
//   const posts=await loadPosts()
//   return {props: {posts}}
// }


