// @ts-ignore
import { InjectionToken } from '@angular/core';
export const baseUrl = new InjectionToken<string>('baseUrl', {
    providedIn: 'root',
// @ts-ignore
    factory: (): any => window['__env'].host
});
