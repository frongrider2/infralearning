import exress from 'express';

const router = exress.Router();

router.get('/users/signin', (req, res) => {
  res.send('signin');
});

export { router as signinRouter };
