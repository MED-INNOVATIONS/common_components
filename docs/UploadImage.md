# Upload Image

The component is used to upload and crop images

## Properties

* <b>disabled</b>: indicates if the button to add an image is disabled

* <b>error</b>: indicates if there is an error status to show
* <b>errorMessage</b>: the error message shown in case of error status

* <b>localization</b>: takes the localization object (react-localization)
* <b>image</b>: the value of the image

* <b>ratio</b>: the mandatory ratio of the image (string - for example 16:9, 16:3 etc...)

* <b>imageSize</b>: the max image size (number in MB)

### sizeConstraints

*  <b>constraints</b>: true/false, indicates if the component has to take in consideration the constraints
* <b>minHeight</b>: indicates the min height in pixel
* <b>maxHeight</b>: indicates the min height in pixel
* <b>minWidth</b>: indicates the min width in pixel
* <b>maxWidth</b>: indicates the min width in pixel

### resizeProperties

* <b>resizeImage</b>: true/false indicates if the loaded image has to be resized to the dimensions indicated in imgHeight and imgWidth
* <b>resizeHeight</b>: force the uploaded image to the indicated height in pixel
* <b>resizeWidth</b>: force the uploaded image to the indicated width in pixel

<!-- **Those two previous properties are binded; if you set only one of them they process of forcing images sizes does not work** -->

### cropProperties

* <b>cropImage</b>: true/false, indicates if the component has to show the crop window
* <b>startHeightCrop</b>: indicates the start height of crop "square"
* <b>startWidthCrop</b>: indicates the start width of crop "square"
* <b>minCroppedHeight</b>: indicates the min height required for the cropped image
* <b>minCroppedWidth</b>: indicates the min width required for the cropped image
* <b>maxCroppedHeight</b>: indicates the max height required for the cropped image
* <b>maxCroppedWidth</b>: indicates the max width required for the cropped image

## Actions

* <b>onRemove</b>: the function called when the image is deleted

* <b>onChange</b>: the max image size (number in MB)

## Example

<UploadImage
    localization={localization}
    image={siteHeaderImage}
    imageSize={1}
    ratio={'16:3'}
    sizeConstraints={{
        constraints: 
        false, 
        minHeight: 
        360, 
        maxHeight: 
        null, 
        minWidth: 
        1920, 
        maxWidth: 
        null
    }}
    resizeProperties={{
        resizeImage: false, 
        resizeHeight: null, 
        resizeWidth: null
    }}
    cropProperties={{
        cropImage: false, 
        startHeightCrop: null, 
        startWidthCrop: null, 
        minCroppedHeight: null, 
        minCroppedWidth: null, 
        maxCroppedHeight: 100, 
        maxCroppedWidth: 100
    }}
    onRemove={() => { this.changeImage('siteHeaderImage', null) }}
    onChange={(data) => { this.changeImage('siteHeaderImage', data) }}>
</UploadImage>
