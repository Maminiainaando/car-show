import { BrandingWatermark, CarRental, Colorize, Description, Mode, Monitor, Place, Power, PriceChange, QueryStatsOutlined, TypeSpecimen } from "@mui/icons-material";
import { Edit, SimpleForm, TextInput } from 'react-admin';

export const CarEdit = () => (
    <Edit>
        <SimpleForm>
            <CarRental  color="secondary" />
            <TextInput source="name"></TextInput>
            <Description  color="secondary"/>
            <TextInput source="description"></TextInput>
            <BrandingWatermark  color="secondary" />
            <TextInput source="Brand"></TextInput>
            <Mode  color="secondary" />
            <TextInput source="Model"></TextInput>
            <PriceChange  color="secondary" />
            <TextInput source="Price"></TextInput>
            <Colorize  color="secondary" />
            <TextInput source="Color"></TextInput>
            <Monitor  color="secondary" />
            <TextInput source="Motor Type"></TextInput>
            <Power  color="secondary" />
            <TextInput source="Power"></TextInput>
            <Place  color="secondary" />
            <TextInput source="Place number"></TextInput>
            <QueryStatsOutlined  color="secondary" />
            <TextInput source="Status"></TextInput>
            <TypeSpecimen  color="secondary" />
            <TextInput source="Type"></TextInput>
        </SimpleForm>
    </Edit>
);