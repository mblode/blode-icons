import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const H3FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 4c.5523 0 1 .4477 1 1v6h8V5c0-.5523.4477-1 1-1s1 .4477 1 1v14c0 .5523-.4477 1-1 1s-1-.4477-1-1v-6H4v6c0 .5523-.4477 1-1 1s-1-.4477-1-1V5c0-.5523.4477-1 1-1m17 8a.999.999 0 0 0-.8668.5007c-.2766.4781-.8883.6414-1.3664.3649-.478-.2765-.6414-.8883-.3648-1.3663C17.9192 10.6052 18.8883 10 20 10c1.6569 0 3 1.3431 3 3a2.99 2.99 0 0 1-.7639 2A2.99 2.99 0 0 1 23 17c0 1.6569-1.3431 3-3 3-1.1117 0-2.0808-.6052-2.598-1.4993-.2766-.478-.1132-1.0898.3648-1.3663.4781-.2765 1.0898-.1132 1.3664.3649A.999.999 0 0 0 20 18c.5523 0 1-.4477 1-1s-.4477-1-1-1-1-.4477-1-1 .4477-1 1-1 1-.4477 1-1-.4477-1-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(H3FilledIcon);
export default ForwardRef;
