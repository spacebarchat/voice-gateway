// Original file: src/protos.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { udpAnswer as _fosscordMedia_udpAnswer, udpAnswer__Output as _fosscordMedia_udpAnswer__Output } from '../fosscordMedia/udpAnswer';
import type { udpRequest as _fosscordMedia_udpRequest, udpRequest__Output as _fosscordMedia_udpRequest__Output } from '../fosscordMedia/udpRequest';
import type { voiceAnswer as _fosscordMedia_voiceAnswer, voiceAnswer__Output as _fosscordMedia_voiceAnswer__Output } from '../fosscordMedia/voiceAnswer';
import type { voiceRequest as _fosscordMedia_voiceRequest, voiceRequest__Output as _fosscordMedia_voiceRequest__Output } from '../fosscordMedia/voiceRequest';

export interface FosscordInternalsClient extends grpc.Client {
  uRequest(argument: _fosscordMedia_udpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_udpAnswer__Output) => void): grpc.ClientUnaryCall;
  uRequest(argument: _fosscordMedia_udpRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_udpAnswer__Output) => void): grpc.ClientUnaryCall;
  uRequest(argument: _fosscordMedia_udpRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_udpAnswer__Output) => void): grpc.ClientUnaryCall;
  uRequest(argument: _fosscordMedia_udpRequest, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_udpAnswer__Output) => void): grpc.ClientUnaryCall;
  uRequest(argument: _fosscordMedia_udpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_udpAnswer__Output) => void): grpc.ClientUnaryCall;
  uRequest(argument: _fosscordMedia_udpRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_udpAnswer__Output) => void): grpc.ClientUnaryCall;
  uRequest(argument: _fosscordMedia_udpRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_udpAnswer__Output) => void): grpc.ClientUnaryCall;
  uRequest(argument: _fosscordMedia_udpRequest, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_udpAnswer__Output) => void): grpc.ClientUnaryCall;
  
  vRequest(argument: _fosscordMedia_voiceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_voiceAnswer__Output) => void): grpc.ClientUnaryCall;
  vRequest(argument: _fosscordMedia_voiceRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_voiceAnswer__Output) => void): grpc.ClientUnaryCall;
  vRequest(argument: _fosscordMedia_voiceRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_voiceAnswer__Output) => void): grpc.ClientUnaryCall;
  vRequest(argument: _fosscordMedia_voiceRequest, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_voiceAnswer__Output) => void): grpc.ClientUnaryCall;
  vRequest(argument: _fosscordMedia_voiceRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_voiceAnswer__Output) => void): grpc.ClientUnaryCall;
  vRequest(argument: _fosscordMedia_voiceRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_voiceAnswer__Output) => void): grpc.ClientUnaryCall;
  vRequest(argument: _fosscordMedia_voiceRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_voiceAnswer__Output) => void): grpc.ClientUnaryCall;
  vRequest(argument: _fosscordMedia_voiceRequest, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_voiceAnswer__Output) => void): grpc.ClientUnaryCall;
  
}

export interface FosscordInternalsHandlers extends grpc.UntypedServiceImplementation {
  uRequest: grpc.handleUnaryCall<_fosscordMedia_udpRequest__Output, _fosscordMedia_udpAnswer>;
  
  vRequest: grpc.handleUnaryCall<_fosscordMedia_voiceRequest__Output, _fosscordMedia_voiceAnswer>;
  
}

export interface FosscordInternalsDefinition extends grpc.ServiceDefinition {
  uRequest: MethodDefinition<_fosscordMedia_udpRequest, _fosscordMedia_udpAnswer, _fosscordMedia_udpRequest__Output, _fosscordMedia_udpAnswer__Output>
  vRequest: MethodDefinition<_fosscordMedia_voiceRequest, _fosscordMedia_voiceAnswer, _fosscordMedia_voiceRequest__Output, _fosscordMedia_voiceAnswer__Output>
}
