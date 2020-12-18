import React, { useEffect, useState } from 'react'
import { Card, Grid, Typography } from '@material-ui/core';
import { emitterA, emitterB, emitterC, emitterD } from '../../events'
import { mainSequance, sequanceA, sequanceB, sequanceC, sequanceD } from '../../dashboardSequances'
import styles from './styles.module.css'

const Results = () => {
  const [dashboard, setDashboard] = useState<{ [key: string]: number }>()

  useEffect(() => {
    // subscribe on events
    emitterA.on('data', data => sequanceA.next(data));
    emitterB.on('data', data => sequanceB.next(data));
    emitterC.on('data', data => sequanceC.next(data));
    emitterD.on('data', data => sequanceD.next(data));
    mainSequance.subscribe(([A, B, C, D]: number[]) => setDashboard({ A, B, C, D }));
  }, [])

  return (
    <Grid container justify="center">
      <Grid item md={12} lg={10} >
        <Card>
          <Typography variant="h3" align="center" color="primary">
            Results
          </Typography>
          <Grid className={styles.card} container spacing={4} justify="center">
            {dashboard && Object.keys(dashboard).map(item =>
              <Grid item lg={3} key={item} >
                <Card className={styles.resultBlock} raised>
                  <Typography variant="h4" align="center" color="primary">
                    Sensor {item}:
                  </Typography>
                  <Typography variant="h4" align="center" color="secondary">
                    {dashboard[item]}
                  </Typography>
                </Card>
              </Grid>)}
          </Grid>
        </Card>
      </Grid>
    </Grid>

  );
}

export default Results