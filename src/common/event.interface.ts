/**
 * Represents the data associated with an event or command
 */
export interface EventData {}

/**
 * Represents the metadata associated with a command or event
 */ export interface EventMetadata {
  /**
   * A UUID v4 to trace a single event throughout its entire journey
   * @pattern /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
   */
  correlationId: string;
  /**
   * The date/time that this event was created in its originating system
   */
  dateTime: Date;
}

/**
 * Represents an event or command in the system
 */
export interface Event {
  /**
   * The UUID v4 for the event
   * @pattern /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
   */
  id: string;

  /**
   * Name of the event stream
   */
  streamName: string;

  /**
   * The type of the message
   */
  type: string;

  /**
   * The data contained within the message as JSON
   */
  data: EventData;

  /**
   * The metadata of the message as JSON
   */
  metadata: EventMetadata;

  /**
   * The expected version of the stream when the message is to be written
   * @minimum 0
   */
  expectedVersion?: number;
}
