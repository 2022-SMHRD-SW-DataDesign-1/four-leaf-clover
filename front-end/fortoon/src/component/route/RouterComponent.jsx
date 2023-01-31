import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TagPage from '../webtoon/TagPage';
import TestInfo from '../webtoon/TestInfo';
import SysnopsysPage from '../webtoon/SynopsysSelectPage'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TestInfo />} />
                    <Route path="/TagPage" element={<TagPage />} />
                    <Route path="/Synopsys" element={<SysnopsysPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter;