import fileUpload from "express-fileupload";
import path from "path";
import imagemagick from "imagemagick";

class Uploader {
  static upload(file: fileUpload.UploadedFile, width: number = 1024, height: number = 768): Promise<string> {
    return new Promise((rs, rj) => {
      const filename = Date.now() + Math.random() * 10 + file.name;

      const uploadPath = path.join(__dirname, "../uploads/" + filename);

      file.mv(uploadPath, async (err) => {
        if (err) {
          rj("Image creation error " + err);
          return;
        }

        imagemagick.resize(
          {
            srcPath: uploadPath,
            width,
            height,
          },
          (err) => {
            if (err) {
              rj("Image reresolution error " + err);
              return;
            }

            rs(filename);
          }
        );
      });
    });
  }
}

export default Uploader;
