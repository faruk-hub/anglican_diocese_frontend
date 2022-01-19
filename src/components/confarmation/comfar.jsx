import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';


const CardBox =styled.div`
background: rgb(244,120,81);
background: linear-gradient(
     27deg, 
    rgba(244,120,81,1) 36%,
   rgba(223,153,37,1) 97%);
`;

export default function MediaCard() {
  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardBox>
      <CardContent>
      
        <Typography gutterBottom variant="h5" component="div">
          Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Congratulations on ur sucessful regisration.
        </Typography>
      </CardContent>
      </CardBox>
    </Card>

  );
}
