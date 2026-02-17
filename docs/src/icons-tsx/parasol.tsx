import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ParasolIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m16.5013 19.7945-4.875-8.4437m-4.125-7.1447C3.1966 6.6913 1.7218 12.1956 4.207 16.5003c1.232-1.866 2.9641-2.866 4.7632-2.75m-1.469-9.5442c4.3047-2.4853 9.809-1.0104 12.2943 3.2942-2.2321.134-3.9641 1.134-4.7632 2.75m-7.531-6.0442c-1.674.9665-1.0164 5.2396 1.4689 9.5442m-1.469-9.5442c1.674-.9665 5.0459 1.7395 7.5311 6.0442m-6.0621 3.5c.8325-1.058 1.6818-1.837 2.6561-2.3995m3.406-1.1005c-1.3325.192-2.4318.538-3.406 1.1005" /></svg>;
const ForwardRef = forwardRef(ParasolIcon);
export default ForwardRef;
