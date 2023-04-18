import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Resume = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2022 - 2023"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        color="white"
        icon={
          <img 
            src="https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/expedition_co.png?VersionId=P19fW2CPlp9C1ZfGbj5E0aFz05gkqK6B"
            style={{ width: '100%', height: '100%', borderRadius: '100%'}}
            alt="expedition co"
          />
        }
      >
        <h3 className="vertical-timeline-element-title">Senior Full-Stack Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Expedition Co</h4>
        <p>
          Developed and maintained a project that allowed users to convert and edit videos from YouTube with
          high speed. Designed the user interface and built it using NextJS and Mobx. To improve code maintainability,
          used the CQRS architecture for the frontend and Express as a server for creating REST API routes. Stored
          user logs and actions in MongoDB and improved the server's configuration based on the services discovery pattern.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2020 - 2022"
        dateClassName="custom-date-class"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={
          <img 
            src="https://ironbellystudios.com/wp-content/uploads/2021/01/IB_icon_site-24.png"
            style={{ width: '100%', height: '100%', borderRadius: '100%'}}
            alt="Ironbelly Studios"
          />
        }
      >
        <h3 className="vertical-timeline-element-title">Senior Frontend Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Ironbelly Studios</h4>
        <p>
          Worked as a team player in an Agile team and built enterprise-level SaaS products. I developed
          Restful web services for applications, worked on the back-end, and built a UI component library
          for web and mobile apps. Supported the engineering team by implementing new features and fixing
          issues on the marketplace app using various technologies such as Node.js, React, React Native,
          Django, and AWS services. Also participated in code reviews and debugging on front-end projects.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017 - 2020"
        dateClassName="custom-date-class"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={
          <img 
            src="https://media.licdn.com/dms/image/C4E0BAQFoEWxPPgy_IA/company-logo_200_200/0/1624447188395?e=2147483647&v=beta&t=x-trY7t_5IhU8R_AI54fqL6HLPcxcfTjyk9tUkEjdgc"
            style={{ width: '100%', height: '100%', borderRadius: '100%'}}
            alt="Innowise Group"
          />
        }
      >
        <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Innowise Group</h4>
        <p>
          Developed web3 products using JavaScript frameworks and modernized NFT metaverse with
          React, Angular, PHP, web3.js, ethers.js, ethereum-util.js, and metamask. Built web and
          mobile apps using React, Node.js, React Native, and Laravel. Developed Next.js products,
           and built CMS with Contentful and Strapi for locales and internalization. Improved front-end
           performance and accelerated development by reusing components. Mentored two junior developers
           as a Scrum team member, showing my ability to work in a team and share knowledge.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2014 - 2017"
        dateClassName="custom-date-class"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={
          <img 
            src="https://media.licdn.com/dms/image/C4D0BAQGWB9TOR65qhg/company-logo_200_200/0/1619559949869?e=2147483647&v=beta&t=WEd-G4FjddO2VFgETQTHkqZLl7Y_BliVX9IddtLG62c"
            style={{ width: '100%', height: '100%', borderRadius: '100%'}}
            alt="Infurm Technologies LLC"
          />
        }
      >
        <h3 className="vertical-timeline-element-title">Full-Stack Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Infurm Technologies LLC</h4>
        <p>
          Experienced in understanding complex business processes and translating customer
          requirements into business use cases. I have worked with various technologies to
          build Restful APIs and headless CMS. I have also worked on React.js front-end
          development and used Node.js to deploy Restful back-end APIs on serverless
          environments. I have collaborated with cross-functional and Scrum teams using
          project management tools like Jira and communication tools like Slack.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      />
    </VerticalTimeline>
  );
};

export default Resume;
