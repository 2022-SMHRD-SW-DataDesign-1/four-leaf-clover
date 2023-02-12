import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ResultTag from '../page/resultTag/ResultTag';
import TestInfo from '../page/TestInfo';
import SysnopsisPage from '../page/sysnopsis/SynopsysSelectPage'
import GenrePage from '../page/genre/GenrePage';
import DrawingStylePage from '../page/drawingStyle/DrawingStylePage';
import ResultToon from '../page/resultToon/ResultToonPage';

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/genre" element={<GenrePage />} />
                    <Route path="/" element={<TestInfo />} />
                    <Route path="/resultTag" element={<ResultTag />} />
                    <Route path="/resultToon" element={<ResultToon />} />
                    <Route path="/synopsis" element={<SysnopsisPage />} />
                    <Route path="/drawingStyle" element={<DrawingStylePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter;