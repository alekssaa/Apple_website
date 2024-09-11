import React from 'react'
import { Html } from '@react-three/drei'
const Loader = () => {
  return (
      <Html>
          <div className='absolute top-0 left-0 w-full h-full flex justefy-center items-center'>
              <div className='w-[10vw] h-[10vw] rounded-fulll'>Loading....</div>
          </div>
    </Html>
  )
}

export default Loader