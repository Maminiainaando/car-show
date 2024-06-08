// in src/components/AdminApp.tsx
"use client";
import React from 'react';
import { Admin, Resource } from 'react-admin';
import CarsList from './cars';
import customDataProvider from './customDataProvider';
import { CarsCreate } from './CarsCreate';
import CarEdit from './CarEdit';
import AppointmentList from './Appointment';
import { AppointmentCreat } from './AppointmentCreate';
import style from './styl.module.css';
import Link from 'next/link';


const AdminApp: React.FC = () => (
  <><Admin dataProvider={customDataProvider}>
    <Resource
      name="allCar"
      list={CarsList}
      create={CarsCreate}
      edit={CarEdit} />
    <Resource
      name="allAppointment"
      list={AppointmentList}
      create={AppointmentCreat} />

  </Admin>
    <Link href="/LoginPage">
      <button id={style.Logout}>Logout</button>
    </Link>
  </>
);

export default AdminApp;
