import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Suspense } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/header/header';
import CardWithImage from '../components/CardWithImage';
const SearchPage = () => {
  const { search } = useLocation();
  const [searchOutput, setSearchOutput] = useState([]);
  useEffect(() => {
    const getSearch = async () => {
      const { data: output } = await axios.get('/course');
      setSearchOutput(
        output.filter((course) =>
          course.name.toLowerCase().includes(search.substring(1).toLowerCase())
        )
      );
    };
    getSearch();
  }, []);
  useEffect(() => {
    console.log(searchOutput);
  }, [searchOutput]);
  return (
    <div>
      <Header />
      <h1 style={{ textAlign: 'center', margin: '10px' }}>
        Results for: {search.substring(1)}
      </h1>
      <Suspense fallback={<h1>loading...</h1>}>
        <Container
          maxWidth='xl'
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            justifyContent: 'center',
          }}
        >
          {searchOutput.length > 0 ? (
            searchOutput.map((course) => (
              <CardWithImage
                title={course.name}
                id={course._id}
                description={course.description}
                image={course.image}
              ></CardWithImage>
            ))
          ) : (
            <h2>Nothing was found</h2>
          )}
        </Container>
      </Suspense>
    </div>
  );
};

export default SearchPage;
