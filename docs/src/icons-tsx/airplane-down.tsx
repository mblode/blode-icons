import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AirplaneDownIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19h18M7.2372 4.6656c-.4427-.776-1.2031-1.3146-2.077-1.4713L4.0775 3l.2983 4.1365-.2977.2094a2.563 2.563 0 0 0-1.0455 1.6424c-.2006 1.1138.5454 2.1763 1.6536 2.3552l3.801.6135-.5721 1.1822c-.2917.6028.0696 1.3196.7244 1.437l.7074.127a2.98 2.98 0 0 0 1.8036-.2409l3.1025-1.4708 4.4448.7974c.812.1457 1.6274-.2371 2.0397-.9574.4501-.7863.3109-1.7808-.3373-2.4108l-1.4437-1.403a1.994 1.994 0 0 0-1.057-.5373c-1.6936-.2872-6.46-1.0974-8.4918-1.4619a2.01 2.01 0 0 1-1.3892-.9838z" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(AirplaneDownIcon);
export default ForwardRef;
