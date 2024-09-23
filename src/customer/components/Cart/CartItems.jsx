import { Button, IconButton } from '@mui/material';
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../../State/cart/Action';
 function CartItems({item}) {
  const dispatch=useDispatch()
  const handleCartItem=(num)=>{
    const data={data:{quantity:item.quantity+num},cartItemId:item?.id}
        dispatch(updateCartItem(data))
  }
  const handleRemoveCartItem=()=>{
    dispatch(removeCartItem(item.id))
  }
  return (
    <div className='p-5 shadow-lg border rounded-md'>
      <div className='flex items-center'>
        <div className='w-[15rem] h-[15rem] lg:w-[9rem] lg:b-[9rem]'>
            <img className="w-full h-full object-cover object-top"src={item.product.imageUrl} alt="/"/>
        </div>

        <div className='ml-5 space-y-1'>
            <p className='font-semibold'>{item.product.title}</p>
            <p className='opacity-70'> Size: {item.size},White</p>
            <p className='opacity-70 mt-2'>Seller: {item.product.brand}</p>
            <div className="flex space-x-5 items-center text-gray-900 pt-6 ">
                <p className="font-semibold">Rs {item.price}</p>
                <p className="opacity-50 line-through">Rs {item.discountedPrice}</p>
                <p className="text-green-600 font-semibold">{item.discountPersent}% Off</p>
              </div>
          
        </div>
       
      </div>
      <div className='lg:flex items-center lg:space-x-10 pt-4'>
            <div className='flex items-center space-x-2'>
                <IconButton onClick={()=>handleCartItem(-1)}  disabled={item.quantity<=1}>
               <RemoveCircleOutlineIcon/>
                </IconButton>
                <span className='py-1 px-7 border rounded-sm'>{item.quantity}</span>
                <IconButton onClick={()=>handleCartItem(1)} sx={{color:"RGB(145 85 253"}}>
               <AddCircleOutlineIcon/>
                </IconButton>
                
            </div>
            <Button onClick={handleRemoveCartItem}sx={{color:"RGB(145 85 253"}}>REMOVE</Button>
        </div>
    </div>
  )
}
export default CartItems;