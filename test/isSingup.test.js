// // ответ должен иметь статус-код 200
// // в ответе должен возвращаться токен
// // в ответе должен возвращаться объект user с 2 полями email и subscription, имеющие тип данных String

// const mongoose = require('mongoose');

// const request = require('supertest');
// require('dotenv').config();
// const app = require('../app');
// const { User } = require('../models/user');

// const { DB_TEST_HOST, PORT } = process.env;

// describe('test auth routes', () => {
//   let server;
//   beforeAll(() => (server = app.listen(PORT)));
//   afterAll(() => server.close());

//   beforeEach(done => {
//     mongoose.connect(DB_TEST_HOST).then(() => done());
//   });

//   // afterEach(done => {
//   //   jest.setTimeout(
//   //     mongoose.connection.db.dropCollection(() => {
//   //       mongoose.connection.close(() => done());
//   //     }),
//   //     10000
//   //   );
//   // });

//   test('test signup route', async () => {
//     const newUser = {
//       name: 'Some',
//       email: 'Some@gmail.com',
//       password: '123456',
//       avatarURL: 'www.gravatar.com/avatar/4eb96ccd126aa5d7fc61c2fcc6915402',
//     };
//     const user = await User.create(newUser);

//     const loginUser = {
//       email: 'Some@gmail.com',
//       password: '123456',
//     };

//     const response = await request(app).post('/api/auth/login').send(loginUser);

//     const expected = {
//       status: 'success',
//       code: 200,
//       data: {
//         token,
//         user: {
//           email,
//           subscription,
//         },
//       },
//     };

//     expect(response.statusCode).toBe(expected.code);
//   });
// });
