import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
const Widgets = () => {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets_article'>
            <div className='widgets_article_left'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets_article_right'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );
    return (
        <div className='widgets'>
            <div className='widgets_header'>
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle("Corona Virus Updates - India", "Top news - 6969 readers")}
            {newsArticle("TCS hiring 2022 graduates", "Top news - 1069 readers")}
            {newsArticle("Top companies", "Top news - 1000 readers")}
            {newsArticle("How to master networking", "Top news - 999 readers")}
            {newsArticle("How to land your dream job", "Top news - 888 readers")}
            {newsArticle("New features in LinkedIn premium", "Top news - 696 readers")}
        </div>
    );
}

export default Widgets;