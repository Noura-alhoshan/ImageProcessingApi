import app from '../../app';
import supertest from 'supertest';
import resizeImage from '../utils/resizeImage';
import path from 'path';
import fs from 'fs';

describe('Testing the home page endpoint', function () {
  it('returns 200', async function () {
    // status code should be 200 `OK`
    await supertest(app).get('/').expect(200);
  });
});

describe('Test the image resizing proccess', () => {
  it('Return the path of the updated image', async () => {
    const data = await resizeImage('fjord', 100, 100);
    expect(data).toEqual('assets/resizedImages/fjord:100x100.jpeg');
  });

  it('Return if the image have resized succssfully', async () => {
    await supertest(app).get('/api/images?filename=fjord&width=100&height=100');
    expect(
      fs.existsSync(
        path.join('assets', 'resizedImages/', 'fjord') + ':100x100.jpeg'
      )
    ).toBeTrue();
  });

  it('Return if the image name dose not exist', async () => {
    const data = await supertest(app).get(
      '/api/images?filename=file&width=100&height=100'
    );
    expect(data.text).toEqual(
      'The inputs coudnt be less than 0 or empty and the hight and width must be numbers and the image must be exist'
    );
  });

  it('Return if the hight equals 0', async () => {
    const data = await supertest(app).get(
      '/api/images?filename=fjord&width=100&height=0'
    );
    expect(data.text).toEqual(
      'The inputs coudnt be less than 0 or empty and the hight and width must be numbers and the image must be exist'
    );
  });

  it('Return if the hight equals -100', async () => {
    const data = await supertest(app).get(
      '/api/images?filename=fjord&width=100&height=-100'
    );
    expect(data.text).toEqual(
      'The inputs coudnt be less than 0 or empty and the hight and width must be numbers and the image must be exist'
    );
  });

  it('Return if the hight is empty', async () => {
    const data = await supertest(app).get(
      '/api/images?filename=fjord&width=100&height='
    );
    expect(data.text).toEqual(
      'The inputs coudnt be less than 0 or empty and the hight and width must be numbers and the image must be exist'
    );
  });

  it('Return if the hight is not a number', async () => {
    const data = await supertest(app).get(
      '/api/images?filename=fjord&width=100&height=noura'
    );
    expect(data.text).toEqual(
      'The inputs coudnt be less than 0 or empty and the hight and width must be numbers and the image must be exist'
    );
  });
});
