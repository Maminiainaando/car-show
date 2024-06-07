import { BrandingWatermark, CarRental, Colorize, Description, Mode, Monitor, Place, Power, PriceChange, QueryStatsOutlined, TypeSpecimen } from "@mui/icons-material";
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const CarEdit = () => (
    <Edit>
        <SimpleForm>
            <NumberField source="id"></NumberField>
            <TextInput source="carName"></TextInput>
            <TextInput source="model"></TextInput>
            <NumberField source="price"></NumberField>
            <TextInput source="color"></TextInput>
            <TextInput source="motorType"></TextInput>
            <TextInput source="power"></TextInput>
            <NumberField source="placeNumber"></NumberField>
            <TextInput source="status"></TextInput>
            <TextInput source="typeCar"></TextInput>
            <TextInput source="Type"></TextInput>
        </SimpleForm>
    </Edit>
);