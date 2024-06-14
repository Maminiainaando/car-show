import React from 'react';
import { List, Datagrid, TextField, NumberField, ListProps, useRecordContext } from 'react-admin';
import Image from 'next/image';
import styles from "./styl.module.css";

const ImageFieldWithNextImage: React.FC<{ source: string }> = ({ source }) => {
    const record = useRecordContext();
    if (!record) return null;

    const transformUrl = (url: string): string => {
        const match = url.match(/\/d\/([a-zA-Z0-9_-]+)\//);
        if (match) {
            const fileId = match[1];
            return `https://drive.google.com/uc?export=view&id=${fileId}`;
        }
        return url;
    };

    return <Image
        src={transformUrl(record[source])}
        alt={source}
        width={250}
        height={150}
        objectFit='cover'
        style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
    />
};

const CarsList: React.FC<ListProps> = (props) => (
    <List {...props}>
        <Datagrid rowClick="edit" id={styles.container}>
            <NumberField source="id" label="idCar" id={styles.jaune} />
            <TextField source="carName" label="Car Name" id={styles.jaune}  />
            <TextField source="model" label="Model" id={styles.model} />
            <NumberField source="price" label="Price" id={styles.jaune} />
            <ImageFieldWithNextImage source="url" />
            <TextField source="status" label="Status" id={styles.status} />
            <NumberField source="placeNumber" label="Place Number" id={styles.jaune} />
            <TextField source="color" label="Color" id={styles.jaune}/>
            <TextField source="motorType" label="motorType" id={styles.jaune}/>
            <TextField source="typeCar" label="Type Car" id={styles.jaune} />
        </Datagrid>
    </List>
);

export default CarsList;
