export interface ServerToClientEvents {
	serverMsg: (data: { msg: string; room: string }) => void;
	joinRoom: (room: string, cb: (message: string) => void) => void;
}

export interface ClientToServerEvents {
	clientMsg: (data: { msg: string; room: string }) => void;
	joinRoom: (room: string, cb: (message: string) => void) => void;
}