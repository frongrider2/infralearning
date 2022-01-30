import exress from 'express';
import { NotFoundError } from '../errors/not-found-error';

const router = exress.Router();

router.all('*', async (req, res, next) => {
  next(new NotFoundError());
});

export { router as NotFoundRouter };
