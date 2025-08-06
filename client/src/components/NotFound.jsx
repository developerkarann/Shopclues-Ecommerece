import React from 'react'

const NotFound = ({ text }) => {
    return (
        <>
            <div className="flex justify-center items-center h-screen">
                <h2 className='text-3xl text-cyan-600'>
                  {text}
                </h2>
            </div>
        </>
    )
}

export default NotFound