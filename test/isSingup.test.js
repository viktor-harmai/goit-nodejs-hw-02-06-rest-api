// ответ должен иметь статус-код 200
// в ответе должен возвращаться токен
// в ответе должен возвращаться объект user с 2 полями email и subscription, имеющие тип данных String
// const express = require('express');
const request = require('supertest');
const { auth } = require('../controllers');
const app = require('../app');

// app.post('/api/users/signup', auth.register);

describe('test register controller', () => {
  // beforeAll(() => {
  //   app.listen(3000);
  //   console.log('Выполнить в начале тестов');
  // });

  // afterAll(() => {
  //   app.close();
  //   console.log('Выполнить после тестов');
  // });

  test('register return ', async () => {
    const response = await request(app).post('/api/users/signup');
    expect(response.status).toBe(200);
    // console.log(response.status);
  });
});
