import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    const { _id, img, title, price, email } = bookings;
    const navigate = useNavigate();
    const handleDelete = (id) => {

        const confirmed = confirm('Do you want to delete it?');
        if (confirmed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully')
                    }
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining)
                })
        }

    }
    const handleBookingConfirm = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ status: 'confirm' })


        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Order confirmed')
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const update = bookings.find(booking => booking._id === id);
                    update.status = 'confirm'
                    const newBookings = [update, ...remaining];
                    setBookings(newBookings)
                }
            })
    }
    // getting bookings services from DB using email as query
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `BEARER ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (!data.error) {
                    setBookings(data)
                } else {
                    navigate('/')
                }
            })
    }, [])
    return (
        <div>
            <h1 className='text-3xl text-center mb-12'>My bookings: {bookings?.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full mb-12">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    Delete
                                </label>
                            </th>
                            <th>Service Image</th>
                            <th>Service Name</th>
                            <th>User email</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <tr key={booking._id}>
                                <th>
                                    <button onClick={() => handleDelete(booking._id)} className="btn btn-circle btn-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="w-24 rounded">
                                                {
                                                    booking?.img && <img src={booking.img} alt="Avatar Tailwind CSS Component" />
                                                }
                                            </div>

                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {booking.title}

                                </td>
                                <td>{booking.email}</td>
                                <td className='text-orange-400 font-semibold'>$ {booking.price}</td>
                                <th>
                                    {booking?.status === 'confirm' ? <span>Confirmed</span>
                                        : <button onClick={() => handleBookingConfirm(booking._id)} className="btn btn-ghost btn-xs">Pending</button>}
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default Bookings;