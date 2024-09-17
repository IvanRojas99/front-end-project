import React from 'react'

const Alert = ({type, message}) => {

	if(type === 'new'){
		return (
			<div className='fixed top-20 z-90 flex place-content-center inset-x-1 mb-4'>
				<div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none rounded-full inline-flex" role="alert">
					<span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">{type}</span>
					<span className="font-semibold mr-2 text-left flex-auto">{message}</span>
				</div>
			</div>
		)
	}

	if(type === 'error') {
		return (
			<div className='fixed top-20 z-90 flex place-content-center inset-x-1 mb-4'>
				<div className="p-2 bg-red-600 items-center text-white leading-none rounded-full inline-flex" role="alert">
					<span className="flex rounded-full bg-red-700 uppercase px-2 py-1 text-xs font-bold mr-3">{type}</span>
					<span className="font-semibold mr-2 text-left flex-auto">{message}</span>
				</div>
			</div>
		)
	}

	if(type === 'delete') {
		return (
			<div className='fixed top-20 z-90 flex place-content-center inset-x-1 mb-4'>
				<div className="p-2 bg-rose-600 items-center text-rose-100 leading-none rounded-full inline-flex" role="alert">
					<span className="flex rounded-full bg-rose-800 uppercase px-2 py-1 text-xs font-bold mr-3">{type}</span>
					<span className="font-semibold mr-2 text-left flex-auto">{message}</span>
				</div>
			</div>
		)
	}
	
}

export default Alert