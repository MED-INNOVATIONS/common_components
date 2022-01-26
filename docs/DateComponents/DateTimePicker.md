# DateTime Picker

The component to take Date

## Properties
* <b>id</b>: id of component
* <b>format</b>: date format
* <b>timeFormat</b>: time format
* <b>name</b>: name
* <b>step</b>: Step of minutes selecting time
* <b>style</b>: custom style
* <b>value</b>: value
* <b>cssClass</b>: cssClass
* <b>enabled</b>: if the component is enabled

## Actions

* <b>change</b>: called anytime the value changes

## Example

<DateTimePicker
    d="StartTime"
    format="dd/MM/yy HH:mm"
    timeFormat={"HH:mm"}
    name="StartTime"
    step={10}
    style={{ fontSize: "1rem" }}
    change={(e) => {
        this.changeFromTime(e);
    }}
    data-name="StartTime"
    value={fromTime}
    cssClass={date_style}
    enabled={false}>
</DateTimePicker>