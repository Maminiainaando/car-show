//CarsCreate.tsx
import React from 'react';
import { Create, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const CarsCreate: React.FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="carName" />
      <TextInput source="model" />
      <TextInput source='typeCar' />
      <NumberInput source='placeNumber' />
      <TextInput source='color' />
      <NumberInput source="price" />
      <TextInput source="url" />
    </SimpleForm>
  </Create>
);
