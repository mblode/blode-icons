import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Car6EvIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M18.5 17H20c1.1046 0 2-.8954 2-2v-2.5406c0-1.43-1.0094-2.6613-2.4117-2.9417l-1.839-.3678a2 2 0 0 1-1.2078-.7612L14.9 6.2A3 3 0 0 0 12.5 5H5C3.3431 5 2 6.3431 2 8v7c0 1.1046.8954 2 2 2h.5M9.5 17h5" /><circle cx={7} cy={16.75} r={2.25} stroke="currentColor" strokeWidth={2} /><circle cx={17} cy={16.75} r={2.25} stroke="currentColor" strokeWidth={2} /><path fill="currentColor" d="M13.9949 9.9994h-2.0766l.2863-2.0618c.0354-.2543-.2898-.3903-.446-.1865l-2.9487 3.8461c-.1261.1645-.0089.4022.1984.4022h2.0766l-.2863 2.0617c-.0353.2544.2898.3903.446.1865l2.9487-3.8461c.1261-.1645.0089-.4022-.1984-.4022" /></svg>;
const ForwardRef = forwardRef(Car6EvIcon);
export default ForwardRef;
