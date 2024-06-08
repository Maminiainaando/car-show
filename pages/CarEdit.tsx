// CarEdit.tsx
import React from 'react';
import { Edit, SimpleForm, NumberInput, TextInput } from 'react-admin';

const CarEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
             <NumberInput  source="idCar" />
            <TextInput source="carName" />
            <TextInput source="model" />
            <NumberInput source="price" />
            <TextInput source="url" /> 
            <TextInput source="status" />
        </SimpleForm>
    </Edit>
);

export default CarEdit;
