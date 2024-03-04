import { Grid, TextField, Button, Card, CardContent } from '@mui/material'
import React from 'react'

const Popup = () => {
   
    return (
        <div className='flex justify-center mt-20 '> 
          
          <Grid >
            <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto",boxShadow:" 10px 10px 42px 0px rgba(0, 0, 0, 0.75)"}}>
              <CardContent>
                <form >
                  <Grid container spacing={2}>
                    <Grid item xs={12} >
                      <TextField  label="Name" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12} >
                      <TextField  label="Project" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField type="text"  label="Project Allocation Date" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField type="varchar"  label="Allocated Project" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField type="text"  label="Billable/Non-Billable" variant="outlined" fullWidth required />
                    </Grid>
                    
                    <Grid item xs={12} >
                      <Button type="submit" variant="contained" color="primary" fullWidth>Update</Button>
                    </Grid>
    
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </div>
      );
    }

export default Popup