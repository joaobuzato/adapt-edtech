import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (!req.headers) {
      return res.status(403).json({ error: 'Token inválido' });
    }
    const token = req.headers['authorization'];

    if (!token) {
      return res.status(401).json({ error: 'Token não fornecido' });
    }

    jwt.verify(token, 'segredo', (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: 'Token inválido' });
      }

      next();
    });
  }
}
