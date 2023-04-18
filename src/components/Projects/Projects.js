import React from 'react';
import classes from './Projects.module.css';
import tenths from '../images/11tenths.jpg';
import billingserv from '../images/billingserv.jpg';
import dscvr from '../images/dscvr.jpg';
import learnt from '../images/learnt.jpg';
import privatemaklaren from '../images/privatemaklaren.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

// Web projects
const cardItem = [
  {
    link: 'https://11tenths.ca/',
    title: '11tenths Racecraft',
    techStack: 'Tech Stack: React, Next',
    desc: 'The Automotive Experts for vehicle performance, maintenance, service and repairs.',
    image: tenths
  },
  {
    link: 'https://billingserv.com/',
    title: 'Billing and Payment Service',
    techStack: 'Tech Stack- Vue, NodeJS, Express',
    desc: 'Trusted and Secure Billing and Payment Service',
    image: billingserv
  },
  {
    link: 'https://dscvr.one/',
    title: 'DSCVR',
    techStack: 'Tech Stack- Vue, Rust',
    desc: 'A full stack application for community',
    image: dscvr
  },
  {
    link: 'https://learnt.io/',
    title: 'Hiring Tutors',
    techStack: 'Tech Stack- Angular, Rxjs',
    desc: 'An Application for hiring tutors',
    image: learnt
  },
  {
    link: 'https://privatmaklaren.se/',
    title: 'Selling home service',
    techStack: 'Tech Stack: MERN',
    desc: 'It is trusted and secure service for selling homes',
    image: privatemaklaren
  },
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <li>
        <a href={cardItem.link} className={classes.card} target='_blank'>
          <img src={cardItem.image} className={classes.card__image} alt='' />
          <div className={classes.card__overlay}>
            <div className={classes.card__header}>
              <svg className={classes.card__arc} xmlns='http://www.w3.org/2000/svg'>
                <path />
              </svg>
              <div className={classes.card__header_text}>
                <h3 className={classes.card__title}>{cardItem.title}</h3>
                <span className={classes.card__status}>{cardItem.techStack}</span>
              </div>
            </div>
            <p className={classes.card__description}>{cardItem.desc}</p>
          </div>
        </a>
      </li>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>MY WORK</span>
        <h2 className={classes.heading}>PROJECTS</h2>
        <ul className={classes.cards}>
          {cardItem.map((item) => {
            return getProjectCard(item);
          })}
        </ul>
      </ScrollAnimation>
    </div>
  );
}
