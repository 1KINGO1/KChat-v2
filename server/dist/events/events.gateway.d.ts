import { OnGatewayConnection } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { DbService } from '../db/db.service';
import { AuthService } from '../auth/auth.service';
export declare class EventsGateway implements OnGatewayConnection {
    private dbService;
    private authService;
    constructor(dbService: DbService, authService: AuthService);
    server: Server;
    handleConnection(client: Socket): Promise<Socket<import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, any>>;
    groupChangeHandle(client: Socket, id: string): Promise<void>;
    messageCreate(client: Socket, value: string): Promise<void>;
}
