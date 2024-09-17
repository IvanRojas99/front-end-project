import React from 'react'

const NotFoundPage = () => {
    return (
        <main className="h-screen w-full flex flex-col justify-center items-center ">
            <div className='flex flex-row items-center justify-center self-center'>
                <span className='text-4x4 font-bold'>404</span>
                <span>|</span>
                <h1 className='text-4xl font-bold text-center'>Not Found</h1>
            </div>
        </main>

    )
}

export default NotFoundPage