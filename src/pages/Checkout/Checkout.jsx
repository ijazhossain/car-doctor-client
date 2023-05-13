import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Checkout = () => {
    const service = useLoaderData();
    // console.log(service);
    const { _id, title, price, img, description } = service;
    const { user } = useContext(AuthContext)
    const handleCheckout = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = user?.email;

        console.log(name, date, phone, email);
        const order = {
            customerName: name,
            img,
            title,
            email,
            date,
            service_id: _id,
            price

        }
        console.log(order);
        fetch('https://car-doctor-server-pied.vercel.app/bookings', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'success',
                        text: 'Service added successfully',

                    })
                }
            })
    }
    return (
        <div className='my-12'>
            <div className=" lg:text-left">
                <h1 className="text-5xl font-bold text-center mb-7">{title}</h1>
                <img className='mx-auto' src={img} alt="" />
                <p className="py-6">{description}</p>
                <p className='text-orange-400 font-bold text-xl text-center'>Price: ${price}</p>
            </div>
            <div className="card  w-full   rounded-lg mt-12 bg-[#f2f2f2]">
                <div className="card-body">
                    <form onSubmit={handleCheckout}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Name</span>
                                </label>
                                <input type="text" name="name" placeholder="first name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" placeholder="date" className="input input-bordered" defaultValue={user?.displayName} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Phone</span>
                                </label>
                                <input type="phone" name="phone" placeholder="Phone" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={user?.email} placeholder="Email" className="input input-bordered" />

                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-block bg-orange-400 border-0' type="submit" value="Order Now" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;