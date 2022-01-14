
export default class ImageService {
  static compress({ file, divider }) {
    return new Promise((resolve, reject) => {

      const fileName = file.name;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = event => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const elem = document.createElement("canvas");
          elem.width = img.width / divider;
          elem.height = img.height / divider;
          const ctx = elem.getContext("2d");
          // img.width and img.height will contain the original dimensions
          ctx.drawImage(img, 0, 0, img.width / divider, img.height / divider);
          ctx.canvas.toBlob(
            blob => {
              const newFile = new File(
                [blob],
                [
                  fileName.slice(0, fileName.indexOf(".")),
                  `(${divider})`,
                  fileName.slice(fileName.indexOf("."))
                ].join(""),
                {
                  type: file.type,
                  lastModified: Date.now()
                }
              );
              resolve(newFile);
            },
            file.type,
            1
          );
        };
        reader.onerror = error => reject(error);
      };
    });
  }

  static batchCompress(file) {
    var dividers = [
      {
        file,
        divider: 1
      },
      {
        file,
        divider: 2
      },
      {
        file,
        divider: 3
      },
      {
        file,
        divider: 4
      }
    ];
    var actions = dividers.map(ImageService.compress);
    var results = Promise.all(actions);
    return results;
  }

  static getResizedCanvas(canvas, newWidth, newHeight) {
    var tmpCanvas = document.createElement("canvas");
    tmpCanvas.width = newWidth;
    tmpCanvas.height = newHeight;

    var ctx = tmpCanvas.getContext("2d");
    ctx.drawImage(
      canvas,
      0,
      0,
      canvas.width,
      canvas.height,
      0,
      0,
      newWidth,
      newHeight
    );

    return tmpCanvas;
  }
}