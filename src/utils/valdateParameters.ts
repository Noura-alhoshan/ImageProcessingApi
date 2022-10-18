import fs from 'fs';

const validate = async (
  fileName: string,
  width: number,
  height: number
): Promise<boolean> => {
  // check if the width and hight are numbers
  if (isNaN(width)) {
    return false;
  }
  if (isNaN(height)) {
    return false;
  }
  // check if the width and hight less than 1
  if (height < 1) {
    return false;
  }
  if (width < 1) {
    return false;
  }
  // check if the file exist
  if (!fs.existsSync('assets/' + 'images/' + fileName + '.jpeg')) {
    return false;
  }

  return true;
};

export { validate };
