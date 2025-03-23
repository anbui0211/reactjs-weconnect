import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const TextInput = ({ onChange, name, value, type = 'text' }) => {
  return (
    <TextField
      fullWidth
      // customize the input MUI component
      slotProps={{
        input: { className: 'h-10 px-3 py-2' },
        htmlInput: { className: '!p-0' },
      }}
      name={name}
      onChange={onChange}
      value={value}
      type={type}
    />
  );
};

TextInput.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
};

export default TextInput;
