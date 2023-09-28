import React, { useEffect, useState } from "react";
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ListCloset = () => {
    const [closets, setClosets] = useState([]);
    const fetchClosets = async() => {
        const { data } = await axios({
            url: `/closets`,
            headers: { 'Accept': 'application/json' }
          });
        setClosets(data);
    }

    const itemData = [
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
        },
      ];

    useEffect(() => {
        fetchClosets();
      }, []);
    console.log(closets);
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center">
            {closets.map((d) => (
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
                                {d.category}
                            </Typography>
                            <Typography variant="body2" align="center">
                                {d.count_items} Items
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ListCloset;
