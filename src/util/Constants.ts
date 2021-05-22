export enum OPCODES {
	Identify = 0,
	Select_protocol = 1,
	Ready = 2,
	Heartbeat = 3,
	Session_description = 4,
	Speaking = 5,
	Heartbeat_ACK = 6,
	Resume = 7,
	Hello = 8,
	Resumed = 9,
	Client_disconnect = 13
}

export enum CLOSECODES {
	Unknown_error = 4000,
	Unknown_opcode = 4001,
	Decode_error = 4002,
	Not_authenticated = 4003,
	Authentication_failed = 4004,
	Already_authenticated = 4005,
	Invalid_session = 4006,
	Session_timed_out = 4009,
	Server_not_found = 4011,
	Unknown_protocol = 4012,
	Disconnected = 4014,
	Voice_server_crashed = 4015,
	Unknown_encryption_mode = 4016
}

export interface Payload {
	op: OPCODES;
	d?: any;
	s?: number;
	t?: string;
}
