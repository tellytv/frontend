import { ILineupChannel } from '@app/lineup/models/lineup-channel.model';

export interface ILineup {
  ID: number;
  Name: string;
  SSDP: boolean;
  ListenAddress: string;
  DiscoveryAddress: string;
  Port: number;
  Tuners: number;
  Manufacturer: string;
  ModelName: string;
  ModelNumber: string;
  FirmwareName: string;
  FirmwareVersion: string;
  DeviceID: string;
  DeviceAuth: string;
  DeviceUUID: string;
  CreatedAt: Date;

  Channels: ILineupChannel[];
}
