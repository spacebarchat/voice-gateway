import { CLOSECODES, Payload, OPCODES } from "../util/Constants";
import WebSocket from "../util/WebSocket";
import {
	ChannelModel,
	checkToken,
	GuildModel,
	MemberDocument,
	MemberModel,
	ReadyEventData,
	UserModel,
	toObject,
} from "@fosscord/server-util";
import { IdentifySchema } from "../schema/Identify"; //Idk if that's needed
import { Send } from "../util/Send";
import experiments from "./experiments.json";

// TODO: see what can go in the bin

/* {
	"op": 0,
	"d": {
	  "server_id": "41771983423143937",
	  "user_id": "104694319306248192",
	  "session_id": "my_session_id",
	  "token": "my_token"
	}
} */

export async function onIdentify(this: WebSocket, data: Payload) {
	clearTimeout(this.readyTimeout);
	//check.call(this, IdentifySchema, data.d);

	const identify: IdentifySchema = data.d;

	/*try {
		var decoded = await checkToken(identify.token); // will throw an error if invalid
	} catch (error) {
		console.error("invalid token", error);
		return this.close(CLOSECODES.Authentication_failed);
	}

	this.user_id = data.id;
	let server_id:number = data.server_id;
	let session_id:number = data.session_id*/

	//const user = await UserModel.findOne({ id: this.user_id }).exec();
	//if (!user) return this.close(CLOSECODES.Authentication_failed);


	const d = {
		ssrc: 1,
		ip: 1,
		port: 1234,
		modes: [""],
		heartbeat_interval: 1 //Useless, but kept for interoperability
	};

	console.log("Send ready");

	await Send(this, {
		op: OPCODES.Ready,
		d,
	});
}
