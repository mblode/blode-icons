import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DevicesIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M2 16v-1c-.5523 0-1 .4477-1 1zm11 1h1v-2h-1zm0 4h1v-2h-1zm6-12v1h2V9zm-2 8c-.5523 0-1 .4477-1 1s.4477 1 1 1zm1 2c.5523 0 1-.4477 1-1s-.4477-1-1-1zM7 5h10V3H7zM5 16V7H3v9zm-3 1h2v-2H2zm2 0h9v-2H4zm9 2H5v2h8zM3 17v-1H1v1zM19 7v2h2V7zM5 19c-1.1046 0-2-.8954-2-2H1c0 2.2091 1.7909 4 4 4zM17 5c1.1046 0 2 .8954 2 2h2c0-2.2091-1.7909-4-4-4zM7 3C4.7909 3 3 4.7909 3 7h2c0-1.1046.8954-2 2-2zm9 7h3V8h-3zm5 2v6h2v-6zm-2 8h-3v2h3zm-5-2v-6h-2v6zm3 1h1v-2h-1zm-1 1c-1.1046 0-2-.8954-2-2h-2c0 2.2091 1.7909 4 4 4zm5-2c0 1.1046-.8954 2-2 2v2c2.2091 0 4-1.7909 4-4zm-2-8c1.1046 0 2 .8954 2 2h2c0-2.2091-1.7909-4-4-4zm-3-2c-2.2091 0-4 1.7909-4 4h2c0-1.1046.8954-2 2-2z" /></svg>;
const ForwardRef = forwardRef(DevicesIcon);
export default ForwardRef;
