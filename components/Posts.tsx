import { List, Table, TextField } from '@pankod/refine-react-admin';

export const PostList: React.FC = () => {
    return (
        <List>
            <Table>
                <TextField source="id" title="ID" />
                <TextField source="title" title="Titre" />
                <TextField source="content" title="Contenu" />
            </Table>
        </List>
    );
};
