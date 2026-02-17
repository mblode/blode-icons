import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BackwardFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7.7388 4a4 4 0 0 0-3.473 2.0154l-2.2856 4a4 4 0 0 0 0 3.9692l2.2857 4A4 4 0 0 0 7.7389 20h10.259c2.2091 0 4-1.7909 4-4V8c0-2.2091-1.7909-4-4-4zm3.9664 5.2929c-.3906-.3905-1.0237-.3905-1.4143 0s-.3905 1.0237 0 1.4142L11.5838 12l-1.2929 1.2929c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4143 0l1.2928-1.2929 1.2929 1.2929c.3906.3905 1.0237.3905 1.4143 0s.3905-1.0237 0-1.4142L14.4123 12l1.2929-1.2929c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4143 0l-1.2929 1.2929z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BackwardFilledIcon);
export default createLucideIcon('BackwardFilledIcon', ForwardRef);
