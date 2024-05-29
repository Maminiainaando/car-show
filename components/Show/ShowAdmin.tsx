import {EmailField, Show, SimpleShowLayout, TextField } from 'react-admin';
import { Email, Password } from "@mui/icons-material";
export const AdminShow = () => (
    <Show>
        <SimpleShowLayout>
            <Email color="secondary"/>
            <EmailField source="email" />
            <Password color="secondary" />
            <TextField source="password" />
        </SimpleShowLayout>
    </Show>
);