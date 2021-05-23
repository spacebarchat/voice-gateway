import { Client, Server, ServerCredentials, loadPackageDefinition, credentials, load } from "@grpc/grpc-js";
import path = require("path");
import { ProtoGrpcType } from "./proto/protos"
import { loadSync } from "@grpc/proto-loader"; //Fails to import with TypeError: values must be an object


const packageDef: any = loadSync("./protos.proto")
let fosscordMedia: ProtoGrpcType = (loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType;

export class fcRpcClient {

	public stub: Client
	constructor(ip: string, port: number = 8057) {
		if (!ip) {
			throw new Error("No IP has been provided to the RPC client");
		}

		this.stub = new fosscordMedia.fosscordMedia.FosscordInternals(`${ip}:${port}`, credentials.createInsecure())

		this.stub.waitForReady(2000, (e) => {
			console.info("gRPC server ready to receive requests")
		});
	}

	vServerUdpRequest() {
	}
	vServerVoiceRequest() {
	}
}

export class fcRpcServer {
	public server: Server;
	constructor(port: number = 8067) {
		/*this.server = new Server();
		this.server.addProtoService();
		this.server.addService(fosscordinternals.fosscordInternals.service, {
			uRequest: this.uRequestHandler,
			vRequest: this.vRequestHandler
		});
		this.server.bind(`0.0.0.0:${port}`, ServerCredentials.createInsecure());*/
		console.log(`RPC server listening on ${port}`);
	}

	uRequestHandler(call: any) {

	}

	vRequestHandler(call: any) {

	}
}