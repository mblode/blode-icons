import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ThinkingBubbleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4.75 16.5C3.2312 16.5 2 17.7312 2 19.25S3.2312 22 4.75 22s2.75-1.2312 2.75-2.75-1.2312-2.75-2.75-2.75M13 2c-1.3471 0-2.5384.6669-3.2616 1.684-.152.2137-.3969.3245-.5702.3188A5 5 0 0 0 9 4C6.2386 4 4 6.2386 4 9c0 1.6367.7875 3.0898 2 4.0003C6.0002 15.2093 7.791 17 10 17a3.99 3.99 0 0 0 2.6826-1.0328c.2315-.2095.5756-.2744.7783-.2089A5 5 0 0 0 15 16c1.8611 0 3.4833-1.0173 4.3432-2.5213a.366.366 0 0 1 .1355-.1355C20.9827 12.4833 22 10.8611 22 9c0-2.7614-2.2386-5-5-5q-.0844 0-.1682.0028c-.1733.0057-.4182-.105-.5702-.3188C15.5384 2.6669 14.3471 2 13 2" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ThinkingBubbleFilledIcon);
export default ForwardRef;
