import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

const FormField = ({ control, label, name, type, Component }) => {
  return (
    <div>
      <p className="text-dark-100 mb-1 text-sm font-bold">{label}</p>
      <Controller
        name={name}
        control={control}
        // render={({ field }) => Component({ ...field })}
        render={({ field: { onChange, value, name } }) => {
          return (
            <Component
              onChange={onChange}
              name={name}
              value={value}
              type={type}
              control={control}
            />
          );
        }}
      />
    </div>
  );
};

FormField.propTypes = {
  control: PropTypes.any,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  Component: PropTypes.any,
};

export default FormField;
