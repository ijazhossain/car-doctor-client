import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    const { _id, img, title, price, email } = bookings;
    console.log
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBookings(data)
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
                                    <input type="checkbox" className="checkbox" />
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
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
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
                                    <button className="btn btn-ghost btn-xs">details</button>
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