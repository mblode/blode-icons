import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ClipboardFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M15.4649 4H16c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4H8c-2.2091 0-4-1.7909-4-4V8c0-2.2091 1.7909-4 4-4h.5351C9.2267 2.8044 10.5194 2 12 2s2.7733.8044 3.4649 2M10 6h4c0-1.1046-.8954-2-2-2s-2 .8954-2 2" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ClipboardFilledIcon);
export default ForwardRef;
