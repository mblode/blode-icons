import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DollarIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 7.5v-1m0 10v1M14.1655 9C13.7333 8.4022 12.9254 8 12 8h-.2778C10.4949 8 9.5 8.796 9.5 9.7778v.0763c0 .7023.496 1.3443 1.2812 1.6584l2.4376.975c.7852.3141 1.2812.9561 1.2812 1.6584C14.5 15.1699 13.4624 16 12.1824 16H12c-.9254 0-1.7333-.4022-2.1655-1M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9" /></svg>;
const ForwardRef = forwardRef(DollarIcon);
export default ForwardRef;
