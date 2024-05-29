import { Edit, SimpleForm, TextInput } from 'react-admin';
import { Email, Password } from "@mui/icons-material";
export const AdminEdit = () => (
    <Edit>
        <SimpleForm>
            <Email color="secondary"/>
            <TextInput source="email" />
            <Password color="secondary" />
            <TextInput source="password" />
        </SimpleForm>
    </Edit>
);