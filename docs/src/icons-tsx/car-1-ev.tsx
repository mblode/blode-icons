import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Car1EvIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M19.5 17h.5c1.1046 0 2-.8954 2-2v-2.5406c0-1.43-1.0094-2.6613-2.4117-2.9417l-1.839-.3678a2 2 0 0 1-1.2078-.7612L14.9 6.2A3 3 0 0 0 12.5 5H8.6055a3 3 0 0 0-2.4961 1.3359l-.8875 1.3313a2 2 0 0 1-.5547.5547l-1.3313.8875A3 3 0 0 0 2 11.6056V15c0 1.1046.8954 2 2 2h.5M14.5 17h-5" /><circle cx={7} cy={16.75} r={2.25} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><circle cx={17} cy={16.75} r={2.25} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><path fill="currentColor" d="M13.9933 10h-2.0766l.2863-2.0618c.0354-.2543-.2898-.3902-.446-.1865L8.8083 11.598c-.1261.1645-.0088.4021.1984.4021h2.0766l-.2863 2.0618c-.0353.2543.2898.3902.446.1865l2.9487-3.8462c.1261-.1645.0089-.4021-.1984-.4021" /></svg>;
const ForwardRef = forwardRef(Car1EvIcon);
export default ForwardRef;
