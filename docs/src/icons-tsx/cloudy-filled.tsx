import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CloudyFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M10.3608 6.1324A7.03 7.03 0 0 0 9 6c-3.866 0-7 3.134-7 7s3.134 7 7 7h7.5c3.0376 0 5.5-2.4624 5.5-5.5 0-1.888-.9511-3.5522-2.3981-4.5422A4.99 4.99 0 0 0 20 8c0-2.7614-2.2386-5-5-5-2.1016 0-3.8993 1.296-4.6392 3.1324m1.8891.6664a7.03 7.03 0 0 1 2.5082 2.2198c.0692.0998.2483.1835.4309.1389A5.5 5.5 0 0 1 16.5 9c.4374 0 .8636.0512 1.2727.1482A2.99 2.99 0 0 0 18 8c0-1.6569-1.3431-3-3-3-1.2292 0-2.2869.74-2.7501 1.7988" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CloudyFilledIcon);
export default ForwardRef;
