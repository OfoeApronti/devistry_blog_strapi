module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7be3a58a090e278092ee4f73e6be26df'),
  },
});
