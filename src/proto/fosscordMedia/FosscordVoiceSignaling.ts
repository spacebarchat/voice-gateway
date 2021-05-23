// Original file: src/protos.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { udpAnswer as _fosscordMedia_udpAnswer, udpAnswer__Output as _fosscordMedia_udpAnswer__Output } from '../fosscordMedia/udpAnswer';
import type { udpRequest as _fosscordMedia_udpRequest, udpRequest__Output as _fosscordMedia_udpRequest__Output } from '../fosscordMedia/udpRequest';

export interface FosscordVoiceSignalingClient extends grpc.Client {
  markAsAvailable(argument: _fosscordMedia_udpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_udpAnswer__Output) => void): grpc.ClientUnaryCall;
  markAsAvailable(argument: _fosscordMedia_udpRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_udpAnswer__Output) => void): grpc.ClientUnaryCall;
  markAsAvailable(argument: _fosscordMedia_udpRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_udpAnswer__Output) => void): grpc.ClientUnaryCall;
  markAsAvailable(argument: _fosscordMedia_udpRequest, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_udpAnswer__Output) => void): grpc.ClientUnaryCall;
  markAsAvailable(argument: _fosscordMedia_udpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_udpAnswer__Output) => void): grpc.ClientUnaryCall;
  markAsAvailable(argument: _fosscordMedia_udpRequest, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_udpAnswer__Output) => void): grpc.ClientUnaryCall;
  markAsAvailable(argument: _fosscordMedia_udpRequest, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_udpAnswer__Output) => void): grpc.ClientUnaryCall;
  markAsAvailable(argument: _fosscordMedia_udpRequest, callback: (error?: grpc.ServiceError, result?: _fosscordMedia_udpAnswer__Output) => void): grpc.ClientUnaryCall;
  
}

export interface FosscordVoiceSignalingHandlers extends grpc.UntypedServiceImplementation {
  markAsAvailable: grpc.handleUnaryCall<_fosscordMedia_udpRequest__Output, _fosscordMedia_udpAnswer>;
  
}

export interface FosscordVoiceSignalingDefinition extends grpc.ServiceDefinition {
  markAsAvailable: MethodDefinition<_fosscordMedia_udpRequest, _fosscordMedia_udpAnswer, _fosscordMedia_udpRequest__Output, _fosscordMedia_udpAnswer__Output>
}
