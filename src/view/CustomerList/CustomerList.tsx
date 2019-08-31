import * as React from 'react';
import { Layout, HeaderCell, EditCell } from './CustomerList.styles';

const EditableCell = ({ id, label, initialValue }) => {
  const [mode, setMode] = React.useState('view');
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    if (mode === 'edit') {
      input.current.focus();
    }
  }, [mode]);
  const input = React.useRef(null);

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

const renderCustomer = ({ firstName, lastName, dob }, idx) => [
  <EditableCell
    key={`${idx}.1`}
    id={idx}
    label="firstName"
    initialValue={firstName}
  />,
  <EditableCell
    key={`${idx}.2`}
    id={idx}
    label="lastName"
    initialValue={lastName}
  />,
  <EditableCell key={`${idx}.3`} id={idx} label="dob" initialValue={dob} />
];

const CustomerList = ({ customers }) => {
  return (
    <Layout>
      <HeaderCell>First Name</HeaderCell>
      <HeaderCell>Last Name</HeaderCell>
      <HeaderCell>Date of Birth</HeaderCell>
      {customers.map(renderCustomer)}
    </Layout>
  );
};

export default CustomerList;
