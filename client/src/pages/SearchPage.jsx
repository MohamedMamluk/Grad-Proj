import { Container } from '@mui/system';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/header/header';
import CardWithImage from '../components/CardWithImage';
import Loader from '../components/loading/loading';
import { useTranslation } from 'react-i18next';
const ShowData = ({ searchInput }) => {
  
  const [searchOutput, setSearchOutput] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getSearch = async () => {
      setLoading(true);
      const { data: output } = await axios.get('/course');
      setLoading(false);

      setSearchOutput(
        output.filter((course) =>
          course.name
            .toLowerCase()
            .includes(searchInput.substring(1).toLowerCase())
        )
      );
    };
    getSearch();
  }, [searchInput]);
  if (loading) {
    return (
      <div maxWidth='xl' className='border border-red-500 w-max'>
        <Loader />
      </div>
    );
  }
  return (
    <Container
      maxWidth='xl'
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'center',
      }}
    >
      {searchOutput.map((course) => (
        <CardWithImage
          title={course.name}
          id={course._id}
          description={course.description}
          image={course.image}
        ></CardWithImage>
      ))}
    </Container>
  );
};

const SearchPage = () => {
  const { search } = useLocation();
  let [t, i18n] = useTranslation();
  return (
    <div>
      <Header />
      <h1 style={{ textAlign: 'center', margin: '10px' }}>
       {t("Results for:")}  {search.substring(1)}
      </h1>
      <ShowData searchInput={search} />
    </div>
  );
};

export default SearchPage;
