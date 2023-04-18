import React, { Component } from 'react';
import classes from './Experience.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdWork } from 'react-icons/md';

class Experience extends Component {
  render() {
    return (
      <div className={classes.box} id='experience'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>MY JOURNEY</span>
          <section className={classes.container}>
            <div className={classes.container_content}>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Senior Full Stack Developer at <strong>Expedition Co </strong><span>Feb(2022)-Jan(2023)</span>
                          </h2>
                          <p>
                            Developed and maintained a project that allowed users to convert and edit videos from YouTube with
                            high speed. Designed the user interface and built it using NextJS and Mobx. To improve code maintainability,
                            used the CQRS architecture for the frontend and Express as a server for creating REST API routes. Stored
                            user logs and actions in MongoDB and improved the server's configuration based on the services discovery pattern.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={classes.timeline_icon}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Frontend Developer at <strong>Ironbelly Studios</strong> <span>Feb(2020)-Dec(2021)</span>
                          </h2>
                          <p>
                            Worked as a team player in an Agile team and built enterprise-level SaaS products. I developed
                            Restful web services for applications, worked on the back-end, and built a UI component library
                            for web and mobile apps. Supported the engineering team by implementing new features and fixing
                            issues on the marketplace app using various technologies such as Node.js, React, React Native,
                            Django, and AWS services. Also participated in code reviews and debugging on front-end projects.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Frontend Developer at <strong>Innowise Group</strong> <span>Apr(2017)-Dec(2019)</span>
                          </h2>
                          <p>
                            Developed web3 products using JavaScript frameworks and modernized NFT metaverse with
                            React, Angular, PHP, web3.js, ethers.js, ethereum-util.js, and metamask. Built web and
                            mobile apps using React, Node.js, React Native, and Laravel. Developed Next.js products,
                            and built CMS with Contentful and Strapi for locales and internalization. Improved front-end
                            performance and accelerated development by reusing components. Mentored two junior developers
                            as a Scrum team member, showing my ability to work in a team and share knowledge.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>

                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>Full Stack Developer at <strong>Infurm Technology</strong> <span>Mar(2014)-Mar(2017)</span></h2>
                          <p>
                            Experienced in understanding complex business processes and translating customer
                            requirements into business use cases. I have worked with various technologies to
                            build Restful APIs and headless CMS. I have also worked on React.js front-end
                            development and used Node.js to deploy Restful back-end APIs on serverless
                            environments. I have collaborated with cross-functional and Scrum teams using
                            project management tools like Jira and communication tools like Slack.
                          </p>
                        </div>
                        <div className={classes.timeline_entry_inner}>
                          <div className={classes.timeline_icon_3 || classes.color_none}></div>
                        </div>
                      </article>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Experience;
