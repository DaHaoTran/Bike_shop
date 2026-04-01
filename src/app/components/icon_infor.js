import React from 'react'

export default function IconInfor({ iconComponent, name}) {
  return (
    <div className="d-grid justify-content-center align-items-center text-center">
      <div className='w-75'>{iconComponent}</div>
      <h2 className='my-2 w-75'><strong>{name}</strong></h2>
    </div>
  )
}
