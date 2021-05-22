import { Client, ChannelCredentials, Server, ServerCredentials } from "@grpc/grpc-js";


export class fcRpcClient {
	public client: Client
	constructor(ip: string = "127.0.0.1", port: number = 8067) {
		if (!ip) {
			throw new Error("No IP has been provided to the RPC client");
		}

		this.client = new Client(`${ip}:${port}`, ChannelCredentials.createInsecure())

		this.client.waitForReady(2000, (e) => {
			console.info("gRPC server ready to receive requests")
		});
	}
}

export class fcRpcServer {
	public server: Server;
	constructor(port: number = 8067) {
		this.server = new Server();
		this.server.addProtoService();
		this.server.bind(`0.0.0.0:${port}`, ServerCredentials.createInsecure());
		console.log(`RPC server listening on ${port}`);
	}
}