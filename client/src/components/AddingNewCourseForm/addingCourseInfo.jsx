import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
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
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { useSelector } from 'react-redux';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { useTranslation } from 'react-i18next';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Communication',
  'Customer Service',
  'Sales & Marketing',
  'Leadership and Management Training',
  'Programing',
  'Web Development',
  'Data Analytics',
  'Data Science',
  'Healthcare',
  'Psychology and Forensics',
  'History'
];
function getStyles(catName, catigoryName, theme) {
  return {
    fontWeight:
      catigoryName.indexOf(catName) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function AddingCourseInfoForm({
  categories,
  description,
  level,
  whatYouWillLearn,
  updateCourseInfo,
}) {
  const handleChange = (event) => {
    updateCourseInfo((prev) => {
      return { ...prev, level: event.target.value };
    });
  };

  const theme = useTheme();
  const [catigoryName, setCatigoryName] = React.useState([]);

  const handleSelection = (event) => {
    const {
      target: { value },
    } = event;
    console.log("inside Event selectio: ", event.target.value)
    setCatigoryName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const updateWhatYouWillLearn = (index) => (e) => {
    const updatedState = [...whatYouWillLearn];
    updatedState.splice(index, 1, {
      ...updatedState[index],
      [e.target.name]: e.target.value,
    });
    updateCourseInfo((prev) => ({ ...prev, whatYouWillLearn: updatedState }));
  };
  let [t, i18n] = useTranslation();
  return (
    <React.Fragment>
      <Box component='form' noValidate sx={{ mt: 3 }}>
        {/* adding new course info */}
        <Typography variant='h6' gutterBottom textAlign={'center'}>
          {t("Adding Course Details")}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={12} padding={3} textAlign={'center'}>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id='demo-multiple-chip-label'>{t("Category")}</InputLabel>
              <Select
                labelId='demo-multiple-chip-label'
                id='demo-multiple-chip'
                multiple
                value={catigoryName}
                onChange={handleSelection}
                input={
                  <OutlinedInput id='select-multiple-chip' label='Catigory' />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, catigoryName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {/* course info description */}
          <Grid item xs={12} padding={3}>
            <TextField
              required
              id='courseDescription'
              value={description}
              name='courseDescription'
              label={t("Please enter course description")}
              fullWidth
              variant='standard'
              onChange={(e) => {
                updateCourseInfo((pre) => {
                  return { ...pre, description: e.target.value };
                });
              }}
            />
            {!description && (
              <label style={{ color: '#ff0000' }}>
                {t("Course description is required! and more than 50 characters")}
              </label>
            )}
          </Grid>
          {/* course info level */}
          <Grid item xs={12} textAlign='center' padding={3}>
            <FormControl>
              <Typography variant='h6' gutterBottom>
               {t("Course Level")} 
              </Typography>
              <RadioGroup
                aria-labelledby='demo-controlled-radio-buttons-group'
                row={true}
                name='controlled-radio-buttons-group'
                value={level}
                onChange={handleChange}
              >
                <FormControlLabel
                  value='Beginner'
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
                  label={t("Beginner")}
                />
                <FormControlLabel
                  value='Intermediate'
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
                  label={t("Intermediate")}
                />
                <FormControlLabel
                  value='Advanced'
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
                  label={t("Advanced")}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {/* coursse info what you will learn */}
          <Grid item xs={12} textAlign='center' padding={3}>
            <Typography variant='h6' gutterBottom>
              {t("What you will learn in the course")}
            </Typography>
            {whatYouWillLearn?.map((item, index) => {
              return (
                <Grid container spacing={3} key={index}>
                  {/* course info title */}
                  <Grid item xs={12} lg={12} padding={3}>
                    <TextField
                      required
                      id='whatYouWillLearnTitle'
                      value={item.title}
                      name='title'
                      label={t("Please enter Title")}
                      fullWidth
                      variant='standard'
                      onChange={updateWhatYouWillLearn(index)}
                    />
                  </Grid>
                  {/* course onfo description */}
                  <Grid item xs={12} lg={12} padding={3}>
                    <TextareaAutosize
                      aria-label='empty textarea'
                      name='description'
                      value={item.description}
                      placeholder={t("Enter what you will learn in details , please")}
                      style={{ width: '50%' }}
                      onChange={updateWhatYouWillLearn(index)}
                    />
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
