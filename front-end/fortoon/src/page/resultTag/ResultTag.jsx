import React, { Component } from 'react';
import TagPage from './TagPage';
import Header from '../../component/Header'
import Footer from '../../component/Footer'

class ResultTag extends Component {
    render() {
        return (
            <>
                <Header />
                <TagPage />
                <Footer />
            </>
        );
    }
}

export default ResultTag;
