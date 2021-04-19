import * as React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

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
    return <Typography variant='body1' component='li'>{description}</Typography>
  })

  return (
    <div className={classes.root}>
      <Typography variant='h6' component='h3'>{job.position}</Typography>
      <Typography variant='body1' component='p'>{job.startDate} - {job.endDate}</Typography>
      <ul className={classes.descriptionList}>
        {descriptionItems}
      </ul>
    </div>
  )
}

export default Experience;
