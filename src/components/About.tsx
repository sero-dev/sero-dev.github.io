import * as React from 'react';
import { Grid, Typography } from '@material-ui/core';

const About: React.FC = () => {

  return (
    <section id="about">
      <Typography variant='h5' component='h2'>About The Panda</Typography>
      <Grid container justify='center' spacing={4}>
        <Grid item xs={6}>
          <Typography variant='body1' component='p'>
            My name is Sean Rodriguez, also known as <strong>The Big Panda</strong>.
            <br/><br/>
            I find comfort in developing software for individuals and businesses alike. I discovered my passion for code during my first Computer Science course and ever since then I've enjoyed learning new technologies and applying them to new or existing projects. With each new technology, it seems like I go deeper down the rabbit hole, and I've enjoyed every moment of it.
            <br/><br/>
            Shortly after graduating from <strong>Queens College</strong>, I joined the development team at <strong>Publix Super Markets</strong>. Currently, I am a Programmer Analyst where I lead a Scrum Team to produce an Inventory solution using a microservice architecture.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img src="https://picsum.photos/500/400" />
        </Grid>
      </Grid>
    </section>
  )
}

export default About;
