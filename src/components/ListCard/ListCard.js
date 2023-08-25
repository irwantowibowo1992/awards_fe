import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './ListCard.css';

const ListCard = ({ item }) => {
  return (
    <Card variant="outlined" className="home_card_container" key={item.id}>
      <div className="card_media">
        <div className="card_image_header">
          <LazyLoadImage
            alt="image"
            effect="blur"
            delayTime={3000}
            src={item.image}
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
      </div>
      <CardContent>
        <span className="card_content">{item.title}</span>
      </CardContent>
    </Card>
  );
};

export default ListCard;
