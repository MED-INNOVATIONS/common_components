# Scheduler

The component set scheduler

## Properties
* <b>height</b>: height
* <b>agendaView</b>: boolean to show agenda view
* <b>monthView</b>: boolean to show month view
* <b>currentView</b>: string to set the current view ("Month", "Agenda" etc)
* <b>closedDates</b>: array of closed dates

## Actions

* <b>onChangeDate</b>: called anytime the value changes

## Example
<Scheduler
    height={"450px"}
    agendaView={false}
    monthView={true}
    currentView={"Month"}
    closedDates={closed_dates}
    onChangeDate={this.changeDate}>
</Scheduler>