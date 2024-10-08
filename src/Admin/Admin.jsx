
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dashboard from './component/Dashboard';
import CreateProductForm from './component/CreateProductForm';
import ProductsTable from './component/ProductsTable';
import OrderTable from './component/OrderTable';
import CustomerTable from './component/CustomerTable';
import AdminDashboard from './component/Dashboard';
const menu=[
  {name:"Dashboard", path:"/admin",icon:<DashboardIcon/>},
  {name:"Products", path:"/admin/products",icon:<DashboardIcon/>},
  {name:"Customers", path:"/admin/customers",icon:<DashboardIcon/>},
  {name:"Orders", path:"/admin/orders",icon:<DashboardIcon/>},
  {name:"AddProduct", path:"/admin/product/create",icon:<DashboardIcon/>},
  // {name:"", path:""}
]
function Admin() {
  const theme=useTheme();
  const isLargeScreen=useMediaQuery(theme.breakpoints.up("lg"))
  const [sideBarVisible,setSideBarVisible]=useState(false)
  const navigate=useNavigate()

  const drawer=(
    <Box sx={{overflow:"auto", display:"flex", flexDirection:"column",justifyContent:"space-between",height:"100%"}}>
      {/* {isLargeScreen && <Toolbar/>} */}
     <> <List>
        {menu.map((item,index)=><ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
          <ListItemButton>
             <ListItemIcon>
              {item.icon}
             </ListItemIcon>
             <ListItemText>
              {item.name}
             </ListItemText>
          </ListItemButton>
        </ListItem>)}
      </List></>


      <List>
       <ListItem  disablePadding >
          <ListItemButton>
             <ListItemIcon>
              <AccountCircleIcon/>
             </ListItemIcon>
             <ListItemText>Account</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )


  return (
    
      <div className=' relative flex h-[100vh] '>
        <CssBaseline/>
        <div
          className=' w-[15%] border border-r-gray-300 h-full fixed top-0'>
            {drawer}
          </div>

          <div className='w-[85%] h-full ml-[15%]'>
            <Routes>
              <Route path="/" element={<AdminDashboard/>}></Route>
              <Route path="/product/create" element={<CreateProductForm/>}></Route>
              <Route path="/products" element={<ProductsTable/>}></Route>
              <Route path="/orders" element={<OrderTable/>}></Route>
              <Route path="/customers" element={<CustomerTable/>}></Route>
            </Routes>
          </div>
      </div>
    
  )
}
export default Admin;