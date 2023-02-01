import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResultTag from '../page/resultTag/TagPage';
import TestInfo from '../page/TestInfo';
import SysnopsisPage from '../page/sysnopsis/SynopsysSelectPage'
import GenrePage from '../page/genre/GenrePage';
import DrawingStylePage from '../page/drawingStyle/DrawingStylePage';

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TestInfo />} />
                    <Route path="/resultTag" element={<ResultTag />} />
                    <Route path="/genre" element={<GenrePage />} />
                    <Route path="/synopsis" element={<SysnopsisPage />} />
                    <Route path="/drawingStyle" element={<DrawingStylePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter;