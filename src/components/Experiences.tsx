import * as React from 'react';
import Experience from './Experience';
import { Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  header: {
    marginTop: '1rem'
  },

  jobList: {
    listStyle: 'none'
  },

  jobListItem: {
    padding: '0.5rem 0.75rem',
    margin: '0.5rem',
    borderRadius: 'var(--border-radius)',
    transition: 'var(--transition)',
    cursor: 'pointer',
    '&::selection': {
      background: 'none',
      color: 'inherit'
    },
    '&:hover': {
      background: 'var(--dark-gray)'
    }
  },

  jobListItemActive: {
    background: 'var(--primary)',
    color: 'var(--white)',
    '&:hover': {
      background: 'var(--primary)',
      color: 'var(--white)'
    }
  }
});

const Experiences: React.FC = () => {
  const classes = useStyles();

  const history = [
    {
      position: "Programmer/Programmer Analyst",
      company: "Publix Super Markets",
      startDate: "March 2020",
      endDate: "Present",
      description: [
        "Implemented proof of concepts for API Health Checks, and Kafka",
        "Containerized microservices for local development and testing using Docker",
        "Designed UML models and Sequence Diagrams to document and communicate design of features",
        "Built webpages using Telerik UI & Razor Pages and mobile application using Xamarin",
        "Created normalized tables for the existing system to increase integrity and reduce redundancy",
        "Developed the Persistence layer for a service using Entity Framework Core with a SQL Server",
        "Improved pull requests process by creating PR templates, rules, and pipelines for continuous integration",
      ]
    },
    {
      position: "Software Engineer",
      company: "Lurik Labs",
      startDate: "September 2018",
      endDate: "March 2020",
      description: [
        "Built complex functional UI components using React Hooks, Bootstrap, and Styled Components",
        "Proposed using GatsbyJS to create static sites to improve site performance and scalability",
        "Connected GatsbyJS with Contentful’s CMS to query data using GraphQL for non-developer use",
        "Created 3D Scene for the landing page using Three.js with custom interactive controls",
        "Mentored other developers on best practices in functional and class components, and lifecycles",
        "Collaborated with UI/UX team to create the new design for the landing page",
        "Established CI/CD in Netlify using Contentful’s webhooks and GitHub code changes to trigger build/deploy actions"
      ]
    },
  ];

  const [activeJob, setActiveJob] = React.useState(0);

  const jobs = history.map((job, index) => {
    let isActiveJob = activeJob === index;
    let cssClasses = isActiveJob ? `${classes.jobListItem} ${classes.jobListItemActive}` : classes.jobListItem;

    return <li onClick={() => setActiveJob(index)} className={cssClasses}>{job.company}</li>
  });

  return (
    <section id="experience">
      <h2 className={classes.header}>Where I've Worked</h2>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <ul className={classes.jobList}>{jobs}</ul>
        </Grid>
        <Grid item xs={9}>
          <Experience job={history[activeJob]} />
        </Grid>
      </Grid>
    </section>
  )
}

export default Experiences;
