import React from 'react'
import Main from './Main'
import NewsType from './NewsType'
import { Route, Routes} from "react-router-dom";

function Pages() {
    return (
        <Routes>
            <Route path='/' element={<Main />}  />
            <Route path='/:type' element={<NewsType />} />
            <Route path='/search/:type' element={<NewsType />} />
        </Routes>
    )
}

export default Pages