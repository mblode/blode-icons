import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PickelballFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 22c5.5228 0 10-4.4772 10-10S17.5228 2 12 2 2 6.4772 2 12s4.4772 10 10 10M11 7.9999c0 .6075-.4925 1.1-1.1 1.1s-1.1-.4925-1.1-1.1.4925-1.1 1.1-1.1 1.1.4925 1.1 1.1M13.0999 12c0 .6075-.4925 1.1-1.1 1.1s-1.1-.4925-1.1-1.1.4925-1.1 1.1-1.1 1.1.4925 1.1 1.1M9.9 17.0999c.6075 0 1.1-.4925 1.1-1.1s-.4925-1.1-1.1-1.1-1.1.4925-1.1 1.1.4925 1.1 1.1 1.1m5.3-9.1c0 .6075-.4925 1.1-1.1 1.1s-1.1-.4925-1.1-1.1.4925-1.1 1.1-1.1 1.1.4925 1.1 1.1m-1.1 9.1c.6075 0 1.1-.4925 1.1-1.1s-.4925-1.1-1.1-1.1-1.1.4925-1.1 1.1.4925 1.1 1.1 1.1M8.3499 12c0 .6075-.4925 1.1-1.1 1.1s-1.1-.4925-1.1-1.1.4925-1.1 1.1-1.1 1.1.4925 1.1 1.1m8.3951 1.1c.6075 0 1.1-.4925 1.1-1.1s-.4925-1.1-1.1-1.1-1.1.4925-1.1 1.1.4925 1.1 1.1 1.1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(PickelballFilledIcon);
export default createLucideIcon('PickelballFilledIcon', ForwardRef);
