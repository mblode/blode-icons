import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MarkerCircleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10M6.503 17.8124c.384-.4911.6913-.9575.9456-1.4513C7.8491 15.5834 8.5956 15 9.4704 15h5.0592c.8748 0 1.6213.5834 2.0218 1.3611.2543.4938.5616.9602.9455 1.4513C16.0636 19.1684 14.1289 20 12 20s-4.0636-.8316-5.497-2.1876M9 13v-1.9384a2 2 0 0 1 1.5149-1.9403l2-.5C13.7772 8.3057 15 9.2604 15 10.5616V13z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(MarkerCircleFilledIcon);
export default createLucideIcon('MarkerCircleFilledIcon', ForwardRef);
