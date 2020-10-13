import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import changeFilter from '../actions/filterActions';

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
    const { changeFilter } = this.props;
    const { search } = this.state;
    changeFilter(search);
    this.setState({ search: '' });
  }

  render() {
    const { search } = this.state;

    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormControl type="text" placeholder="Search" className="mr-lg-2" onChange={this.handleChange} value={search} />
        <Button variant="outline-primary" type="submit">Search</Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => (dispatch(changeFilter(filter))),
});

FilterForm.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FilterForm);
