import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard';
import { Button } from '@mui/material';
import CartItems from '../Cart/CartItems';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../../State/Order/Action';
import { useLocation } from 'react-router-dom';
import { createPayment } from '../../../State/Payment/Action';

function OrderSummary() {
  const dispatch=useDispatch()
  const location=useLocation()
  const {order}=useSelector(store=>store)
  const searchParam=new URLSearchParams(location.search)
  const orderId=searchParam.get("order_id")
  const handleCheckOut=()=>{
    dispatch(createPayment(orderId))
  }
  useEffect(()=>{
    dispatch(getOrderById(orderId))
  },[orderId])
  return (
    <div>
     <div className='p-5 shadow-lg rounded-s-md border'>
      <AddressCard address={order.order?.shippingAddress}/>
     </div>
     <div>
      <div className="lg:grid grid-cols-3  relative">
        <div className="col-span-2">
         { order.order?.orderItems.map((item)=><CartItems item={item} />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase opacity-60 pb-4">Price Details</p>
            <hr/>
            <div className="space-y-3 font-semibold mb-10">
                <div className="flex justify-between pt-3 text-black">
                    <span>Price</span>
                    <span>Rs{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 ">
                    <span>Discount</span>
                    <span className="text-green-600">-Rs{order.order?.discount}</span>
                </div>
                <div className="flex justify-between pt-3 ">
                    <span>Delievery Charge</span>
                    <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3  font-bold">
                    <span>Total Amount</span>
                    <span className="text-green-600">Rs {order.order?.totalDiscountPrice
                    }</span>
                </div>
            </div>
          </div>
          <Button
                  variant="contained" className="w-full mt-5"
                  sx={{
                    px: "2.5rem", // Horizontal padding (left and right)
                    py: "0.7rem", // Vertical padding (top and bottom)

                    bgcolor: "#9155fd", // Background color
                    // Keep text capitalization as-is
                  }}
                  onClick={handleCheckOut}
                >
                 Checkout
                </Button>
        </div>
       
      </div>
    </div>
    </div>
  )
}
export default OrderSummary;