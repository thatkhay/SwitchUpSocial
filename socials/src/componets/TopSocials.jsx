import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import youtube from '../images/icon-youtube.svg'

import upIcon from '../images/icon-up.svg'
import downIcon from '../images/icon-down.svg'
const data = [
    {
     topDivBgcolor: 'hsl(208, 92%, 53%)',
     socialIcon: facebook,
     handle: '@nathanf',
     number: '1987',
     followersTile: 'followers',
     arrowicon: upIcon,
     days: '12 today'
    },
    {
     topDivBgcolor: 'hsl(208, 92%, 53%)',
     socialIcon: twitter,
     handle: '@nathanf',
     number: '1044',
     followersTile: 'followers',
     arrowicon: upIcon,
     days: '99 today'
    },
    {
     topDivBgcolor: 'hsl(208, 92%, 53%)',
     socialIcon: instagram,
     handle: '@realnathanf',
     number: '11k',
     followersTile: 'followers',
     arrowicon: upIcon,
     days: '1099 today'
    },
    {
     topDivBgcolor: 'hsl(208, 92%, 53%)',
     socialIcon: youtube,
     handle: 'nathan f .',
     number: '8239',
     followersTile: 'suscribers',
     arrowicon: downIcon,
     days: '144 today'
    }
]

const topBorderColor =  [
    'hsl(208, 92%, 53%)', 
    'hsl(203, 89%, 53%)',
   'linear-gradient(hsl(37, 97%, 70%) , hsl(329, 70%, 58%))',
 'hsl(348, 97%, 39%)'
]

function TopSocials() {
  return (
    <div>
       <header style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <h3>Social Media Dashboard</h3>
                <h6 style={{ marginTop: '-1rem' }}>Total Followers: 23,004</h6>
            </div>

            <div>
                <ThemeSwitch />
            </div>
            </header>
            <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1.5rem' }}>
{ data.map((items, index) => (
    <Card key={index} style={{ padding: '0'}}>
    <CardContent style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={{ height: '4px',  background: topBorderColor[index % topBorderColor.length], width: '100%', marginTop: '-1rem'}}></div>
    <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={items.socialIcon} alt="" style={{ marginRight:'.5rem' }}/>
        <p style={{ fontSize: '0.9rem', fontWeight: '700' }}>{items.handle}</p>
    </div>
   <h3 style={{ fontSize: '3rem', fontWeight: '700' , marginTop: '1rem'}}>{items.number}</h3>
   <p style={{ letterSpacing: '1px', textTransform: 'uppercase', marginTop: '-3rem',fontSize: '0.9rem' }}>{items.followersTile}</p>

   <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src={items.arrowicon} alt="" />
    <p style={{ fontSize: '0.7rem', textTransform: 'capitalize', marginLeft: '0.2rem' }}>{items.days}</p>
   </div>
    </CardContent>
</Card>

)) }
</main>


    </div>
  )
}

export default TopSocials