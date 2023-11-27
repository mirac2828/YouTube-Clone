import React, { memo } from 'react'



const Header = () => {
  console.log("kerem");

  return (
    <div className='bg-dark'>
      <img className='w-25'
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />

    </div>
  )
}

export default memo(Header)