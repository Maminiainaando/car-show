import React from 'react';
import styles from "./styl.module.css";
import { List, Datagrid, TextField, NumberField } from 'react-admin';

const AppointmentList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit" id={styles.container}>
            <NumberField source="id" label="idCar" id={styles.jaune} />
            <TextField source="name" id={styles.jaune} />
            <TextField source="firstName" id={styles.jaune} />
            <TextField source="email" id={styles.jaune} />
            <TextField source="message" id={styles.jaune} />
            <TextField source="contact" id={styles.jaune} />
            <TextField source='appointmentDate' id={styles.jaune} />
            <TextField source='status' id={styles.jaune} />
        </Datagrid>
    </List>
);

export default AppointmentList;