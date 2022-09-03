import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';

const key = fs.readFileSync(path.join(path.dirname(path.dirname(__dirname)), 'jwtRS256.key'), {encoding: 'utf-8'});

@Injectable()
export class AuthService {

  async createToken(login: string){
    return jwt.sign({ login }, key, { algorithm: 'RS256'});
  }

  async verifyToken(token: string){
    return jwt.verify(token, key, {algorithms: ['RS256']})
  }

}
