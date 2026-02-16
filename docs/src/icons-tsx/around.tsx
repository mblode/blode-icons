import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AroundIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M21 7v11c0 .4405-.6342.8437-1.7085 1.1714C17.5809 19.6933 16 18.2254 16 16.437v-5.9629c0-1.5282 1.1608-2.768 2.6456-3.1297C20.1071 6.9884 21 6.516 21 6c0-1.1-4.03-2-9-2s-9 .9-9 2c0 .5226.8927.9927 2.354 1.3466C6.8393 7.7063 8 8.9459 8 10.474v5.9629c0 1.7884-1.5809 3.2563-3.2915 2.7344C3.6342 18.8437 3 18.4405 3 18V7m12.5 9.1566C14.4273 16.0522 13.2435 16 12 16c-1.2308 0-2.4031.0584-3.467.1566" /></svg>;
const ForwardRef = forwardRef(AroundIcon);
export default ForwardRef;
