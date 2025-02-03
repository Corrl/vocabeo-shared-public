import type {ScheduledChangeAction} from '@paddle/paddle-node-sdk/dist/types/enums';
import {ISODateString} from './_primitives/iso-date-string';

export type SubscriptionScheduledChange = {
    readonly action: ScheduledChangeAction;
    readonly effectiveAt: ISODateString;
    readonly resumeAt: ISODateString | null;
}