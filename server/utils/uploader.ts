import fileUpload from "express-fileupload";
import path from "path";
import imagemagick from "imagemagick";

class Uploader {
  static uploadResized(file: fileUpload.UploadedFile, width: number = 1024): Promise<string> {
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
            dstPath: uploadPath,
            width,
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

  static upload(file: fileUpload.UploadedFile): Promise<string> {
    return new Promise((rs, rj) => {
      const filename = Date.now() + Math.random() * 10 + file.name;

      const uploadPath = path.join(__dirname, "../uploads/" + filename);

      file.mv(uploadPath, async (err) => {
        if (err) {
          rj("Image creation error " + err);
          return;
        }

        rs(filename);
      });
    });
  }
}

export default Uploader;
