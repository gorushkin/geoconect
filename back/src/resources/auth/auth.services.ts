import { Request, Response, NextFunction } from 'express';
import User from '../users/users.model';
import jwt from 'jsonwebtoken';
import { CONFIG } from '../../helpers/config';
import { CustomError } from '../../helpers/errorHanlder';
import { RequestWithUser } from '../users/users.services';

export const createToken = (user: User, password: string) => {
  const compareResults = user.verifyPassword(password);
  if (!compareResults) throw new CustomError('Password is not correct', 401);
  const token = jwt.sign({ name: user.name, id: user.id }, CONFIG.SECRET);
  return token;
};

// TODO: передавать в next() объект с текстом и статусом

export const authMiddleware = async (req: RequestWithUser, _res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    const error = new CustomError('UNAUTHORIZED', 401);
    return next(error);
  }
  const data = jwt.verify(authorization, CONFIG.SECRET);
  if (typeof data !== 'string') {
    const { id } = data;
    const user = await User.query().findOne({ id });
    req.user = user;
  }
  next();
};

export const forAdminOnly = async (req: RequestWithUser, _res: Response, next: NextFunction) => {
  if (!req.user?.isAdmin()) return next('You can not do this action');
  return next();
};