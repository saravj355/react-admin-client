import React from 'react';
import {
    Edit,
    ReferenceField,
    SimpleForm,
    TextField,
    TextInput,
} from 'react-admin';

const PostEdit = (props) => {
    return (
        <Edit title="Edit Post" {...props}>
            <SimpleForm>
                <TextInput disabled source="id" />
                <ReferenceField source="userId" reference="users">
                    <TextField source="name" />
                </ReferenceField>
                <TextInput source="title" />
                <TextInput multiline source="body" />
            </SimpleForm>
        </Edit>
    );
};

export default PostEdit;
