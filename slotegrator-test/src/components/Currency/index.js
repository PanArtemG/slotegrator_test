import React from 'react';

import './style.css';

export const Currency = () => {
    return (
        <div className="currency">
            <div className="credits">
                <div className="credits__header">Credit</div>
                <span className="credits__balance">45,034,92 EUR</span>
                <span className="credits__points">4503492</span>
            </div>
            <div data-credit-button-holder=""></div>
        </div>
    )
};