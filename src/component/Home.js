
import  FlashSale  from "./FlashSale/FlashSale"   
import Banner  from "./Banner/Banner"  
import Product from './Product/Product'
import Navbar from './Layout/Navbar'
import Card from "./Mall/Card"
import useUser from './Axios/AxiosUser'
import axios from "axios"
import { useHistory } from "react-router-dom"
import useAxios from './Axios/Axios';
import Footer from './footer/Footer'
import Loading from "../Loading"
export default function Home()  {
    const {get} = useUser("http://localhost:8000/api/auth/user-profile")
    const {items,loading} = useAxios('http://localhost:8000/api/product');
//     const get = () => {
// return "data"
//     }
    const history = useHistory();
    const submitCart = (e) => {
        e.preventDefault()
        const product_id = e.target.product.value
        const user_id = e.target.user.value
         //initialize formData
         const formData = new FormData();
        
         //append data to formData
         formData.append('user', user_id);
         formData.append('product', product_id);
         formData.append('quantity', 1);
        
         //send data to server
         axios.post('http://localhost:8000/api/cart', formData)
         .then((res) => {
             history.push('/cart')
             console.log(res)
         })
         .catch((error) => {
             console.log(error.response.data.error)
         
         })
        }
    return (
   <>
    {loading ? <Loading/> :
    <> 
            <Navbar/>
                <Banner/>
                <Card submitCart={submitCart} items={items}/>
                <FlashSale submitCart={submitCart} items={items}/>
                <Product submitCart={submitCart} items={items}/>
                <Footer/>
                </>
            }
    </>
    )
    }