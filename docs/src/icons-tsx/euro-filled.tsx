import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EuroFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2C6.4772 2 2 6.4772 2 12s4.4772 10 10 10 10-4.4772 10-10S17.5228 2 12 2M8.0918 13c.4081 2.2029 2.1376 4 4.4082 4 1.3068 0 2.4584-.6158 3.2591-1.5497.3595-.4192.3111-1.0505-.1082-1.41s-1.0506-.3111-1.41.1082c-.4698.5479-1.089.8515-1.7409.8515-1.007 0-2.0019-.7758-2.3603-2H11c.5523 0 1-.4477 1-1s-.4477-1-1-1h-.8603c.3584-1.2242 1.3533-2 2.3603-2 .6519 0 1.2711.3036 1.7409.8515.3594.4193.9908.4677 1.41.1082.4193-.3595.4677-.9908.1082-1.41C14.9584 7.6157 13.8068 7 12.5 7c-2.2706 0-4 1.797-4.4082 4H8c-.5523 0-1 .4477-1 1s.4477 1 1 1z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(EuroFilledIcon);
export default ForwardRef;
