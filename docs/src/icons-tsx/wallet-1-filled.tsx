import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Wallet1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 8c0-2.2091 1.7909-4 4-4h12c2.2091 0 4 1.7909 4 4v8c0 2.2091-1.7909 4-4 4H6c-2.2091 0-4-1.7909-4-4zm2.2676-1h15.4648c-.3458-.5978-.9921-1-1.7324-1H6c-.7403 0-1.3866.4022-1.7324 1M20 9H4v1h5c.5523 0 1 .4477 1 1s.4477 1 1 1h2c.5523 0 1-.4477 1-1s.4477-1 1-1h5z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Wallet1FilledIcon);
export default createLucideIcon('Wallet1FilledIcon', ForwardRef);
