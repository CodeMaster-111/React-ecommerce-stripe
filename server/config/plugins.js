module.exports = ({ env }) => ({
  // ...
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'your-secret-key'),
      jwt: {
        expiresIn: '7d',
      },
    },
  },
}); 