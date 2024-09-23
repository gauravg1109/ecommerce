import React from 'react'
import { Step, StepLabel, Stepper } from '@mui/material';

const steps=[
    "Placed",
    "Order Confirmed",
    "Shipped",
    "Out For Delivery",
    "Delivered"
]
function OrderTracker({activeStep}) {
  return (
    <div className='w-full'>
      <Stepper activeStep={activeStep} alternativeLabel>
{steps.map((label)=><Step>
    <StepLabel sx={{color:"#9155fD", fontSize:"44px"}}>{label}</StepLabel>
</Step>)}
      </Stepper>
    </div>
  )
}
export default  OrderTracker;