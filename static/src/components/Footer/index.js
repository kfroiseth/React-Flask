import React from 'react';

/* component styles */
import { styles } from './styles.scss';

export const Footer = () =>
    <footer className={`${styles}`}>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <ul className="list-inline col-md-6">
                  <li><a href="docs" target="_blank">About This Site</a></li>
                  <li><a href="#" target="_blank">Services</a></li>
                  <li><a href="#" target="_blank">Privacy Policy</a></li>
                  <li><a href="#">Support</a></li>
                  <li><a href="/Logout" target="_self">Logout</a></li>
                </ul>
                <div className="col-md-6 hidden-xs hidden-sm">
				          <span>©2018</span> <a href="#">Sample React-Redux-Flask Template 
			          </div>
                </div>
            </div>
        </div>
    </footer>;
