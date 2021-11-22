export interface EventData {}

export interface EventMetadata {}

export interface Event {
  id: string;
  streamName: string;
  type: string;
  data: EventData;
  metadata: EventMetadata;
  expectedVersion?: number;
}
