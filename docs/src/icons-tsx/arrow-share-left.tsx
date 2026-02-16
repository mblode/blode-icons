import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowShareLeftIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="m2.236 11.2833 7.0665-6.8806c.6337-.617 1.6976-.168 1.6976.7165v2.8806c0 .2761.2279.4996.504.5036 7.9552.1168 10.4113 3.0622 10.4939 11.0688.0011.1055-.1412.1425-.1893.0486-1.3788-2.6895-2.6209-4.0625-10.3036-4.1192-.2762-.002-.505.222-.505.4982v2.8806c0 .8844-1.0639 1.3335-1.6976.7164L2.236 12.7162c-.4032-.3925-.4032-1.0403 0-1.4329Z" /></svg>;
const ForwardRef = forwardRef(ArrowShareLeftIcon);
export default ForwardRef;
