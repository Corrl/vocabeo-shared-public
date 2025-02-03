import {SubscriptionId} from './_primitives/subscription-id';
import {ISODateString} from './_primitives/iso-date-string';

export type SubscriptionJson = {
    id: SubscriptionId;
    lastEventOccurredAt: ISODateString;
}
