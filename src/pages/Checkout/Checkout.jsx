import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const service = useLoaderData();
    // console.log(service);
    const { _id, title, price, img, description } = service;
    return (
        <div className='my-12'>
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">{title}</h1>
                <img src={img} alt="" />
                <p className="py-6">{description}</p>
                <p className='text-orange-400 font-semibold'>Price: ${price}</p>
            </div>
            <div className="card  w-full   rounded-lg mt-12 bg-[#f2f2f2]">
                <div className="card-body">
                    <form className=''>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" name="firstName" placeholder="first name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" name="lastName" placeholder="last name" className="input input-bordered" />
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
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" />

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