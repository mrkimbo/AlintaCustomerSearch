import * as React from 'react';
import PropTypes from 'prop-types';
import { actions } from '../../store';
import { EditCell } from './EditableCell.styles';

const EditableCell = ({ id, field, initialValue }) => {
  const [mode, setMode] = React.useState('view');
  const [value, setValue] = React.useState(initialValue);
  const input = React.useRef(null);

  React.useEffect(() => {
    if (mode === 'edit') {
      input.current.focus();
      return;
    }

    // save to redux
    actions.updateCustomer(id, field, value);
  }, [mode, id, field, value]);

  const toggleMode = () => {
    const newMode = mode === 'view' ? 'edit' : 'view';
    setMode(newMode);
  };

  const onChange = (evt) => {
    setValue(evt.target.value);
  };

  const onKeyPress = ({ charCode }) => {
    if (charCode === 13) {
      toggleMode();
    }
  };

  if (mode === 'view') {
    return <div onClick={toggleMode}>{value}</div>;
  }

  return (
    <EditCell
      ref={input}
      type="text"
      onChange={onChange}
      onKeyPress={onKeyPress}
      onBlur={toggleMode}
      value={value}
    />
  );
};

EditableCell.propTypes = {
  id: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
  initialValue: PropTypes.string.isRequired
};

export default EditableCell;
