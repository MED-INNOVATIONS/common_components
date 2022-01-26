# Recurrence Editor

The component set date recurrence

## Properties
* <b>id</b>: id of component
* <b>name</b>: name
* <b>value</b>: value
* <b>enabled</b>: if the component is enabled

## Actions

* <b>change</b>: called anytime the value changes

## Example

<RecurrenceEditor
    change={(e) => { this.changeRecurrence(e); }}
    id="recurrenceRule"
    value={recurrenceRule}
    data-name="recurrenceRule"
    name="recurrenceRule"
    enabled={!information}>
</RecurrenceEditor>