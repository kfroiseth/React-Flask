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
                  <li><a href="http://www.ufl.edu/disability/" target="_blank">Disability Services</a></li>
                  <li><a href="http://privacy.ufl.edu/privacystatement.html" target="_blank">Privacy Policy</a></li>
                  <li><a href="mailto:apg-support@at.ufl.edu">Support</a></li>
                  <li><a href="/Shibboleth.sso/Logout" target="_self">Logout</a></li>
                </ul>
                <div className="col-md-6 hidden-xs hidden-sm">
				          <span>©2018</span> <a href="http://www.ufl.edu/">University of Florida</a>, Gainesville, FL 32611; (352) 392-3261
			          </div>
                </div>
            </div>
        </div>
    </footer>;
