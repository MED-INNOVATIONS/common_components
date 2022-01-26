# Scheduler

The component set scheduler

## Properties

* <b>value</b>: value
* <b>cssClass</b>: cssClass
* <b>min</b>: min time to select
* <b>max</b>: max time to select
* <b>style</b>: custom style

## Actions

* <b>onChange</b>: called anytime the value changes

## Example

 
<TimePicker
    value={parsed_time}
    cssClass={""}
    min={min_time}
    max={max_time}
    step={10}
    style={{ fontSize: "1rem" }}
    onChange={(e) => {
        var value = e.value;
        var tmp = moment(value).format("HH:mm");
        this.changeTime(tmp, selected_slot);
    }}>
</TimePicker>
