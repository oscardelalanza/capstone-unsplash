import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState({ search: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(this.state.search);
  }

  render() {
    const { value } = this.state;

    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormControl type="text" placeholder="Search" className="mr-lg-2" onChange={this.handleChange} value={value} />
        <Button variant="outline-primary" type="submit">Search</Button>
      </Form>
    );
  }
}

export default FilterForm;
