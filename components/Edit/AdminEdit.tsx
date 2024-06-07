import { Edit, SimpleForm, TextInput } from 'react-admin';
import { Email, Password } from "@mui/icons-material";
export const AdminEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberField source="id"></NumberField>
            <TextField source="name"></TextField>
            <TextField source="email"></TextField>
            <TextField source="passord"></TextField>
        </SimpleForm>
    </Edit>
);