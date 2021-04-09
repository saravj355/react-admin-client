import jsonServerProvider from 'ra-data-json-server';
import React from 'react';
import { Admin, Resource } from 'react-admin';
//Post
import CreatePost from './components/Post/CreatePost';
import EditPost from './components/Post/EditPost';
import ListPosts from './components/Post/ListPosts';
//User
import CreateUser from './components/User/CreateUser';
import EditUser from './components/User/EditUser';
import ListUsers from './components/User/ListUsers';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
function App() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource
                name="users"
                list={ListUsers}
                create={CreateUser}
                edit={EditUser}
            />
            <Resource
                name="posts"
                list={ListPosts}
                create={CreatePost}
                edit={EditPost}
            />
        </Admin>
    );
}

export default App;
