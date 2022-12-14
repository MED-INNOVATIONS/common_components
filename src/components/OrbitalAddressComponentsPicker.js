import React, { Component } from "react";
import { FormGroup, FormControl, Form } from 'react-bootstrap';
import PlacesAutocomplete, { geocodeByPlaceId } from "react-places-autocomplete";
import { toast } from "react-toastify";
import _ from "lodash";

class OrbitalAddressComponentsPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autoCompleteLocation: this.props.location,
            location: this.props.location,
            disabled:this.props.disabled
        }
        this.placeAutocomplete = React.createRef();


        this.onSelectCity = this.onSelectCity.bind(this);
        this.changeCity = this.changeCity.bind(this);
    }

    /*************************************************************************/
    /************************ RENDER *****************************************/
    /*************************************************************************/
    componentDidUpdate(nextProps) {
        if (nextProps.location != this.state.location) {
            this.setState({
                location: nextProps.location,
                autoCompleteLocation: nextProps.location
            });
        }

        if (nextProps.disabled != this.state.disabled) {
            this.setState({
                disabled: nextProps.disabled
            });
        }
        
    }

    /*************************************************************************/
    /************************ RENDER *****************************************/
    /*************************************************************************/
    onSelectCity(location, placeId) {
        var self = this;
        var { localization } = this.props;

        geocodeByPlaceId(placeId)
            .then((results) => {
                var data = results[0];
                if (data) {
                    var address_components = data.address_components;
                    self.setState({
                        autoCompleteLocation: location
                    }, () => {
                        self.props.onChange(address_components);
                    })
                } else {
                    console.error("No data");
                    toast.error(localization.error || "Error");
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error(localization.error || "Error");
            })
    };

    changeCity(autoCompleteLocation) {
        this.setState({ autoCompleteLocation }, () => {
            if (_.isEmpty(autoCompleteLocation) == true) {
                this.props.onChange([]);
            }
        })
    }

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
        var { autoCompleteLocation,disabled } = this.state;
        var { localization, error } = this.props;

        return (
            <PlacesAutocomplete
                ref={this.placeAutocomplete}
                value={autoCompleteLocation || ""}
                onChange={this.changeCity}
                onSelect={this.onSelectCity}>
                {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                    <div>
                        <FormGroup style={{ width: "100%" }}>
                            <FormControl
                                isInvalid={error}
                                {...getInputProps({
                                    placeholder: localization.searchPlaces || "Search places",
                                    style: { marginBottom: 10 },
                                    disabled:disabled
                                })}
                                value={autoCompleteLocation || ""}>
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
                                    <div key={index}
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style
                                        })}>
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        )
    }
}
export default OrbitalAddressComponentsPicker;