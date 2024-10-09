import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); 

  const API_URL = process.env.REACT_APP_API_URL;

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const addUser = async (userData) => {
    try {
      const response = await axios.post(`${API_URL}`, userData);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const updateUser = async (id, updatedData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, updatedData);
      setUsers(users.map(user => (user._id === id ? response.data : user)));
      setEditingUser(null); 
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user); 
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>User Management</h1>
      <UserForm addUser={addUser} updateUser={updateUser} editingUser={editingUser} setEditingUser={setEditingUser} />
      <UserList users={users} deleteUser={deleteUser} handleEdit={handleEdit} />
    </div>
  );
}

export default App;
