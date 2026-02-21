
import { Datagrid, DateField, EmailField, List, TextField } from 'react-admin';

export const CustomerList = () => (
    <List>
        <Datagrid rowClick="show">
            <EmailField source="email" />
            <TextField source="first_name" />
            <TextField source="last_name" />
            <TextField source="phone" />
            <DateField source="created_at" />
        </Datagrid>
    </List>
);
