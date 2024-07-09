// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// const Status = () => {
//     const location = useLocation();
//   const loggedInUserEmail = location.state?.email;
//   const [admin, setAdmin] = useState([]);

//   useEffect(() => {
//     if (loggedInUserEmail) {
//       axios.get('http://localhost:3004/form/data/${loggedInUserEmail}')
//         .then(result => {
//           setAdmin(result.data);
//         })
//         .catch(err => console.log(err));
//     }
//   }, [loggedInUserEmail]);
//   return (
//     <div className='back'>
//     <div className='back'>
//         <table className='table'>
//             <thead>
//                 <tr>
//                     <th>Fullname</th>
//                     <th>Lastname</th>
//                     <th>Email</th>
//                     <th>Mobileno</th>
//                     <th>Fromaddress</th>
//                     <th>Toaddress</th>
//                     <th>Status</th>
                    
//                 </tr>
//             </thead>
//             <tbody>
//                 {admin.map((adminItem) => (
//                     <tr key={adminItem._id}>
//                         <td>{adminItem.fullname}</td>
//                         <td>{adminItem.lastname}</td>
//                         <td>{adminItem.email}</td>
//                         <td>{adminItem.mobileno}</td>
//                         <td>{adminItem.fromaddress}</td>
//                         <td>{adminItem.toaddress}</td>
//                         <td>{adminItem.status}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </div>
// </div>
//   )
// }

// export default Status
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Status = () => {
  const location = useLocation();
  const loggedInUserEmail = location.state?.email;
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    if (loggedInUserEmail) {
      axios.get(`http://localhost:3004/form/data/${loggedInUserEmail}`)
        .then(result => {
          setAdmin(result.data);
        })
        .catch(err => console.log(err));
    }
  }, [loggedInUserEmail]);

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
              <th>Status</th>
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
                <td>{adminItem.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Status;
