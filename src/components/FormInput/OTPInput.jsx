import { MuiOtpInput } from 'mui-one-time-password-input';
import PropTypes from 'prop-types';
const OTPInput = ({ value, onChange }) => {
  return <MuiOtpInput length={6} value={value} onChange={onChange} />;
};

OTPInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default OTPInput;
