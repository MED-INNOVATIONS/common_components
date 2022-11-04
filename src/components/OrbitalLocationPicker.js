import React, { Component } from "react";
import { Row, Col, FormGroup, FormControl, Form } from 'react-bootstrap';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import LocationPicker from "react-location-picker";
import styled from "styled-components";
import _ from "lodash";

// import { MandatoryFieldLabel, NormalFieldLabel, Tooltip } from "orbital_common_components";

import Tooltip  from "./Tooltip";
import MandatoryFieldLabel from "../MandatoryFieldLabel/mandatoryFieldLabel";
import NormalFieldLabel from "./NormalFieldLabel";

// import "./orbitalLocationPicker.css"

// .info_icon{
//     color: #007bff;
//     font-size: 0.7rem;
//     margin-bottom: 0.35rem;
// }

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: #007bff;
    font-size: 0.7rem;
    margin-bottom: 0.35rem;
`;

const OrbitalInfoIcon = (props) => {
    return <div><StyledFontAwesomeIcon {...props}></StyledFontAwesomeIcon></div>
}

const google = window.google;
const addressComponentType = "administrative_area_level_3";
const defaultCircleOptions = {
    fillColor: "red",
    fillOpacity: 0.0,
    strokeColor: "red",
    strokeOpacity: 0,
    strokeWeight: 1.2
};
const defaultLatLong = {
    lat: 41.9028,
    lng: 12.4964
};

class OrbitalLocationPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: this.props.position || defaultLatLong,
            address: this.props.address,
            autoCompleteAddress: this.props.address,
            city: this.props.city
        }
        this.placeAutocomplete = React.createRef();
        this.map = React.createRef();

        this.changeAddress = this.changeAddress.bind(this);
        this.onSelectAddress = this.onSelectAddress.bind(this);
    }

    /*************************************************************************/
    /************************** FUNCTIONS ************************************/
    /*************************************************************************/
    getCity(coordinates) {
        return new Promise(function (resolve, reject) {
            try {
                var geocoder = new google.maps.Geocoder();
                var lat = coordinates.lat;
                var lng = coordinates.lng;
                var latlng = new google.maps.LatLng(lat, lng);
                geocoder.geocode({ latLng: latlng }, function (results, status) {
                    if (status == "OK") {
                        var firstResult = results[0];
                        var address_components = firstResult.address_components;
                        var addressComponent = _.find(address_components, (component) => {
                            var types = component.types;
                            if (types.indexOf(addressComponentType) != -1) {
                                return component;
                            }
                        })
                        var city = addressComponent.long_name;
                        resolve(city);
                    } else {
                        console.error("status - ", status);
                        reject(`Error getting 'city' from coordinates (${lat}, ${lng})`);
                    }
                })
            } catch (error) {
                reject(error);
            }
        })
    }

    changeAddress(autoCompleteAddress) {
        this.setState({ autoCompleteAddress }, () => {
            if (_.isEmpty() == true) {
                this.props.onChange({
                    address: null,
                    position: {},
                    city: null
                })
            }
        });
    };

    onSelectAddress(address) {
        var self = this;
        var { localization } = this.props;

        var city = null;
        var position = null;
        geocodeByAddress(address)
            .then((results) => {
                var data = results[0];
                if (data) {
                    return getLatLng(data);
                }
            })
            .then((data) => {
                position = data;
                return self.getCity(position);
            })
            .then((data) => {
                city = data;

                self.setState({
                    address: address,
                    autoCompleteAddress: address,
                    position: position,
                    city: city
                }, () => {
                    self.props.onChange({
                        address: address,
                        position: position,
                        city: city
                    })
                })
            })
            .catch((error) => {
                console.error(error);
            })
    };

    /*************************************************************************/
    /************************ RENDER *****************************************/
    /*************************************************************************/
    getAutoCompleteClassname(suggestion) {
        var className = suggestion.active ? "suggestion-item--active" : "suggestion-item";
        return className;
    }

    getAutoCompleteStyle(suggestion) {
        var backgroundColor = suggestion.active ? "#fafafa" : "#ffffff";
        var style = { "backgroundColor": backgroundColor, "cursor": "pointer" };
        return style;
    }

    render() {
        var self = this;
        var { position, autoCompleteAddress, city } = this.state;
        var { localization, error, mandatory } = this.props;
        var { lat, lng } = position || {};

        var tooltip = localization.cityDoesNotModifyAddress || "Changing the city does not affect the address; viceversa the city will change";
        // var cityLabel = <span> {localization.city || "City"} <Tooltip tooltip={tooltip}><FontAwesomeIcon className="info_icon" icon={faInfoCircle} /></Tooltip></span>
        var cityLabel = <span> {localization.city || "City"} <Tooltip tooltip={tooltip}><OrbitalInfoIcon icon={faInfoCircle} /></Tooltip></span>

        return (
            <div>
                <Row>
                    <Col sm={5}>
                        {mandatory == false &&
                            <NormalFieldLabel value={localization.address || "Address"}></NormalFieldLabel>
                        }
                        {(mandatory == null || mandatory == true) &&
                            <MandatoryFieldLabel value={localization.address || "Address"}></MandatoryFieldLabel>
                        }
                    </Col>
                    <Col sm={2}>
                        {mandatory == false &&
                            <NormalFieldLabel value={localization.lat || "Lat"}></NormalFieldLabel>
                        }
                        {(mandatory == null || mandatory == true) &&
                            <MandatoryFieldLabel value={localization.lat || "Lat"}></MandatoryFieldLabel>
                        }
                    </Col>
                    <Col sm={2}>
                        {mandatory == false &&
                            <NormalFieldLabel value={localization.lon || "Lon"}></NormalFieldLabel>
                        }
                        {(mandatory == null || mandatory == true) &&
                            <MandatoryFieldLabel value={localization.lon || "Lon"}></MandatoryFieldLabel>
                        }
                    </Col>
                    <Col sm={3}>
                        {mandatory == false &&
                            <NormalFieldLabel value={localization.city || "City"}></NormalFieldLabel>
                        }
                        {(mandatory == null || mandatory == true) &&
                            <MandatoryFieldLabel value={cityLabel}></MandatoryFieldLabel>
                        }
                    </Col>
                </Row>
                <Row>
                    <Col sm={5}>
                        <PlacesAutocomplete
                            ref={this.placeAutocomplete}
                            value={autoCompleteAddress || ""}
                            onChange={this.changeAddress}
                            onSelect={this.onSelectAddress}>
                            {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                                <div>
                                    <FormGroup style={{ width: "100%" }}>
                                        <FormControl
                                            isInvalid={error}
                                            {...getInputProps({
                                                placeholder: localization.searchPlaces || "Search places",
                                                style: { marginBottom: 10 }
                                            })}
                                            value={autoCompleteAddress || ""}>
                                        </FormControl>
                                        <Form.Control.Feedback type="invalid">
                                            {localization.completeField || "Please complete the field"}
                                        </Form.Control.Feedback>
                                    </FormGroup>
                                    <div className="autocomplete-dropdown-container">
                                        {suggestions.map((suggestion, index) => {
                                            var className = self.getAutoCompleteClassname(suggestion);
                                            var style = self.getAutoCompleteStyle(suggestion);
                                            return (
                                                <div
                                                    key={index}
                                                    {...getSuggestionItemProps(suggestion, {
                                                        className,
                                                        style
                                                    })}>
                                                    <span key={index}>{suggestion.description}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </PlacesAutocomplete>
                    </Col>
                    <Col sm={2}>
                        <FormControl
                            placeholder={localization.lat || "Lat"}
                            value={lat || ""}
                            disabled={true}>
                        </FormControl>
                    </Col>
                    <Col sm={2}>
                        <FormControl
                            placeholder={localization.lon || "Lon"}
                            value={lng || ""}
                            disabled={true}>
                        </FormControl>
                    </Col>
                    <Col sm={3}>
                        <FormControl
                            placeholder={localization.city || "City"}
                            value={city || ""}
                            onChange={(e) => {
                                var value = e.target.value;
                                this.setState({ city: value })
                                if (this.props.onChangeCity) {
                                    this.props.onChangeCity(value);
                                }
                            }}>
                        </FormControl>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <LocationPicker
                            zoom={15}
                            ref={this.map}
                            circleOptions={defaultCircleOptions}
                            containerElement={<div className="mapContainer" />}
                            mapElement={position ? <div style={{ height: "250px" }} /> : <div style={{ height: "250px" }} />}
                            defaultPosition={position || defaultLatLong}
                            onChange={(locationPicker) => {
                                var address = locationPicker.address;
                                this.onSelectAddress(address);
                            }}
                            options={{ gestureHandling: "cooperative" }}>
                        </LocationPicker>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default OrbitalLocationPicker;