import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ClapperboardFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 8c0-2.2091 1.7909-4 4-4h12c2.2091 0 4 1.7909 4 4v8c0 2.2091-1.7909 4-4 4H6c-2.2091 0-4-1.7909-4-4zm2 0c0-1.1046.8954-2 2-2h.7802l-.6 3H4zm16 1V8c0-1.1046-.8954-2-2-2h-.1802l-.6 3zm-4.8198 0 .6-3h-2.4604l-.6 3zm-4.5 0 .6-3H8.8198l-.6 3z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ClapperboardFilledIcon);
export default ForwardRef;
