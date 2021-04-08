import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

const PostList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="Id" />
        <TextField source="Title" />
        <DateField source="Published At" />
        <EditButton basePath="/posts" />
        <DeleteButton basePath="/posts" />
      </Datagrid>
    </List>
  );
};

export default PostList;

