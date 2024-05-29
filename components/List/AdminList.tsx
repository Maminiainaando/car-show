import { Email, Password } from "@mui/icons-material";
import {List,Datagrid,TextField,EmailField} from "react-admin";
export const AdminList =()=>(
    <List>
        <Datagrid rowClick="edit">
            <Email color="secondary"/>
            <EmailField source="email"></EmailField>
            <Password color="secondary" />
            <TextField source="password"></TextField>
        </Datagrid>
    </List>
);