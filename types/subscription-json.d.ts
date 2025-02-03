import {SubscriptionId} from './_primitives/subscription-id';
import {ISODateString} from './_primitives/iso-date-string';
import {CurrencyCode, SubscriptionStatus} from '@paddle/paddle-node-sdk';
import {SubscriptionDiscount} from './subscription-discount';
import {SubscriptionItem} from './subscription-item';
import {SubscriptionBillingCycle} from './subscription-billing-cycle';
import {SubscriptionScheduledChange} from './subscription-scheduled-change';

export type SubscriptionJson = {
    lastEventOccurredAt: ISODateString;
    id: SubscriptionId;
    status: SubscriptionStatus;
    customerId: string;
    addressId: string;
    currencyCode: CurrencyCode;
    billingCycle: SubscriptionBillingCycle;
    previouslyPrepaidMonths: number;
    firstBilledAt: ISODateString | null;
    nextBilledAt: ISODateString | null;
    items: SubscriptionItem[];
    discount: SubscriptionDiscount | null;
    scheduledChange: SubscriptionScheduledChange | null;
}
