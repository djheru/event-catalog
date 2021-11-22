import { Event, EventData, EventMetadata } from '../common/event.interface';

/**
 * Represents a command to update an Account Address with the provided data
 */
export interface UpdateAddressData extends EventData {
  /**
   * The first line of the street address
   * @minLength 2
   * @maxLength 128
   */
  address1: string;

  /**
   * The second line of the street address
   * @minLength 0
   * @maxLength 128
   */
  address2?: string;

  /**
   * The municipality of the address
   * @minLength 1
   * @maxLength 128
   */
  city: string;

  /**
   * The state or province of the address
   * @minLength 2
   * @maxLength 64
   */
  state: string;

  /**
   * The postal code of the adddress
   * @minLength 5
   * @maxLength 5
   */
  postalCode: string;

  /**
   * The extended postal code of the adddress
   * @minLength 4
   * @maxLength 4
   */
  postalCodePlus4?: string;
}

/**
 * Represents the metadata associated with the update-address command.
 */
export interface UpdateAddressMetadata extends EventMetadata {
  /**
   * The UUID v4 for the user or other entity submitting this command
   * @pattern /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
   */
  userId: string;
}

export interface UpdateAddress extends Event {
  /**
   * The type is defined as a static value, "update-address"
   */
  type: 'update-address';

  /**
   * The data payload for the command
   */
  data: UpdateAddressData;

  /**
   * The metadata associated with the command
   */
  metadata: UpdateAddressMetadata;
}
