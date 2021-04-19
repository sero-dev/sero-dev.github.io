import * as React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    marginTop: '0.5rem'
  },

  descriptionList: {
    marginTop: '1.5rem',
    paddingLeft: '1rem'
  }
});

interface PropTypes {
  job: {
    position: string,
    company: string,
    startDate: string,
    endDate: string,
    description: string[]
  }
}

const Experience: React.FC<PropTypes> = ({job}) => {
  const classes = useStyles();
  const descriptionItems = job.description.map(description => {
    return <li>{description}</li>
  })

  return (
    <div className={classes.root}>
      <h3>{job.position}</h3>
      <p>{job.startDate} - {job.endDate}</p>
      <ul className={classes.descriptionList}>
        {descriptionItems}
      </ul>
    </div>
  )
}

export default Experience;
