import React, { useState } from 'react';
import backgroundImage from '../Assests/img/jeans.jpg';

const Values = () => {
    const [formData, setFormData] = useState({
        gender: '',
        occasion: '',
        weather: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/preferences', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to submit form');
            }
            console.log('Form submitted successfully:', await response.json());
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const styles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    };

    return (
        <div className='text-xl font-mono text-center border border-black mx-40 my-4 'style={styles}>
            <form onSubmit={handleSubmit}>
                <h2 className='font-serif font-bold p-2 text-2xl bg-[#33302d] text-white'>Suggest me about the Outfit</h2>
                <div className=''>
                    <ul className='flex gap-16 px-[200px] m-10 p-4'>
                        <li>
                            <label htmlFor="gender">Gender:</label>
                            <select id="gender" name="gender" className='border border-black p-2' onChange={handleChange}>
                                <option value="">Select...</option>
                                <option value="men">Men</option>
                                <option value="women">Women</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="occasion">Occasion:</label>
                            <select id="occasion" name="occasion" className='border border-black p-2' onChange={handleChange}>
                                <option value="">Select...</option>
                                <option value="formal">Formal</option>
                                <option value="casual">Casual</option>
                                <option value="beach">Beach</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="weather">Weather:</label>
                            <select id="weather" name="weather" className='border border-black p-2' onChange={handleChange}>
                                <option value="">Select...</option>
                                <option value="summer">Summer</option>
                                <option value="winter">Winter</option>
                            </select>
                        </li>
                    </ul>
                </div>
                <button type='submit' className='text-white border border-white p-2 my-4 w-[100px] hover:bg-black hover:text-white ease-in-out duration-500'>Submit</button>
            </form>
        </div>
    )
}

export default Values;
