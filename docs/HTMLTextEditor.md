# Html Text Editor

The component is used to manage html text

## Properties

* <b>localization</b>: takes the localization object (react-localization)
* <b>data</b>: data shown
* <b>error</b>: boolean value. It indicates if the component is "in error" and the borders turn to red

## Actions

* <b>onUploadImage</b>: the function called when an image is uploaded

* <b>onChange</b>: called anytime the value changes

## Example

<HTMLTextEditor
    localization={localization}
    data={parsedExtendedDescription}
    onUploadImage={this.onUploadImage}
    onChange={this.changeExtendedDescription}>
</HTMLTextEditor>
