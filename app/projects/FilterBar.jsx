'use client'
import React from 'react';

const FilterBar = ({ setProjectType }) => {
    return (
        <div className='flex justify-center mx-34 gap-x-3'>
                <button onClick={() => setProjectType('all')} className='cursor-pointer outline-2 outline-fuchsia-800 hover:scale-110 transform transition duration-500 px-4 py-2 rounded'>All</button>
                <button onClick={() => setProjectType('Full Stack')} className='cursor-pointer outline-2 outline-fuchsia-800 hover:scale-110 transform transition duration-500 px-4 py-2 rounded'>MERN Stack</button>
                <button onClick={() => setProjectType('Frontend')} className='cursor-pointer outline-2 outline-fuchsia-800 hover:scale-110 transform transition duration-500 px-4 py-2 rounded'>Frontend</button>
                <button onClick={() => setProjectType('cybersecurity')} className='cursor-pointer outline-2 outline-fuchsia-800 hover:scale-110 transform transition duration-500 px-4 py-2 rounded'>CyberSecurity</button>
                <button onClick={() => setProjectType('ai/ml')} className='cursor-pointer outline-2 outline-fuchsia-800 hover:scale-110 transform transition duration-500 px-4 py-2 rounded'>AI/ML</button>
        </div>
    );
};

export default FilterBar;
