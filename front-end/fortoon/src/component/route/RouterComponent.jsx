import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TestInfo from '../webtoon/TestInfo';

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TestInfo />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter;