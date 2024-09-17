import React from 'react';
import './QualityFeatures.css';

function QualityFeatures() {
    return (
        <div className="curriculum-section"id="curriculum">
            <h2 className="small-heading">Curriculum</h2>
            <h1 className="big-heading">Curricula We Cover</h1>
            <div className="curriculum-list">
                <div className="curriculum-item">
                    <i className="fas fa-flag-usa"></i>
                    <h3>American Common Core</h3>
                </div>
                <div className="curriculum-item">
                    <i className="fas fa-landmark"></i>
                    <h3>British (GCSE & A-Levels)</h3>
                </div>
                <div className="curriculum-item">
                    <i className="fas fa-globe-americas"></i>
                    <h3>International Baccalaureate (IB)</h3>
                </div>
                <div className="curriculum-item">
                    <i className="fas fa-maple-leaf"></i>
                    <h3>Canadian & Australian</h3>
                </div>
                <div className="curriculum-item">
                    <i className="fas fa-om"></i>
                    <h3>Indian (CBSE & ICSE)</h3>
                </div>
                <div className="curriculum-item">
                    <i className="fas fa-calculator"></i>
                    <h3>Singapore Math</h3>
                </div>
                <div className="curriculum-item">
                    <i className="fas fa-chalkboard-teacher"></i>
                    <h3>Other international curricula upon request</h3>
                </div>
            </div>
        </div>
    );
}

export default QualityFeatures;