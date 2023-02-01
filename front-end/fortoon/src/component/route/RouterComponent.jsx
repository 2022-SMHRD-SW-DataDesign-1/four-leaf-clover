import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TagPage from '../webtoon/TagPage';
import TestInfo from '../webtoon/TestInfo';
import SysnopsysPage from '../../components2/SynopsysSelectPage'
import GanrePage from '../../components1/GanrePage';

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TestInfo />} />
                    <Route path="/TagPage" element={<TagPage />} />
                    <Route path="/Synopsys" element={<SysnopsysPage />} />
                    <Route path="/minji1" element={<GanrePage />} />
                    <Route path="/minji2" element={<SysnopsysPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter;