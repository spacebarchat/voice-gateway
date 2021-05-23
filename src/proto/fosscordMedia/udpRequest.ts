// Original file: src/protos.proto

import type { Long } from '@grpc/proto-loader';

export interface udpRequest {
  'userid'?: (number | string | Long);
  'guildid'?: (number | string | Long);
  'ip'?: (string);
  'port'?: (number);
  'protocol'?: (string);
  'rtcConnectionId'?: (string);
}

export interface udpRequest__Output {
  'userid': (string);
  'guildid': (string);
  'ip': (string);
  'port': (number);
  'protocol': (string);
  'rtcConnectionId': (string);
}
