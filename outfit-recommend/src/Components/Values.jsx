import React from 'react'
import backgroundImage from '../Assests/img/jeans.jpg'

const Values = () => {
    const styles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',

    };
    return (
        <div className='text-xl font-mono text-center border border-black mx-40 my-4' style={styles}>
            <form>
                <h2 className='font-serif font-bold p-2 text-2xl bg-[#33302d] text-white'>Suggest me about the Outfit</h2>
                <div className=''>
                    <ul className='flex gap-16 px-[200px] m-10 p-4'>
                        <li>
                            <label htmlFor="">Gender:</label>
                            <select id="dropdown" className='border border-black p-2'>
                                <option value="default">Select...</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="">Occassion:</label>
                            <select id="dropdown" className='border border-black p-2'>
                                <option value="default">Select...</option>
                                <option value="Formal">Formal</option>
                                <option value="Casual">Casual</option>
                                <option value="Beach">Beach</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="">Weather:</label>
                            <select id="dropdown" className='border border-black p-2'>
                                <option value="default">Select...</option>
                                <option value="Summer">Summmer</option>
                                <option value="Winter">Winter</option>
                            </select>
                        </li>
                    </ul>
                </div>
                <button type='submit' className='text-white border border-white p-2 my-4 w-[100px] hover:bg-black hover:text-white ease-in-out duration-500'>Submit</button>
            </form>
        </div>
    )
}

export default Values