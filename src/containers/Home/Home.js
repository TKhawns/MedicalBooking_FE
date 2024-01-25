import './Home.scss';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../services/userService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
function Home() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function getAllUsersFromService() {
            let response = await getAllUsers('ALL');
            if (response || response.errCode === 0) {
                setUsers(response.users);
            }
            console.log(response);
        }
        getAllUsersFromService();
    }, []);
    return (
        <div>
            <div className="text-center">Manage Users Account</div>
            <div className="users-table mt-3 mx-3">
                <table id="customers">
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>

                        {users &&
                            users.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <button className="btn-edit">
                                                <FontAwesomeIcon icon={faPenToSquare} />
                                            </button>
                                            <button className="btn-delete">
                                                <FontAwesomeIcon icon={faTrashCan} />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
