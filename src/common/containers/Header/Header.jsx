import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';

import countriesActions from 'Actions/countries';
import retailersActions from 'Actions/retailers';
import SelectCountry from 'Components/SelectCountry/SelectCountry';
import SelectRetailer from 'Components/SelectRetailer/SelectRetailer';
import UserMenu from 'Components/UserMenu/UserMenu';

class Header extends Component {
  constructor(props) {
    super(props);

    this._onSelectCountry = this._onSelectCountry.bind(this);
    this._onSelectRetailer = this._onSelectRetailer.bind(this);
    this._updateUrlCountry = this._updateUrlCountry.bind(this);
    this._updateUrlRetailer = this._updateUrlRetailer.bind(this);
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    countries: PropTypes.object.isRequired,
    retailers: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
  };

  componentDidUpdate(prevProps) {
    const { countries, retailers } = this.props;
    if (
      (prevProps.countries.selected.value || '') !==
      (countries.selected.value || '')
    ) { // country changed
      // export to function
      if (countries.selected.value) {
        this.props.dispatch(
          retailersActions.getFromCountry(countries.selected.value)
        );
      }
      this._updateUrlCountry();
    } else if (
      (prevProps.retailers.selected.name || '') !==
      (retailers.selected.name || '')
    ) { // retailer changed
      this._updateUrlRetailer();
    }
  }

  _onSelectCountry(country) {
    this.props.dispatch(countriesActions.select(country || {}));
  }

  _onSelectRetailer(retailer) {
    this.props.dispatch(retailersActions.select(retailer || {}));
  }

  _updateUrlCountry() {
    const { selected } = this.props.countries;
    const countryUrl = selected.value ? selected.label.toLowerCase() : '';
    window.history.replaceState(
      {},
      document.title,
      `/${countryUrl}`
    );
  }

  _updateUrlRetailer() {
    const { countries, retailers } = this.props;
    const countryUrl = countries.selected.value ? `/${countries.selected.label.toLowerCase()}` : '';
    const retailerUrl = retailers.selected.name ? `/${encodeURIComponent(retailers.selected.name)}` : '';
    window.history.replaceState(
      {},
      document.title,
      `${countryUrl}${retailerUrl}`
    );
  }

  render() {
    const { countries, retailers, auth } = this.props;
    const styles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    };

    return (
      <div>
        <AppBar position='static' color='primary'>
          <Toolbar style={styles}>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    countries: state.countries,
    retailers: state.retailers,
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Header);
