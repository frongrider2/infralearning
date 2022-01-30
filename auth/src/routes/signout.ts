import exress from 'express';

const router = exress.Router();

router.get('/users/signout', (req, res) => {
  res.send('signout');
});

export { router as signoutRouter };
