import React, {FC} from 'react'
import {Route, Routes} from "react-router-dom";
import HomePage from "@/pages/HomePage";
import NftList from '@/components/nft/NftList'

const AppRouter: FC = () => {

    return <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/marketplace' element={<NftList/>}/>
    </Routes>
}

export default AppRouter
