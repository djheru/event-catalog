export declare const jsonSchema: {
    $id: string;
    $schema: string;
    definitions: {
        BaseEvent: {
            additionalProperties: boolean;
            description: string;
            properties: {
                data: {
                    $ref: string;
                    description: string;
                };
                expectedVersion: {
                    description: string;
                    minimum: number;
                    type: string;
                };
                id: {
                    description: string;
                    pattern: string;
                    type: string;
                };
                metadata: {
                    $ref: string;
                    description: string;
                };
                streamName: {
                    description: string;
                    type: string;
                };
                type: {
                    description: string;
                    type: string;
                };
            };
            required: string[];
            title: string;
            type: string;
        };
        BaseEventData: {
            additionalProperties: boolean;
            description: string;
            title: string;
            type: string;
        };
        BaseEventMetadata: {
            additionalProperties: boolean;
            description: string;
            properties: {
                correlationId: {
                    description: string;
                    pattern: string;
                    type: string;
                };
                dateTime: {
                    description: string;
                    format: string;
                    type: string;
                };
            };
            required: string[];
            title: string;
            type: string;
        };
        UpdateAddressCommand: {
            additionalProperties: boolean;
            description: string;
            properties: {
                data: {
                    $ref: string;
                    description: string;
                };
                expectedVersion: {
                    description: string;
                    minimum: number;
                    type: string;
                };
                id: {
                    description: string;
                    pattern: string;
                    type: string;
                };
                metadata: {
                    $ref: string;
                    description: string;
                };
                streamName: {
                    description: string;
                    type: string;
                };
                type: {
                    const: string;
                    description: string;
                    type: string;
                };
            };
            required: string[];
            title: string;
            type: string;
        };
        UpdateAddressData: {
            additionalProperties: boolean;
            description: string;
            properties: {
                address1: {
                    description: string;
                    maxLength: number;
                    minLength: number;
                    type: string;
                };
                address2: {
                    description: string;
                    maxLength: number;
                    minLength: number;
                    type: string;
                };
                city: {
                    description: string;
                    maxLength: number;
                    minLength: number;
                    type: string;
                };
                postalCode: {
                    description: string;
                    maxLength: number;
                    minLength: number;
                    type: string;
                };
                postalCodePlus4: {
                    description: string;
                    maxLength: number;
                    minLength: number;
                    type: string;
                };
                state: {
                    description: string;
                    maxLength: number;
                    minLength: number;
                    type: string;
                };
            };
            required: string[];
            title: string;
            type: string;
        };
        UpdateAddressMetadata: {
            additionalProperties: boolean;
            description: string;
            properties: {
                correlationId: {
                    description: string;
                    pattern: string;
                    type: string;
                };
                dateTime: {
                    description: string;
                    format: string;
                    type: string;
                };
                userId: {
                    description: string;
                    pattern: string;
                    type: string;
                };
            };
            required: string[];
            title: string;
            type: string;
        };
    };
};
