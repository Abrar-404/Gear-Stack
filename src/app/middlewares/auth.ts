import { NextFunction, Request, Response } from 'express';
import { CatchAsync } from '../utils/CatchAsync';
export const Auth = () => {
  return CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.headers.authorization);

  });
};
