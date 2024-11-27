import React from 'react';
import '../component/User.css'

function User({ users }) {
  return (
    <div>
      <h1>User Lists</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Number</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default User;
