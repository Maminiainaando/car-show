import { Email, Password } from "@mui/icons-material";
import {List,Datagrid,TextField,EmailField,NumberField} from "react-admin";
export const AppointementList =()=>(
    <List>
        <Datagrid rowClick="edit">
            <NumberField source="id"></NumberField>
            <TextField source="name"></TextField>
            <TextField source="firstName"></TextField>
            <EmailField source="email"></EmailField>
            <TextField source="contact"></TextField>
            <TextField source="message"></TextField>
            <TextField source="appointementDate"></TextField>
            <TextField source="status"></TextField>
            <NumberField source="idCar"></NumberField>
        </Datagrid>
    </List>
);