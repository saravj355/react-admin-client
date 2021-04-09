import React from 'react';
import {
    Edit,
    ReferenceField,
    SimpleForm,
    TextField,
    TextInput,
} from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Post: {record ? `"${record.title}"` : ''}</span>;
};

const PostEdit = (props) => {
    return (
        <Edit title={<PostTitle />} {...props}>
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
