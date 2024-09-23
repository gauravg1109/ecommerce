import { Button, Card, CardContent, styled, Typography } from '@mui/material'
import React from 'react'

const TriangleImage=styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
})
const TrophyImg=styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:"absolute"
})
function Achievement() {
  return (
    <Card className='' sx={{position:"relative"}}>
        <CardContent>
            <Typography variant='h6' sx={{letterSpacing:".25px"}}>Shop With EasyShopping</Typography>
            <Typography variant='body2'>Congratulations 🥳</Typography>
            <Typography variant='h5' sx={{my:3.1}}>420.8k</Typography>
            <Button size='small' variant='contained'>View Sales</Button>
            <TriangleImage src=""></TriangleImage>
            <TrophyImg src="https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/trophy-icon.svg"></TrophyImg>
        </CardContent>
    </Card>
  )
}

export default Achievement

