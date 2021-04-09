import jsonServerProvider from 'ra-data-json-server';
import React from 'react';
import { Admin, Resource } from 'react-admin';
import CreateUser from './components/User/CreateUser';
import UserList from './components/User/ListUser';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
function App() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="users" list={UserList} create={CreateUser} />
        </Admin>
    );
}

export default App;
