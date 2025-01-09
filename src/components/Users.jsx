import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)



    const handleDelete = (id) => {
        Swal.fire({
          title: `Are you sure you want to delete the user?`,
          text: "This action cannot be undone!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/users/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.acknowledged) {
                  Swal.fire(
                    "Deleted!",
                    `User has been deleted successfully.`,
                    "success"
                  );
                  const remaining = users.filter(c=> c._id !== id)
                  setUsers(remaining)
                } else {
                  Swal.fire("Failed!", "Unable to delete the user.", "error");
                }
              })
              .catch((error) => {
                console.error("Error deleting user:", error);
                Swal.fire("Error!", "Something went wrong. Please try again.", "error");
              });
          }
        });
      };



    return (
        <div>

            <h2>Loaded Users {loadedUsers.length} </h2>
            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user=> <tr key={user._id}>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                            <td onClick={()=>handleDelete(user._id)} className='btn bg-red-300'>Delete</td>
                        </tr>)
                    }
                </tbody>
            </table>
            
        </div>
    );
};

export default Users;