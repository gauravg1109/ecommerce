import { Grid } from '@mui/material';
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
 function OrderCard() {
  const navigate=useNavigate()
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-black hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6}>
            <div className='flex cursor-pointer object-cover object-top'>
                <img className=' w-[5rem] h-[5rem ]'src="https://rukminim1.flixcart.com/image/612/612/xif0q/shoe/m/o/h/-original-imaggcawtbgvt7wy.jpeg?q=70" alt="" />
                <div className='ml-5 space-y-2'>
                  <p className=''>Man slim thisrt blue</p>
                   <p className='opacity-50 text-xs font-semibold '>Size: M</p>
                   <p lassName='opacity-50 text-xs font-semibold '>Color: Black</p>
                </div>
            </div>
        </Grid>
        <Grid item xs={2}>
            <p>Rs 199</p>
        </Grid>
        <Grid item xs={4}>
           {true && <div>
            <p>
            <AdjustIcon sx={{width:"15px", height:"15px"}} className='text-green-600 mr-2 text-sm'/>
                <span>
                    Delivered on March 03,2024
                </span>
                
            </p >
            <p className='text-xs'>  Your item has been Delivered</p>
           </div>
          }
           
            {false && <p>
                <span>
                   Expected Delivery On Mar 03 
                </span>
            </p>}
        </Grid>
      </Grid>
    </div>
  )
}
export default OrderCard;