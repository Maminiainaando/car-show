"use client"
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { AdminList } from '../../../components/List/AdminList';
import { AdminShow } from '../../../components/Show/ShowAdmin';
import { AdminEdit } from '../../../components/Edit/AdminEdit';
import { CarList } from '../../../components/List/CarList';
import { ShowCar } from '../../../components/Show/ShowCar';
import { CarEdit } from '../../../components/Edit/CarEdit';
import { ImageList } from '../../../components/List/ImageList';
import { ImageShow } from '../../../components/Show/ImageShow';
import { ImageEdit } from '../../../components/Edit/ImageEdit';
import {AppointementList} from '../../../components/List/AppointementList';
const dataProvider = jsonServerProvider("http://localhost:8080");
const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource 
       name="admin"
       list={AdminList}
       show={AdminShow}
       edit={AdminEdit}
       recordRepresentation="name"
       />
      <Resource 
       name="car"
       list={CarList}
       show={ShowCar}
       edit={CarEdit}
       recordRepresentation="name"
       />
      <Resource 
       name="allAppointement"
       list={AppointementList}
      />
      <Resource 
       name="image"
       list={ImageList}
       show={ImageShow}
       edit={ImageEdit}
       recordRepresentation="name"
       />
    </Admin>
  );
};

export default App;

