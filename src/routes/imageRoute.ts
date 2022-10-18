import express from 'express';
import resizeImage from '../utils/resizeImage';
import { validate } from '../utils/valdateParameters';
import fs from 'fs';
import path from 'path';

const routes = express.Router();

routes.get(
  '/images',
  async (req: express.Request, res: express.Response): Promise<void> => {
    const filename = req.query.filename as string;
    const width = Number(req.query.width);
    const height = Number(req.query.height);

    // to validate the parameters
    const validates = await validate(filename, width, height);

    // check if the resized image already exists, and if it does, send back the cached resized image directly
    if (
      fs.existsSync(
        'assets/' +
          'resizedImages/' +
          filename +
          `:${width}x${height}` +
          '.jpeg'
      )
    ) {
      res.sendFile(
        'assets/' +
          'resizedImages/' +
          filename +
          `:${width}x${height}` +
          '.jpeg',
        { root: '.' }
      );
    } else {
      // to resize the image
      const resizedImage = await resizeImage(filename, width, height);

      if (validates) {
        res.sendFile(resizedImage, { root: '.' });
      }
      // if the parameters are not correct
      else
        res.send(
          'The inputs coudnt be less than 0 or empty and the hight and width must be numbers and the image must be exist'
        );
    }
  }
);

export default routes;
