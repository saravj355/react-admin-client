import React from 'react';
import { Create, DateInput, SimpleForm, TextInput } from 'react-admin';

const PostCreate = (props) => {
    return (
        <Create title="Create a post" {...props}>
            <SimpleForm>
                <TextInput source="title" />
                <TextInput source="boyd" />
                <DateInput label="Published" source="publishedAt" />
            </SimpleForm>
        </Create>
    );
};

export default PostCreate;
