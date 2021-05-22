import { Payload } from "../util/Constants";
import WebSocket from "../util/WebSocket";
import { onHeartbeat } from "./Heartbeat";
import { onIdentify } from "./Identify";
import { onSpeaking } from "./Speaking";
import { onSelectProtocol } from "./SelectProtocol";
import { onResume } from "./Resume";

export type OPCodeHandler = (this: WebSocket, data: Payload) => any;

export default {
	0: onIdentify,
	1: onSelectProtocol,
	3: onHeartbeat,
	5: onSpeaking,
	7: onResume,
	//12: unknown
};
