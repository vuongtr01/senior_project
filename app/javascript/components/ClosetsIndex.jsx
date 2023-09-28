import React from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ClosetsIndex = () => {
    const data = [
        {
            name: 'Food',
            numItems: 20,
        },
        {
            name: 'Clothes',
            numItems: 5
        },
        {
            name: "Cards",
            numItems: 50
        }
    ];

    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
        },
      ];

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
            {data.map((d) => (
                <Grid item xs={6} md={3}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <ImageList sx={{ width: 300, height: 200 }} cols={1} rowHeight={164} justifyContent="center">
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img}>
                                    <img
                                        srcSet={`${item.img}?w=164&h=105&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.img}?w=164&h=105&fit=crop&auto=format`}
                                        alt={item.title}
                                        loading="lazy"
                                        href = {`/id/closets/${item.title}`}
                                    />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                            <Typography variant="h5" component="div" align="center">
                                {d.name}
                            </Typography>
                            <Typography variant="body2" align="center">
                                {d.numItems} Items
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ClosetsIndex;