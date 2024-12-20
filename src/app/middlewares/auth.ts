import { NextFunction, Request, Response } from 'express';
import { CatchAsync } from '../utils/CatchAsync';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
import { tUserRole } from '../modules/user/user.interface';
export const Auth = (...requiredRoles: tUserRole[]) => {
  return CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    console.log(token);

    if (!token) {
      throw new Error('Unauthorized Access Detected');
    }

    jwt.verify(
      token,
      config.jwt_access_secret as string,
      function (err, decoded) {
        if (err) {
          throw new Error('Invalid Token');
        }

        const role = (decoded as JwtPayload)?.role;

        if (requiredRoles && requiredRoles.includes(role)) {
          throw new Error('Unauthorized Access Detected');
        }
        req.user = decoded as JwtPayload;
      },
    );
    next();
  });
};

// import { NextFunction, Request, Response } from 'express';
// import jwt, { JwtPayload } from 'jsonwebtoken';
// import { AppError } from '../errors/AppErrors';
// import config from '../config';
// import { CatchAsync } from '../utils/CatchAsync';

// export const Auth = () => {
//   return CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
//     const token = req.headers.authorization?.split(' ')[1];
//     console.log(token);
//     if (!token) {
//       throw new AppError(401, 'Unauthorized Access Detected');
//     }

//     try {
//       const decoded = jwt.verify(
//         token,
//         config.jwt_access_secret as string,
//       ) as JwtPayload;
//       req.user = decoded;
//       next();
//     } catch (error) {
//       throw new AppError(401, 'Invalid Token');
//     }
//   });
// };
