"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db/db.service");
const CreateUserDto_1 = require("./dto/CreateUserDto");
const auth_service_1 = require("./auth.service");
const responseMessage_1 = require("../utils/responseMessage");
const VerifyTokenDto_1 = require("./dto/VerifyTokenDto");
let AuthController = class AuthController {
    constructor(dbService, authService) {
        this.dbService = dbService;
        this.authService = authService;
    }
    async login({ login, password }, res) {
        const user = await this.dbService.findUserByLogin(login);
        if (!user) {
            res.send((0, responseMessage_1.default)(true, "User doesn't exist!"));
            return;
        }
        if (user.password !== password) {
            res.send((0, responseMessage_1.default)(true, "The password doesn't match!"));
            return;
        }
        res.cookie('token', await this.authService.createToken(login)).send((0, responseMessage_1.default)(false, 'OK'));
    }
    async verifyToken({ token: tokenBody }, req, res) {
        let token = req.cookies.token || tokenBody;
        try {
            const decode = await this.authService.verifyToken(token);
            const user = await this.dbService.findUserByLogin(decode === null || decode === void 0 ? void 0 : decode.login);
            if (!user) {
                throw 'error';
            }
            res.send((0, responseMessage_1.default)(false, 'OK'));
        }
        catch (e) {
            res.send((0, responseMessage_1.default)(true, 'Incorrect token!'));
        }
    }
    async createUser(data) {
        return this.dbService.create({ login: data.login, password: data.password });
    }
};
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUserDto_1.default, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('verifyToken'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [VerifyTokenDto_1.default, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyToken", null);
__decorate([
    (0, common_1.Post)('registration'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUserDto_1.default]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "createUser", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [db_service_1.DbService,
        auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map