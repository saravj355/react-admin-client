import React from 'react';
import {
    Datagrid,
    DeleteButton,
    EditButton,
    List,
    ReferenceField,
    TextField,
} from 'react-admin';
import PostFilter from './PostFilter';

const ListPosts = (props) => {
    return (
        <List filters={<PostFilter />} {...props}>
            <Datagrid>
                <TextField source="id" />
                <ReferenceField source="userId" reference="users">
                    <TextField source="name" />
                </ReferenceField>
                <TextField source="title" />
                <EditButton basePath="/posts" />
                <DeleteButton basePath="/posts" />
            </Datagrid>
        </List>
    );
};

export default ListPosts;
