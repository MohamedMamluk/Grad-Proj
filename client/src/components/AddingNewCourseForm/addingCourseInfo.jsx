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
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

export default function AddingCourseInfoForm() {

    const authSelector = useSelector((state) => state.auth.token);
    // const navigate = useNavigate();
    const [data, setData] = React.useState({
        categories: [''],
        description: '',
        level:'', //radioButtons
        whatYouWillLearn:[{title:'',description:''}],
      });
      

    const handleChange = (event) => {
        setData((prev) => {
          return { ...prev, paid: event.target.value };
        });
      };

    //   const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios
    //       .post('', data)
    //       .then((res) => {
    //         navigate('');
    //         console.log(res.data);
    //       })
    //       .catch((err) => console.log(err));
    //   };

    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
  
    const handleSelection = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };

    const updateWhatYouWillLearn = (index) => (e) => {
        const updatedState = [...data.whatYouWillLearn];
        updatedState.splice(index, 1, {
          ...updatedState[index],
          [e.target.name]: e.target.value,
        });
        setData((prev) => ({ ...prev, whatYouWillLearn: updatedState }));
      };

  return (
    <React.Fragment>
        <Box
              component='form'
              noValidate
            //   onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
      <Typography variant="h6" gutterBottom textAlign={'center'}>
        Adding Course Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={12} padding={3} textAlign={'center'}>
        <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Catigory</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleSelection}
          input={<OutlinedInput id="select-multiple-chip" label="Catigory" />}
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
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12} padding={3}>
          <TextField
            required
            id="courseDescription"
            value={data.description}
            name="courseDescription"
            label="Please enter course description"
            fullWidth
            variant="standard"
            onChange={(e)=>{setData((pre)=>{
              return {...pre , description:e.target.value}
            })}}
          />
          {!data.description && <label
          style={{color:'#ff0000'}}
        >
          Course description is required! and more than 50 characters!
          </label>
        }
        </Grid>
    
        <Grid item xs={12} textAlign="center" padding={3}>
                  <FormControl>
                  <Typography variant="h6" gutterBottom>
        Course Level*
      </Typography>
                    <RadioGroup
                      aria-labelledby='demo-controlled-radio-buttons-group'
                      row={true}
                      name='controlled-radio-buttons-group'
                      value={data.level}
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
                        label='Beginner'
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
                        label='Intermediate'
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
                        label='Advanced '
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} textAlign="center" padding={3}>
                <Typography variant="h6" gutterBottom>
        What you will learn from the course
      </Typography>
      {data.whatYouWillLearn.map((item,index)=>{
        return (<Grid container spacing={3} key={index}>
            <Grid item xs={12} lg={12} padding={3}> 
            <TextField
        required
        id="whatYouWillLearnTitle"
        value={item.title}
        name="title"
        label="Please enter Tilte"
        fullWidth
        variant="standard"
        onChange={updateWhatYouWillLearn(index)}
        
      />
      </Grid>
      <Grid item xs={12} lg={12} padding={3}>
      <TextareaAutosize
      aria-label="empty textarea"
      name='description'
      value={item.description}
      placeholder="Enter what you will learn, please"
      style={{ width: '50%' }}
      onChange={updateWhatYouWillLearn(index)}

    />
    </Grid>
    </Grid>)
      })}
                
                </Grid>
      </Grid>
      </Box>
    </React.Fragment>
  );
}