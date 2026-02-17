import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowExpandHorFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M6.7071 7.2929c.3905.3905.3905 1.0237 0 1.4142L4.4142 11h15.1716l-2.2929-2.2929c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0l4 4a1 1 0 0 1 0 1.4142l-4 4c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142L19.5858 13H4.4142l2.293 2.2929c.3904.3905.3904 1.0237 0 1.4142-.3906.3905-1.0238.3905-1.4143 0l-4-4a1 1 0 0 1 0-1.4142l4-4c.3905-.3905 1.0237-.3905 1.4142 0" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArrowExpandHorFilledIcon);
export default createLucideIcon('ArrowExpandHorFilledIcon', ForwardRef);
