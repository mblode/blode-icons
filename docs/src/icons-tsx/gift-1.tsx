import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Gift1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M12 8V6.3333M12 8h-1.6667C8.4923 8 7 6.5076 7 4.6667 7 3.7462 7.7462 3 8.6667 3 10.5076 3 12 4.4924 12 6.3333M12 8h1.6667C15.5076 8 17 6.5076 17 4.6667 17 3.7462 16.2538 3 15.3333 3 13.4924 3 12 4.4924 12 6.3333M12 8v12m7-8.2676V17c0 1.6569-1.3431 3-3 3H8c-1.6569 0-3-1.3431-3-3v-5.2676m14 0V11.5m0 .2324c.5978-.3458 1-.9921 1-1.7324 0-1.1046-.8954-2-2-2H6c-1.1046 0-2 .8954-2 2 0 .7403.4022 1.3866 1 1.7324m14 0A1.99 1.99 0 0 1 18 12H6a1.99 1.99 0 0 1-1-.2676M5 11.5v.2324" /></svg>;
const ForwardRef = forwardRef(Gift1Icon);
export default ForwardRef;
