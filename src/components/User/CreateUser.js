import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

const UserCreate = (props) => {
    return (
        <Create title="Create an user" {...props}>
            <SimpleForm>
                <TextInput source="name" />
                <TextInput source="email" />
                <TextInput source="phone" />
                <TextInput source="website" />
                <TextInput source="company.name" />
            </SimpleForm>
        </Create>
    );
};

export default UserCreate;
