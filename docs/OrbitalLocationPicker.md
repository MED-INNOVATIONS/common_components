# Orbital Location Picker

The component is used to pick position by address

## Properties

* <b>localization</b>: takes the localization object (react-localization)
* <b>error</b>: (boolean) It indicates if the component is "in error" and the borders turn to red
* <b>city</b>: (string) It indicates the city
* <b>position</b>: (object) Object containing coordinates  {lat: 41.9028, lng: 41.9028}
* <b>address</b>: (string) It indicates the address

## Actions

* <b>onChange</b>: called anytime the value changes

## Example
<OrbitalLocationPicker
    localization={localization}
    error={errorLocation}
    city={city}
    position={position}
    address={address}
    onChange={this.changeLocation}>
</OrbitalLocationPicker>
