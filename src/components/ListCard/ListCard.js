import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ListCard = ({ item }) => {
  return (
    <Card variant="outlined" className="home_card_container" key={item.id}>
      <div className="card_media">
        <LazyLoadImage
          alt="image"
          effect="blur"
          delayTime={3000}
          src={
            'https://images.unsplash.com/photo-1682686581556-a3f0ee0ed556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80'
          }
          className="card_image"
        />
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
          className="home_tag"
          style={{ backgroundColor: 'orange' }}
        >
          {item.awardCategory}
        </Typography>
        <Typography variant="h5" component="div" className="home_point">
          {Number(item.point).toLocaleString('en-US')} Points
        </Typography>
      </div>
      <CardContent>
        <span className="card_content">{item.title}</span>
      </CardContent>
    </Card>
  );
};

export default ListCard;
