import {Interval} from '@paddle/paddle-node-sdk';

export type SubscriptionBillingCycle = {
    interval: Interval;
    frequency: number;
}