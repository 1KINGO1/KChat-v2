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
exports.EventsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const db_service_1 = require("../db/db.service");
const auth_service_1 = require("../auth/auth.service");
const cookie = require("cookie");
const uuid_1 = require("uuid");
let EventsGateway = class EventsGateway {
    constructor(dbService, authService) {
        this.dbService = dbService;
        this.authService = authService;
    }
    async handleConnection(client) {
        const { token } = cookie.parse(client.handshake.headers.cookie || '');
        if (!token)
            return client.disconnect();
        const data = await this.authService.verifyToken(token);
        const user = await this.dbService.findUserByLogin(data === null || data === void 0 ? void 0 : data.login);
        if (!user)
            return client.disconnect();
        client.data.user = user;
        setTimeout(async () => {
            client.emit('fetchConversations', await this.dbService.findConversationWithUser(user._id));
        }, 150);
    }
    async groupChangeHandle(client, id) {
        const conversation = await this.dbService.findConversationById(id);
        if (!conversation)
            return;
        if (conversation.users.every(user => user._id + "" !== client.data.user._id + ""))
            return;
        if (client.rooms.has(id))
            return;
        client.leave(client.rooms.keys()[1]);
        client.join(id);
        client.emit('fetchMessages', await this.dbService.getMessages(id));
    }
    async messageCreate(client, value) {
        const roomId = [...client.rooms.keys()][1];
        if (!roomId)
            return;
        const conversation = await this.dbService.findConversationById(roomId);
        if (!conversation)
            return;
        if (conversation.users.every(user => user._id + "" !== client.data.user._id + ""))
            return;
        if (value.length >= 200)
            return;
        const id = (0, uuid_1.v4)();
        this.dbService.createMessage(roomId, id, value, {
            login: client.data.user.login,
            avatar: client.data.user.avatar,
            _id: client.data.user._id
        });
        const messageObj = {
            _id: id,
            content: value,
            author: {
                id: client.data.user._id,
                login: client.data.user.login,
                avatar: client.data.user.avatar,
            },
        };
        client.emit('messageCreate', messageObj);
        client.to(roomId).emit('messageCreate', messageObj);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], EventsGateway.prototype, "server", void 0);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "handleConnection", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('groupChange'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "groupChangeHandle", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('messageCreate'),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __param(1, (0, websockets_1.MessageBody)('value')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, String]),
    __metadata("design:returntype", Promise)
], EventsGateway.prototype, "messageCreate", null);
EventsGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(6679, {
        cors: {
            origin: process.env.CLIENT_URL,
        },
    }),
    __metadata("design:paramtypes", [db_service_1.DbService,
        auth_service_1.AuthService])
], EventsGateway);
exports.EventsGateway = EventsGateway;
//# sourceMappingURL=events.gateway.js.map