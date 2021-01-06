import * as React from 'react';
import { mt2, mt4, pl3 } from 'bootstrap/dist/css/bootstrap-grid.css';

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
  const descriptionItems = job.description.map(description => {
    return <li>{description}</li>
  })

  return (
    <div className={mt2}>
      <h3>{job.position}</h3>
      <p>{job.startDate} - {job.endDate}</p>
      <ul className={`${mt4} ${pl3}`}>
        {descriptionItems}
      </ul>
    </div>
  )
}

export default Experience;
