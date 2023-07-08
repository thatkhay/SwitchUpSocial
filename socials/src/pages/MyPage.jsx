import React from 'react'
import TopSocials from '../componets/TopSocials'
import ButtomSocial from '../componets/ButtomSocial'
import Footer from '../componets/Footer'

function MyPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem 10rem' }}>
        <TopSocials />
        <ButtomSocial />
        <Footer/>
    </div>
  )
}

export default MyPage