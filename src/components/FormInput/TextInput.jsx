import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const TextInput = ({ onChange, name, value, type = 'text', error }) => {
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
      error={error} // show border in red if there is an error
    />
  );
};

TextInput.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.object,
  type: PropTypes.string,
};

export default TextInput;
