import React from 'react';
import {
    Datagrid,
    DeleteButton,
    EditButton,
    EmailField,
    List,
    TextField,
} from 'react-admin';
import MyUrlField from '../other/MyUrlField';

const ListUsers = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" />
                <EmailField source="email" />
                <TextField source="phone" />
                <MyUrlField source="website" />
                <TextField source="company.name" />
                <EditButton basePath="/users" />
                <DeleteButton basePath="/users" />
            </Datagrid>
        </List>
    );
};

export default ListUsers;
