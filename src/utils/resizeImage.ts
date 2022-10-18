import sharp from 'sharp';
import path from 'path';

const imageFormat = '.jpeg';
const OriginalPath: string = path.join('assets/', 'images/');
const UpdatedPath: string = path.join('assets/', 'resizedImages/');

const resizeImage = async (
  fileName: string,
  width: number,
  height: number
): Promise<string> => {
  const ImageOriginalPath: string =
    path.join(OriginalPath, fileName) + imageFormat;

  // this format to insure no same image with same hoght and width exist
  const ImageUpdatedPath: string =
    path.join(UpdatedPath, fileName) + `:${width}x${height}` + imageFormat;

  try {
    // using sgarp to resize the image
    await sharp(ImageOriginalPath)
      .resize(width, height)
      .toFormat('jpeg')
      .toFile(ImageUpdatedPath);
    return ImageUpdatedPath;
  } catch {
    return 'The image prossecing is not completed';
  }
};

export default resizeImage;
