module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '273c8d2f03837fd489f0833cd04ff50c'),
  },
});
