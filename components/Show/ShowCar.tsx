import { BrandingWatermark, CarRental, Colorize, Description, Mode, Monitor, Place, Power, PriceChange, QueryStatsOutlined, TypeSpecimen } from "@mui/icons-material";
import {TextField,Show,SimpleShowLayout,NumberField} from "react-admin";
export const ShowCar = () => (
    <Show>
        <SimpleShowLayout>
            <NumberField source="id"></NumberField>
            <TextField source="carName"></TextField>
            <TextField source="model"></TextField>
            <NumberField source="price"></NumberField>
            <TextField source="color"></TextField>
            <TextField source="motorType"></TextField>
            <TextField source="power"></TextField>
            <NumberField source="placeNumber"></NumberField>
            <TextField source="status"></TextField>
            <TextField source="typeCar"></TextField>
            <TextField source="Type"></TextField>
        </SimpleShowLayout>
    </Show>
);