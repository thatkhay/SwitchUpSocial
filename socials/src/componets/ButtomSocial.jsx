import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import youtube from '../images/icon-youtube.svg'

import upIcon from '../images/icon-up.svg'
import downIcon from '../images/icon-down.svg'
const todayData = [
  {
    title: 'page views',
    icon: facebook,
    number: '87',
    arrowIcon: upIcon,
    percentage: '3%'
  },
  {
    title: 'likes',
    icon: facebook,
    number: '52',
    arrowIcon: downIcon,
    percentage: '2%'
  },
  {
    title: 'likes',
    icon: instagram,
    number: '5462',
    arrowIcon: upIcon,
    percentage: '2257%'
  },
  {
    title: 'profile views',
    icon: instagram,
    number: '52k',
    arrowIcon: upIcon,
    percentage: '1375%'
  },
  {
    title: 'retweets',
    icon: twitter,
    number: '87',
    arrowIcon: upIcon,
    percentage: '303%'
  },
  {
    title: 'likes',
    icon: twitter,
    number: '507',
    arrowIcon: upIcon,
    percentage: '553%'
  },
  {
    title: 'likes',
    icon: youtube,
    number: '107',
    arrowIcon: downIcon,
    percentage: '19%'
  },
  {
    title: 'total views',
    icon: youtube,
    number: '1407',
    arrowIcon: downIcon,
    percentage: '12%'
  }
 
]

function ButtomSocial() {
  return (
    <div>
      <div style={{ display: 'flex' , alignItems: 'center'}}>
        <h4>overview</h4>
        <span>-</span>
        <h4>today</h4>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' , gap: '0.6rem' }}>
            {todayData.map((items, index) => (
              <Card key={index} style={{ }}>
                <CardContent>
               <div style={{ display: 'flex', alignItems: 'center' , justifyContent: 'space-between'}}>
                <h6>{items.title}</h6>
                <img src={items.icon} alt="" />
               </div>
               <div style={{ display: 'flex', alignItems: 'center' , justifyContent: 'space-between' }}>
                <h4>{items.number}</h4>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={items.arrowIcon} alt="" />
                <span>{items.percentage}</span>
                </div>
               </div>
                </CardContent>
              </Card>
            ))}
      </div>
    </div>
  )
}

export default ButtomSocial