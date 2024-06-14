import React from "react";
import { Edit, SimpleForm, NumberInput, TextInput } from 'react-admin';

const AppointmentEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="idCar" />
            <TextInput source='status' />
        </SimpleForm>
    </Edit>
);

export default AppointmentEdit;