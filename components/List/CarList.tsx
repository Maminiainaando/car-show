import {List,Datagrid,TextField, NumberField} from "react-admin";
export const CarList =()=>(
    <List>
        <Datagrid rowClick="edit">
            <NumberField source="id"></NumberField>
            <TextField source="carName"></TextField>
            <TextField source="model"></TextField>
            <NumberField source="price"></NumberField>
            <TextField source="color"></TextField>
            <TextField source="motorType"></TextField>
            <TextField source="power"></TextField>
            <NumberField source="placeNumber"></NumberField>
            <TextField source="status"></TextField>
            <TextField source="typeCar"></TextField>
            <TextField source="Type"></TextField>
        </Datagrid>
    </List>
);