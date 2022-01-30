import exress, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validations-error';
import { User } from '../models/user';
import { BadRequestError } from '../errors/bad-request-error';

const router = exress.Router();

router.post(
  '/users/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must have 4 - 20'),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }
    const { email, password } = req.body;
    const exitingUser = await User.findOne({ email });

    if (exitingUser) {
      throw new BadRequestError('Email in used');
    }

    const user = User.build({ email, password });
    await user.save();
    res.status(200).send(user);
  }
);

export { router as signupRouter };
