import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admindata = () => {
    const [admin, setAdmin] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3004/form/data')
            .then(result => setAdmin(result.data))
            .catch(err => console.log(err));
    }, []);
    const handleAccept = (id) => {
        axios.patch('http://localhost:3004/form/accept/${id}')
            .then(res => {
                setAdmin(admin.map(item => item._id === id ? { ...item, status: 'Accepted' } : item));
            })
            .catch(err => console.log(err));
    };

    const handleReject = (id) => {
        axios.patch('http://localhost:3004/form/reject/${id}')
            .then(res => {
                setAdmin(admin.map(item => item._id === id ? { ...item, status: 'Rejected' } : item));
            })
            .catch(err => console.log(err));
    };


    
    const buttonStyle = {
        padding: '5px 10px',
        border: 'none',
        borderRadius: '5px',
        color: 'white',
        cursor: 'pointer'
    };

    const acceptButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'green'
    };

    const rejectButtonStyle = {
        ...buttonStyle,
        backgroundColor: 'red'
    };

    return (
        <div className='back'>
            <div className='back'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Fullname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Mobileno</th>
                            <th>Fromaddress</th>
                            <th>Toaddress</th>
                            <th>Accept/Reject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admin.map((adminItem) => (
                            <tr key={adminItem._id}>
                                <td>{adminItem.fullname}</td>
                                <td>{adminItem.lastname}</td>
                                <td>{adminItem.email}</td>
                                <td>{adminItem.mobileno}</td>
                                <td>{adminItem.fromaddress}</td>
                                <td>{adminItem.toaddress}</td>
                                <td>
                                <button style={acceptButtonStyle} onClick={() => handleAccept(adminItem._id)}>Accept</button>
                                <button style={rejectButtonStyle} onClick={() => handleReject(adminItem._id)}>Reject</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admindata;