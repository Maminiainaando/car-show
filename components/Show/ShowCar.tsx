import { BrandingWatermark, CarRental, Colorize, Description, Mode, Monitor, Place, Power, PriceChange, QueryStatsOutlined, TypeSpecimen } from "@mui/icons-material";
import {TextField,Show,SimpleShowLayout} from "react-admin";
export const ShowCar = () => (
    <Show>
        <SimpleShowLayout>
            <CarRental  color="secondary" />
            <TextField source="name"></TextField>
            <Description  color="secondary" />
            <TextField source="description"></TextField>
            <BrandingWatermark  color="secondary" />
            <TextField source="Brand"></TextField>
            <Mode color="secondary" />
            <TextField source="Model"></TextField>
            <PriceChange color="secondary" />
            <TextField source="Price"></TextField>
            <Colorize color="secondary" />
            <TextField source="Color"></TextField>
            <Monitor color="secondary" />
            <TextField source="Motor Type"></TextField>
            <Power color="secondary" />
            <TextField source="Power"></TextField>
            <Place color="secondary" />
            <TextField source="Place number"></TextField>
            <QueryStatsOutlined color="secondary" />
            <TextField source="Status"></TextField>
            <TypeSpecimen color="secondary" />
            <TextField source="Type"></TextField>
        </SimpleShowLayout>
    </Show>
);