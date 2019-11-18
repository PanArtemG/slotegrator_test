import React from 'react';

import './style.css'

export const Footer = () => {
    return (
        <footer className="footer">
            <div data-credit-button="">
                <a href="/#" className="button button--sp2">1 Credit =0.01 EUR </a>
            </div>
            <div className="footer__jackpot">
                <span className="footer__jackpot--gold">1 000 000 $</span>
                <span className="footer__jackpot--silver">1 000 000 $</span>
                <span className="footer__jackpot--bronze">1 000 000 $</span>
            </div>
            <a href="/login/login.html" className="button button--sp1">Logout</a>
        </footer>
    )
};