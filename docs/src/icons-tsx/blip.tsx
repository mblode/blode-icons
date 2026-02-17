import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BlipIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7.6043 8.135-.735-4.0037.6493-.537c1.4142-1.1695 3.581-.5329 4.1147 1.2088m3.5077 9.6154c.9938-.7969 2.4564-.6722 3.2902.2866.8631.9924.7284 2.4903-.2983 3.3177l-1.7727 1.4286c-2.9476 2.3753-7.2851 1.974-9.7325-.9006-2.4696-2.9005-2.0857-7.2249.8574-9.6587l6.2423-5.1622c.9749-.8061 2.4283-.6808 3.2463.28s.6908 2.393-.284 3.1992l-3.7264 3.0815.5884-.4865c.9748-.8062 2.4282-.6809 3.2462.2799s.6908 2.3931-.284 3.1992l-.5884.4866" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BlipIcon);
export default ForwardRef;
