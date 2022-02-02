# React Table

The component to take Date

## Properties
* <b>id</b>: id of component
* <b>format</b>: date format
* <b>value</b>: data value
* <b>cssClass</b>: cssClass
* <b>style</b>: custom style

## Actions

* <b>change</b>: called anytime the value changes

## Example

<DatePicker
    id="datepicker"
    format="dd/MM/yyyy"
    value={reservation.date}
    cssClass={date_class}
    style={{ fontSize: "1rem" }}
    change={(e) => {
        var value = e.value;
        var tmp = moment(value).startOf('day').utc().format();
        this.changeDate(tmp);
    }}>
</DatePicker>
