import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RearFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 12c0-4.9706 4.0294-9 9-9 2.282 0 4.4025.8504 6.0118 2.2544V4c0-.5523.4478-1 1-1s1 .4477 1 1v4c0 .5523-.4477 1-1 1h-4c-.5522 0-1-.4477-1-1s.4478-1 1-1h1.9454C15.676 5.7641 13.9105 5 12 5c-3.866 0-7 3.134-7 7 0 .5523-.4477 1-1 1s-1-.4477-1-1m8 0c0-.5523.4477-1 1-1h.01c.5523 0 1 .4477 1 1s-.4477 1-1 1H12c-.5523 0-1-.4477-1-1m9-1c.5523 0 1 .4477 1 1 0 4.9706-4.0294 9-9 9-2.2764 0-4.392-.8462-6-2.2441V20c0 .5523-.4477 1-1 1s-1-.4477-1-1v-4c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1H7.0428C8.324 18.2359 10.0895 19 12 19c3.866 0 7-3.134 7-7 0-.5523.4477-1 1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(RearFilledIcon);
export default ForwardRef;
