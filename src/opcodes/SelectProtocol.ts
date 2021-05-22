import { CLOSECODES, Payload } from "../util/Constants";

import WebSocket from "../util/WebSocket";

export function onSelectProtocol(this: WebSocket, data: Payload) {
	return this.close(CLOSECODES.Invalid_session);
}
