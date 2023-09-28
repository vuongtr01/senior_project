import React, { useEffect, useState } from "react";
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ListCloset = () => {
    const [closets, setClosets] = useState([]);
    const fetchClosets = async() => {
        const { data } = await axios({
            url: `/closets`,
            headers: { 'Accept': 'application/json' }
          });
        setClosets(data);
    }

    useEffect(() => {
        fetchClosets();
      }, []);
    // console.log(window.gon);
    console.log(closets);
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {closets.map((d) => (
                <Grid item xs={6} md={3}>
                    <Card >
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {d.category}
                            </Typography>
                            <Typography variant="body2">
                                has {d.count_items}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ListCloset;
