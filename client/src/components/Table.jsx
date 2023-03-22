import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

function descendingComparator(a, b, orderBy) {
 
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)

function stableSort(array, comparator) {
  
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}



function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  let [t, i18n] = useTranslation();
  const headCells = [
  
    { 
      
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: t('UserName'),
    },
    {
      id: 'email',
      numeric: false,
      disablePadding: true,
      label: t('Email'),
    },
    {
      id: 'phone',
      numeric: false,
      disablePadding: true,
      label: t('Phone Number'),
    },
    {
      id: 'role',
      numeric: false,
      disablePadding: true,
      label: t('Role'),
    },
  ];

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            color='success'
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
            {/* <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel> */}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  //   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  //   orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  let [t, i18n] = useTranslation();
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color='red'
          variant='subtitle1'
          component='div'
        >
          {numSelected}  {t("selected")}
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%', color: 'indigo' }}
          variant='h4'
          id='tableTitle'
          component='div'
        >
         {t("All Users")}
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title='Delete'>
          <IconButton sx={{ color: 'indigo' }}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title='Filter list'>
          <IconButton sx={{ color: 'indigo' }}>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [StudentData, setStudent] = useState([]);
  React.useEffect(() => {
    const getStudents = async () => {
      const students = await axios.get('/student');
      const instructors = await axios.get('/instructor');
      setStudent([...students.data, ...instructors.data]);
    };

    getStudents();
  }, []);
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = StudentData.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - StudentData.length) : 0;
    let [t, i18n] = useTranslation();
  return (
    <Box sx={{ width: '100%' }} id='theBox'>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <React.Suspense fallback={<h1>{t("Loading...")}</h1>}>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby='tableTitle'
              size={dense ? 'small' : 'medium'}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={StudentData.length}
              />
              <TableBody>
                {stableSort(StudentData, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((student, index) => {
                    const isItemSelected = isSelected(student._id);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        hover
                        onClick={(event) => handleClick(event, student._id)}
                        role='checkbox'
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={student.name}
                        selected={isItemSelected}
                      >
                        <TableCell padding='checkbox'>
                          <Checkbox
                            color='success'
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                          />
                        </TableCell>
                        <TableCell
                          component='th'
                          id={labelId}
                          scope='row'
                          padding='none'
                        >
                          {student.firstName} {student.lastName}
                        </TableCell>
                        <TableCell
                          component='th'
                          id={labelId}
                          scope='row'
                          padding='none'
                        >
                          {student.email}
                        </TableCell>

                        <TableCell
                          component='th'
                          id={labelId}
                          scope='row'
                          padding='none'
                        >
                          {student.phone}
                        </TableCell>
                        <TableCell
                          component='th'
                          id={labelId}
                          scope='row'
                          padding='none'
                        >
                          {t(`${student.role}`)}
                          {/* {t(`${userData.role}`)} */}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: (dense ? 33 : 53) * emptyRows,
                    }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </React.Suspense>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={StudentData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ color: 'indigo' }}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label={t('Dense padding')}
        sx={{ color: 'indigo' }}
      />
    </Box>
  );
}
