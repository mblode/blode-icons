import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SubscriptionTick2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8.9996 13 1.9999 1.75 3.5-5M9.7737 3.976l.1045-.1045c1.1716-1.1716 3.0711-1.1716 4.2427 0l.1045.1045a2.9 2.9 0 0 0 2.05.8491c1.6012 0 2.8991 1.298 2.8991 2.8992 0 .7689.3055 1.5063.8492 2.05l.1045.1045c1.1716 1.1716 1.1716 3.0711 0 4.2427l-.1045.1045a2.9 2.9 0 0 0-.8492 2.05c0 1.6011-1.2979 2.8991-2.8991 2.8991a2.9 2.9 0 0 0-2.05.8492l-.1045.1045c-1.1716 1.1716-3.0711 1.1716-4.2427 0l-.1045-.1045a2.9 2.9 0 0 0-2.05-.8492c-1.6012 0-2.8991-1.298-2.8991-2.8991a2.9 2.9 0 0 0-.8492-2.05l-.1045-.1045c-1.1716-1.1716-1.1716-3.0711 0-4.2427l.1045-.1045a2.9 2.9 0 0 0 .8492-2.05c0-1.6012 1.298-2.8992 2.899-2.8992a2.9 2.9 0 0 0 2.05-.8491" /></svg>;
const ForwardRef = forwardRef(SubscriptionTick2Icon);
export default createLucideIcon('SubscriptionTick2Icon', ForwardRef);
