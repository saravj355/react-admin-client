import React from 'react';
import { Edit, SimpleForm, TextInput } from 'react-admin';

const EditUser = (props) => {
    return (
        <Edit title="Edit User" {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="name" />
                <TextInput source="email" />
                <TextInput source="phone" />
                <TextInput source="website" />
                <TextInput source="company.name" />
            </SimpleForm>
        </Edit>
    );
};

export default EditUser;
