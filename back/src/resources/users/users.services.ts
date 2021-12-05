import Users from './users.model';
import { Request } from 'express';

export const getUsers = async () => await Users.query();

export const checkEmail = async (email: string) => {
  const isEmailUsed = await Users.query().findOne({ email });
  if (isEmailUsed) throw Error('This email is used!');
};

export const createUser = (name: string, email: string, password: string) =>
  Users.fromJson({ name, email, password });

export const addUser = async (user: Users) => await Users.query().insert(user);

export const User = { getUsers, checkEmail, createUser, addUser };

export interface RequestWithUser extends Request {
  user?: Users;
}
