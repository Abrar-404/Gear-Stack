import { NextFunction, Request, Response } from 'express';
import { CatchAsync } from '../utils/CatchAsync';
import { AppError } from '../errors/AppErrors';
import jwt from 'jsonwebtoken';
import config from '../config';
export const Auth = () => {
  return CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(401, 'Unauthorized Access Detected');
    }

    jwt.verify(
      token,
      config.jwt_access_secret as string,
      function (err, decoded) {
        // err
        if (err) {
          throw new Error('Your are not authorized');
        }
        // decoded undefined
        console.log(decoded);
      },
    );

    next();
  });
};
