import React from 'react'

const DashboardStatsCard = ({title,icon, bgColor,stat}) => {
  return (
    <div className={`flex items-center justify-center  ${bgColor} text-light-grey text-lg p-4`}>
      {icon}
      <div className='flex flex-col items-center justify-center h-full w-full flex-1 '>
        <h3>{title}</h3>
        <span> {stat} </span>
      </div>
      </div>
  )
}

export default DashboardStatsCard