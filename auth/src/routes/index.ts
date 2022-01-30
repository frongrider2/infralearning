import { currentUserRouter } from './current-user';
import { NotFoundRouter } from './notfound';
import { signinRouter } from './signin';
import { signoutRouter } from './signout';
import { signupRouter } from './signup';

export default function routing(app: any) {
  app.use('/api', currentUserRouter);
  app.use('/api', signinRouter);
  app.use('/api', signoutRouter);
  app.use('/api', signupRouter);
  app.use(NotFoundRouter);
}
