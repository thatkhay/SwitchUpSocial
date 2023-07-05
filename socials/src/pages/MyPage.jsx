import React from 'react'
import TopSocials from '../componets/TopSocials'
import ButtomSocial from '../componets/ButtomSocial'

function MyPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem 10rem' }}>
        <TopSocials />
        <ButtomSocial />
    </div>
  )
}

export default MyPage