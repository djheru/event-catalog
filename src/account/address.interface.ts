import { Event, EventData, EventMetadata } from '../common/event.interface';

export interface UpdateAddressData extends EventData {
  address1: string;
  address2?: string;
  city: string;
  state: string;
  postalCode: string;
  postalCodePlus4?: string;
}

export interface UpdateAddressMetadata extends EventMetadata {
  userId: string;
}

export interface UpdateAddress extends Event {
  type: 'update-address';
  data: UpdateAddressData;
  metadata: UpdateAddressMetadata;
}
