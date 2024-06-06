import { Email, Password } from "@mui/icons-material";
import {List,Datagrid,TextField,EmailField, NumberField} from "react-admin";
export const StationList =()=>(
    <List>
        <Datagrid rowClick="edit">
            <NumberField source="idStation"></NumberField>
            <TextField source="location_station"></TextField>
            <TextField source="system_station"></TextField>
            <TextField source="stationName"></TextField>
        </Datagrid>
    </List>
);