import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const UnlockedFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2C9.2386 2 7 4.2386 7 7v2.126C5.2748 9.57 4 11.1362 4 13v5c0 2.2091 1.7909 4 4 4h8c2.2091 0 4-1.7909 4-4v-5c0-2.2091-1.7909-4-4-4H9V7c0-1.6569 1.3431-3 3-3 1.3965 0 2.5725.9551 2.9055 2.2493.1377.5348.6829.8568 1.2177.7191.5349-.1376.8569-.6828.7192-1.2177C16.2874 3.5944 14.3312 2 12 2m0 11c.5523 0 1 .4477 1 1v3c0 .5523-.4477 1-1 1s-1-.4477-1-1v-3c0-.5523.4477-1 1-1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(UnlockedFilledIcon);
export default createLucideIcon('UnlockedFilledIcon', ForwardRef);
