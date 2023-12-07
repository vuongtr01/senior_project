import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import withStyles from '@mui/styles/withStyles';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import { orange } from '@mui/material/colors';
import _isNull from 'lodash/isNull';
import AxiosHeaders from '../../helpers/AxiosHeaders';

const styles = theme => ({
  textField: {
    width: '100%',
    padding: '0px 16px',
  },
  helperText: {
    paddingLeft: '8px',
    color: orange[300],
    fontStyle: 'italic',
  },
});

const ClosetAutocomplete = (props) => {
  const {
    classes,
    value,
    setValue,
    disable,
  } = props;
  const [options, setOptions] = useState([]);
  const [inputValue, setInputValue] = useState(value ? value.label : '');
  const [errorText, setErrorText] = useState('');

  const fetchOptions = (_, key) => {
    const csrfToken = document.querySelector('meta[name=csrf-token]').getAttribute('content');
    axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;
    axios({
      url: '/closets/autocomplete',
      params: { key },
      headers: AxiosHeaders,
    }).then(({ data, status }) => {
      if (status === 200 && data.length > 0) {
        const closetsList = data.map((closet) => ({
            id: closet.id,
            value: closet.category,
            label: closet.category,
        }));
        setOptions(closetsList);
      }
    });
  };

  const filterOptions = allOptions => allOptions.filter(option => option.value);

  const handleSelect = (selected) => {
    setInputValue(selected ? selected.label : '');
    setErrorText('');
    setValue(selected);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Autocomplete
      fullWidth
      filterSelectedOptions
      disabled={disable}
      filterOptions={filterOptions}
      inputValue={inputValue}
      value={value}
      options={options}
      onInputChange={fetchOptions}
      onChange={(_, selected) => handleSelect(selected)}
      getOptionLabel={option => option.label}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      disablePortal
      renderInput={params => (
        <TextField
          {...params}
          className={classes.textField}
          variant="outlined"
          onChange={handleInputChange}
          InputProps={{
            ...params.InputProps,
          }}
          FormHelperTextProps={{
            ...params.FormHelperTextProps,
            className: classes.helperText,
          }}
          helperText={errorText}
        />
      )}
    />
  );
};

ClosetAutocomplete.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  value: PropTypes.instanceOf(Object),
  setValue: PropTypes.func.isRequired,
  disable: PropTypes.bool,
};

ClosetAutocomplete.defaultProps = {
    value: null,
    disable: false,
  };

export default withStyles(styles)(ClosetAutocomplete);
