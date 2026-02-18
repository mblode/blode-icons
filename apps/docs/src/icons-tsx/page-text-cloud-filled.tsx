import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PageTextCloudFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 6c0-2.2091 1.7909-4 4-4h8c2.2091 0 4 1.7909 4 4v7.1678C18.8872 12.1353 17.3932 11.5 15.75 11.5c-3.4518 0-6.25 2.7982-6.25 6.25 0 1.6413.6326 3.1348 1.6674 4.25H8c-2.2091 0-4-1.7909-4-4zm3 0c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1m0 4c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M15.75 13.5c-2.3472 0-4.25 1.9028-4.25 4.25S13.4028 22 15.75 22h2.75c1.933 0 3.5-1.567 3.5-3.5 0-1.7554-1.2923-3.2089-2.9773-3.4612-.778-.9383-1.9543-1.5388-3.2727-1.5388m-2.25 4.25c0-1.2426 1.0074-2.25 2.25-2.25.7961 0 1.4953.4122 1.8966 1.0391A1 1 0 0 0 18.491 17h.009c.828.0005 1.5.6719 1.5 1.5 0 .8284-.6716 1.5-1.5 1.5h-2.75c-1.2426 0-2.25-1.0074-2.25-2.25" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(PageTextCloudFilledIcon);
export default createLucideIcon('PageTextCloudFilledIcon', ForwardRef);
