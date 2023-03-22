import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
export default function AddingLessonForm({
  type,
  title,
  link,
  description,
  index,
  updateState,
}) {
  const authSelector = useSelector((state) => state.auth.token);
  // const navigate = useNavigate();
  // //console.log(type, title, link, description, index, updateState);
  const [data, setData] = React.useState({});

  const handleChange = (event) => {
    setData((prev) => {
      return { ...prev, type: event.target.value };
    });
  };
  let [t, i18n] = useTranslation();
  return (
    <React.Fragment>
      <Box component='form' noValidate sx={{ mt: 3 }}>
        <Typography variant='h6' gutterBottom>
          {t("Lesson")} #{index + 1}
        </Typography>
        {/* Lessons Form Input container */}
        <Grid container spacing={3}>
          {/* Lesson types */}
          <Grid item xs={12} textAlign='center'>
            <FormControl>
              <Typography variant='h6' gutterBottom>
                {t("Lesson type")}
              </Typography>
              <RadioGroup
                aria-labelledby='demo-controlled-radio-buttons-group'
                row={true}
                name='type'
                value={type}
                onChange={updateState}
              >
                <FormControlLabel
                  value='Video'
                  control={
                    <Radio
                      sx={{
                        color: '#3f51b5',
                        '&.Mui-checked': {
                          color: '#3f51b5',
                        },
                      }}
                    />
                  }
                  label={t("Video")}
                />
                <FormControlLabel
                  value='Test'
                  control={
                    <Radio
                      sx={{
                        color: '#3f51b5',
                        '&.Mui-checked': {
                          color: '#3f51b5',
                        },
                      }}
                    />
                  }
                  label={t("Test")}
                />
                <FormControlLabel
                  value='Resources'
                  control={
                    <Radio
                      sx={{
                        color: '#3f51b5',
                        '&.Mui-checked': {
                          color: '#3f51b5',
                        },
                      }}
                    />
                  }
                  label={t("Resources")}
                />
                <FormControlLabel
                  value='Certificate'
                  control={
                    <Radio
                      sx={{
                        color: '#3f51b5',
                        '&.Mui-checked': {
                          color: '#3f51b5',
                        },
                      }}
                    />
                  }
                  label={t("Certificate")}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {/* Lesson Title */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='lessonTitle'
              name='title'
              label={t("Lesson title")}
              value={title}
              onChange={updateState}
              fullWidth
              autoComplete='given-name'
              variant='standard'
            />
          </Grid>
          {/* Lesson Link */}

          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='lessonLink'
              error={''.length > 0 ? true : false}
              name='link'
              label={t("Lesson Link")}
              value={link}
              fullWidth
              onChange={updateState}
              autoComplete='given-name'
              variant='standard'
            />
          </Grid>
          {/* Lesson Description */}

          <Grid item xs={12}>
            <TextField
              required
              id='lessonDescription'
              value={description}
              name='description'
              label={t("Lesson Description")}
              fullWidth
              multiline
              onChange={updateState}
              rows={4}
              variant='standard'
            />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
