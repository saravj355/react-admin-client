import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import jsonServerProvider from 'ra-data-json-server';
import React from 'react';
import { Admin, Resource } from 'react-admin';
import Dashboard from './components/App';
import Authentication from './components/Login';
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
        <Admin
            dashboard={Dashboard}
            authProvider={Authentication}
            dataProvider={dataProvider}
        >
            <Resource
                name="users"
                list={ListUsers}
                create={CreateUser}
                edit={EditUser}
                icon={UserIcon}
            />
            <Resource
                name="posts"
                list={ListPosts}
                create={CreatePost}
                edit={EditPost}
                icon={PostIcon}
            />
        </Admin>
    );
}

export default App;
