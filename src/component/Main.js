import { Box } from "@chakra-ui/react"
import Home from './Home'
import Navbar  from "./Layout/Navbar"  
import Theme from './Theme'
import { ColorModeScript } from '@chakra-ui/react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    
  } from "react-router-dom";
import HomeDashboard from './Dashboard/Home/HomeDashboard'
import Cart from './cart/mainCart'
import ProductDashboard from "./Dashboard/Produk/ProductDashboard"
import DetailProduk from "./detail/DetailProduk"
import Registrasi from "./registrasi/Registrasi"
import Login from "./registrasi/Login"
import LoginAdmin from "./Admin/LoginAdmin"
import Setting from "./Dashboard/setting/Setting"
import MainCekout from "./Cekout/MainCekout"
import UserHome from "./Dashboard/User/MainUserHome"
import MainPesanan from "./Dashboard/User/Pesanan/MainPesanan"
import useUser from "./Axios/AxiosUser"
import { Redirect } from "react-router-dom"
import {useState} from 'react'
import MainPayment from "./Dashboard/payment/MainPayment"

export default function Main()  {
const [cek, setCek] = useState()

const a = sessionStorage.getItem("token")
return (
<>
<ColorModeScript initialColorMode={Theme.config.initialColorMode} />

<Box m={0} border={'1px'} borderColor={'white'} boxSizing={'border-box'} >
<Router> 
    <Switch>
        <Route exact path="/">
           <Home/>
          </Route>
          <Route path="/product/:id">
        <Navbar/>
           <DetailProduk/>
          </Route>
          
          <Route path="/dashboard" >
           {a ? <HomeDashboard/> : <Redirect to="/login"/>} 
          </Route>
          <Route path="/product" children={<ProductDashboard/> }/>
          <Route path="/signup" children={<Registrasi/>}/>
          <Route path="/login" children={<Login/>}/>
          <Route path="/login-admin" children={<LoginAdmin/>}/>
          <Route path="/setting" children={<Setting/>}/>
          <Route path="/checkout" children={<MainCekout/>}/>
          <Route path="/profile" children={<UserHome/>}/>
          <Route path="/pesanan" children={<MainPesanan/>}/>
          <Route path="/payment-setting" children={<MainPayment/>}/>

          <Route path="/cart" children={<Cart/>}/>
        
          
    </Switch>
    
</Router>

</Box>
</>

)
}