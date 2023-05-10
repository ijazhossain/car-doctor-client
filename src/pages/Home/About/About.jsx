import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="hero  bg-base-200 my-12 py-16 px-8">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img
                        src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img
                        src={parts} className='w-1/2 absolute right-6 top-1/2 border-8 rounded-lg' alt="" />

                </div>
                <div className='lg:w-1/2 space-y-5'>
                    <h2 className='text-3xl text-orange-400 font-semibold'>About Us</h2>
                    <h1 className='text-5xl font-semibold'>We are qualified & of experience in this field</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;