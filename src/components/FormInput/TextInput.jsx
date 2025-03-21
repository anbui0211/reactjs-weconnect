import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const TextInput = ({ onChange, name, value, type = 'text' }) => {
  return (
    <TextField name={name} onChange={onChange} value={value} type={type} />
  );
};

TextInput.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
};

export default TextInput;
