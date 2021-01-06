import * as React from 'react';
import { jobList, jobListItem, jobListItemActive } from '../styles/Experiences.module.css';
import Experience from './Experience';
import { col3, col9, mb3, row } from 'bootstrap/dist/css/bootstrap-grid.css';

const Experiences: React.FC = () => {

  const history = [
    {
      position: "Programmer Analyst",
      company: "Publix Super Markets",
      startDate: "November 2020",
      endDate: "Present",
      description: [
        "Lead sprint activities including daily standups, reviews, and product backlog design sessions",
        "Created UML models and sequence diagrams for other developers to use in upcoming sprints",
        "Mentored other developers about common design patterns and web standards",
        "Lead teams for high priority bug fixes or enhancements",
        "Established a design system for Web and Mobile UIs"
      ]
    },
    {
      position: "Programmer",
      company: "Publix Super Markets",
      startDate: "March 2020",
      endDate: "October 2020",
      description: [
        "Built dynamic rendered webpages using Telerik UI & Razor Pages inside an ASP.NET Core Web API project.",
        "Created database diagrams for pre-existing data to be migrated to a normalized database to increase server, performance and data integrity, as well as documented table data.",
        "Modified pre-existing code inside the Data layer to leverage Entity Framework Core to incorporate new database schemes into the web application.",
        "Created unit tests using XUnit and Moq to provide coverage for written code",
        "Migrated microservices from .NET Core 2.2 to 3.1",
      ]
    },
    {
      position: "Software Engineer",
      company: "Lurik Labs",
      startDate: "September 2018",
      endDate: "March 2020",
      description: [
        "Leading web development staff and have supervisory responsibilities over all employees",
        "Designed, developed, and deployed the company’s initial website using HTML, Bootstrap, and Sass",
        "Migrating current site to JAMStack architecture using React, Gatsby, Netlify, and Contentful CMS",
        "Implementing continuous integration and deployment by utilizing Contentful’s webhooks with Netlify to improve site maintenance for Marketing and Development teams."
      ]
    },
  ]

  const [activeJob, setActiveJob] = React.useState(0);

  const jobs = history.map((job, index) => {
    let isActiveJob = activeJob === index;
    let cssClasses = isActiveJob ? `${jobListItem} ${jobListItemActive}` : jobListItem;

    return <li onClick={() => setActiveJob(index)} className={cssClasses}>{job.company}</li>
  })

  return (
    <section id="experience">
      <h2 className={mb3}>Where I've Worked</h2>
      <div className={row}>
        <div className={col3}>
          <ul className={jobList}>{jobs}</ul>
        </div>
        <div className={col9}>
          <Experience job={history[activeJob]} />
        </div>
      </div>
    </section>
  )
}

export default Experiences;
