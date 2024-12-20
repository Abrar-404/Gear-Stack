import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload;
    }
  }
}

// import { Request as ExpressRequest } from 'express';

// declare global {
//   namespace Express {
//     interface User {
//       id: string;
//     }

//     interface Request {
//       user?: User;
//     }
//   }
// }
