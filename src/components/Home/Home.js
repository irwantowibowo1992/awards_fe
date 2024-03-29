import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InfiniteScroll from 'react-infinite-scroll-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import axios from 'axios';
import url from '../../utils/Api';
import './Home.css';
import ListCard from '../ListCard/ListCard';

import { useFilter } from '../../context/FilterContext';

const Home = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const { filter, setFilter } = useFilter();

  const fetchMoreData = async () => {
    try {
      const response = await axios.get(
        `${url}/awards?page=${page}&limit=10&pointFrom=${filter.pointFrom}&pointTo=${filter.pointTo}&category=${filter.category}`,
        {
          headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
        {
          params: filter,
        }
      );
      const newData = response.data.data.results;

      if (newData.length === 0) {
        setHasMore(false);
      } else {
        setItems([...items, ...newData]);
        setPage(page + 1);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchMoreData();
  }, [filter]);

  if (hasMore) {
    console.log('Has more berjalan');
  } else {
    console.log('Has more sudah berhenti');
  }

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={
        <h4
          style={{
            alignItems: 'center',
            backgroundColor: 'red',
            height: '300px',
            width: '100vw',
          }}
        >
          Loading......
        </h4>
      }
    >
      <div className="home">
        {items.length === 0 ? (
          <h3>No Data Found...</h3>
        ) : (
          <Grid container columnSpacing={2} rowSpacing={2}>
            {items.map((item) => (
              <Grid item md={6} lg={6}>
                <Box>
                  <ListCard item={item} />
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </InfiniteScroll>
  );
};

export default Home;
