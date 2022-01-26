# React Table

The component reimplement react-table component => https://react-table.tanstack.com/docs/overview

## Properties

* <b>localization</b>: takes the localization object (react-localization)
* <b>columns</b>: Array indicating the columns
* <b>data</b>: Array of data
* <b>_defaultPageSize</b>: (string) It indicates default number of rows shown
* <b>_noDataMessage</b>: (string) Message shown when body is empty

## Actions

* <b>onChange</b>: called anytime the value changes

## Example
<ReactTable
    localization={localization}
    columns={columns}
    data={filtered_body}
    _defaultPageSize={10}
    _noDataMessage={localization.noData || "No data"}>
</ReactTable>
