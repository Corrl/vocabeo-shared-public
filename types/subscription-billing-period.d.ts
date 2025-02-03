import {ISODateString} from './_primitives/iso-date-string';

export type SubscriptionBillingPeriod = {
    startsAt: ISODateString;
    endsAt: ISODateString;
}