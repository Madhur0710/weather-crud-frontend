import React from 'react';

function UserList({ users, deleteUser, handleEdit }) {
  return (
    <div className="user-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Location</th>
            <th>Weather</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.city},{user.country}</td>
              <td>{user.weather}</td>
              <td>
                <button className="edit" onClick={() => handleEdit(user)}>Edit</button>
              </td>
              <td>
                <button className='delete' onClick={() => deleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
