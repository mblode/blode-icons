import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CloudySunFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M10.3608 8.1324A7.03 7.03 0 0 0 9 8c-3.866 0-7 3.134-7 7s3.134 7 7 7h7.5c3.0376 0 5.5-2.4624 5.5-5.5 0-1.888-.9511-3.5522-2.3981-4.5422A4.99 4.99 0 0 0 20 10c0-2.7614-2.2386-5-5-5-2.1016 0-3.8993 1.296-4.6392 3.1324m1.8891.6663a7.03 7.03 0 0 1 2.5082 2.2199c.0692.0998.2483.1835.4309.1389A5.5 5.5 0 0 1 16.5 11c.4374 0 .8636.0512 1.2727.1482A2.99 2.99 0 0 0 18 10c0-1.6569-1.3431-3-3-3-1.2292 0-2.2869.74-2.7501 1.7988M15 1c.5523 0 1 .4477 1 1v.5c0 .5523-.4477 1-1 1s-1-.4477-1-1V2c0-.5523.4477-1 1-1M8.9882 3.4896c.3905-.3906 1.0237-.3906 1.4142 0l.3536.3535c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-.3536-.3535c-.3905-.3906-.3905-1.0237 0-1.4143m12.0197 0c.3905.3905.3905 1.0236 0 1.4142l-.3536.3535c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l.3536-.3536c.3905-.3905 1.0237-.3905 1.4142 0M21.5 9.5c0-.5523.4477-1 1-1h.5c.5523 0 1 .4477 1 1s-.4477 1-1 1h-.5c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CloudySunFilledIcon);
export default createLucideIcon('CloudySunFilledIcon', ForwardRef);
