import React, { useState, useEffect } from 'react';

function UserForm({ addUser, updateUser, editingUser, setEditingUser }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    if (editingUser) {
      setFormData({
        name: editingUser.name,
        age: editingUser.age,
        gender: editingUser.gender,
        phone: editingUser.phone,
        email: editingUser.email
      });
    } else {
      setFormData({
        name: '',
        age: '',
        gender: '',
        phone: '',
        email: ''
      });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingUser) {
      updateUser(editingUser._id, formData);
    } else {
      addUser(formData);
    }

    setFormData({
      name: '',
      age: '',
      gender: '',
      phone: '',
      email: ''
    });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
      <input name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} required />
      <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <button type="submit">{editingUser ? 'Update User' : 'Add User'}</button>
      {editingUser && <button onClick={() => setEditingUser(null)}>Cancel Edit</button>}
    </form>
  );
}

export default UserForm;
