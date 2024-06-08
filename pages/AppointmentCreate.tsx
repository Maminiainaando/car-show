import React from 'react';
import { Create, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const AppointmentCreat: React.FC = (props) => (
    <Create {...props}>
        <SimpleForm>
            <NumberInput source="idCar" label="idCar" />
            <TextInput source="name" />
            <TextInput source="firstName" />
            <TextInput source="email" />
            <TextInput source="message" />
            <TextInput source="contact" />
        </SimpleForm>
    </Create>
);