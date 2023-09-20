import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const ClosetsIndex = () => {
    const data = [
        {
            name: 'Food',
            numItems: 2,
        },
        {
            name: 'Clothes',
            numItems: 10
        },
    ];

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {data.map((d) => (
                <Grid item xs={6} md={3}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {d.name}
                            </Typography>
                            <Typography variant="body2">
                                has {d.numItems}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ClosetsIndex;
