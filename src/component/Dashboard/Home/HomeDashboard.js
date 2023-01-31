import { Box} from "@chakra-ui/react"
import Sidebar from "../Sidebar"
import MainHomeDashboard from "./MainHomeDashboard"
import React from 'react'
export default function HomeDashboard(){
    
    return <>
<Box position="relative">
<Sidebar />
<MainHomeDashboard/>
</Box>
    </>
}