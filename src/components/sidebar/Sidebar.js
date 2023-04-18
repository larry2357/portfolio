import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/avatar.jpg';

class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <h1>
          <Link smooth to='/#start' className='h1_links'>
            Larry James
          </Link>
        </h1>

        <img src={logo} />
        <p style={{ color: 'black', fontWeight: 'bold' }} className='gmail'>
          <a
            href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL'
            rel='opener noreferrer'
            target='_blank'
            className='fa fa-envelope'
          ></a>{' '}
          larryj20q@gmail.com
        </p>

        <ul className='sidebar-nav'>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#projects' className='links'>
              Projects
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#about' className='links'>
              About
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#interest' className='links'>
              Interest
            </Link>
          </li>
          <li className='sidebar-nav-items'>
            <Link smooth to='/#experience' className='links'>
              Experience
            </Link>
          </li>
          {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
        </ul>

        <div className='flip-card-back'>
          <ul className='sidebar-nav'>
            <li className='sidebar-nav-icons'>
              <a
                href='https://github.com/larry2357'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-github fa-lg'
              ></a>
            </li>
            <li className='sidebar-nav-icons'>
              <a
                href='larry:larryj20q@gmail.com'
                rel='opener noreferrer'
                target='_blank'
                className='fa fas fa-envelope fa-lg'
              ></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
