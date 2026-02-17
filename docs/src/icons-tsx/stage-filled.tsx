import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const StageFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 8c0-2.2091 1.7909-4 4-4h12c2.2091 0 4 1.7909 4 4v8c0 2.2091-1.7909 4-4 4H6c-2.2091 0-4-1.7909-4-4zm17.1919 9.6062-2.0203-2.0204A2 2 0 0 0 15.7574 15H8.2426a2 2 0 0 0-1.4142.5858L4.808 17.6062A1.99 1.99 0 0 0 6 18h12a1.99 1.99 0 0 0 1.1919-.3938" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(StageFilledIcon);
export default createLucideIcon('StageFilledIcon', ForwardRef);
