import exress from 'express';

const router = exress.Router();

router.get('/users/currentuser', (req, res) => {
  res.send('currentuser');
});

export { router as currentUserRouter };
