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
exports.MeController = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db/db.service");
const auth_service_1 = require("../auth/auth.service");
const responseMessage_1 = require("../utils/responseMessage");
const CreateConversation_1 = require("./dto/CreateConversation");
let MeController = class MeController {
    constructor(dbService, authService) {
        this.dbService = dbService;
        this.authService = authService;
    }
    async getAllConversations(req, res) {
        var _a;
        const { token } = req.cookies;
        if (!token) {
            res.statusCode = 400;
            return res.send((0, responseMessage_1.default)(true, 'token cookie doesnt exist'));
        }
        const user = await this.dbService.findUserByLogin((_a = (await this.authService.verifyToken(token))) === null || _a === void 0 ? void 0 : _a.login);
        if (!user) {
            res.statusCode = 400;
            return res.send((0, responseMessage_1.default)(true, 'incorrect token'));
        }
        res.send(await this.dbService.findConversationWithUser(user._id));
    }
    async createConversation(req, res, body) {
        var _a;
        const { token } = req.cookies;
        if (!token) {
            res.statusCode = 400;
            return res.send((0, responseMessage_1.default)(true, 'token cookie doesnt exist'));
        }
        const user = await this.dbService.findUserByLogin((_a = (await this.authService.verifyToken(token))) === null || _a === void 0 ? void 0 : _a.login);
        if (!user) {
            res.statusCode = 400;
            return res.send((0, responseMessage_1.default)(true, 'incorrect token'));
        }
        const targetUser = await this.dbService.findUserByLogin(body.login);
        if (!targetUser) {
            res.statusCode = 400;
            return res.send((0, responseMessage_1.default)(true, 'User doesnt exist'));
        }
        if (user.login === targetUser.login) {
            res.statusCode = 400;
            return res.send((0, responseMessage_1.default)(true, 'You cant start conversation with yourself'));
        }
        const userConversations = await this.dbService.findConversationWithUser(user._id);
        if (userConversations.some(conversation => conversation.users.some(user => user.login === targetUser.login))) {
            res.statusCode = 400;
            return res.send((0, responseMessage_1.default)(true, 'You have already started conversation with this user.'));
        }
        res.send(await this.dbService.createConversation(user._id, targetUser._id));
    }
};
__decorate([
    (0, common_1.Get)('conversations'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MeController.prototype, "getAllConversations", null);
__decorate([
    (0, common_1.Post)('conversations'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateConversation_1.default]),
    __metadata("design:returntype", Promise)
], MeController.prototype, "createConversation", null);
MeController = __decorate([
    (0, common_1.Controller)('me'),
    __metadata("design:paramtypes", [db_service_1.DbService,
        auth_service_1.AuthService])
], MeController);
exports.MeController = MeController;
//# sourceMappingURL=me.controller.js.map