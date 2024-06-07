import {EmailField, Show, SimpleShowLayout, TextField } from 'react-admin';
import { Email, Password } from "@mui/icons-material";
export const AdminShow = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="id" />
            <TextField source="name"></TextField>
            <TextField source="email"></TextField>
            <TextField source="passord"></TextField>
        </SimpleShowLayout>
    </Show>
);