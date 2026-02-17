import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TargetIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.0002c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9m4.7712 10.4994c-.6371 2.0287-2.5323 3.5002-4.7712 3.5002-2.7614 0-5-2.2386-5-5 0-2.2388 1.4715-4.134 3.5-4.771m3.5 2.7714h2.7574a3 3 0 0 0 2.1213-.8787l2.3353-2.3353c.1314-.1314.0786-.3552-.0978-.414L18.5 5.5003l-.8721-2.6163c-.0588-.1763-.2825-.229-.4139-.0977l-2.3353 2.3353A3 3 0 0 0 14 7.2428zm0 0-2 2" /></svg>;
const ForwardRef = forwardRef(TargetIcon);
export default ForwardRef;
