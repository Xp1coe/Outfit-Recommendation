import React from 'react'

const Values = () => {
    return (
        <div className='text-xl font-mono text-center border border-black w-[80%] m-40'>
            <form>
                <h2 className='font-serif font-bold p-2 text-2xl bg-[#33302d] text-white'>Suggest me about the Outfit</h2>
                <div className=''>
                    <ul className='flex gap-16 px-[200px] m-10 p-4'>
                        <li>
                            <label htmlFor="">Gender:</label>
                            <select id="dropdown" className='border border-black p-2'>
                                <option value="default">Select...</option>
                                <option value="option1">Male</option>
                                <option value="option2">Female</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="">Occassion</label>
                            <select id="dropdown" className='border border-black p-2'>
                                <option value="default">Select...</option>
                                <option value="option1">Formal</option>
                                <option value="option2">Casual</option>
                                <option value="option2">Beach</option>
                            </select>
                        </li>
                        <li>
                            <label htmlFor="">Weather</label>
                            <select id="dropdown" className='border border-black p-2'>
                                <option value="default">Select...</option>
                                <option value="option1">Summmer</option>
                                <option value="option2">Winter</option>
                            </select>
                        </li>
                    </ul>
                </div>
                <button type='submit' className='border border-black p-2 my-4 w-[100px] hover:bg-black hover:text-white ease-in-out duration-500'>Submit</button>
            </form>
        </div>
    )
}

export default Values