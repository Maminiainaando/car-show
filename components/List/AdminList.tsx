import {List,Datagrid,TextField,NumberField} from "react-admin";
export const AdminList =()=>(
    <List>
        <Datagrid rowClick="edit">
            <NumberField source="id"></NumberField>
            <TextField source="name"></TextField>
            <TextField source="email"></TextField>
            <TextField source="passord"></TextField>
        </Datagrid>
    </List>
);