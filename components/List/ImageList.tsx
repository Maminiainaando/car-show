import { Email, Password } from "@mui/icons-material";
import {List,Datagrid,TextField,NumberField} from "react-admin";
export const ImageList =()=>(
    <List>
        <Datagrid rowClick="edit">
            <NumberField source="id"></NumberField>
            <TextField source="url"></TextField>
            <NumberField source="idCar"></NumberField>
        </Datagrid>
    </List>
);