import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AnimationLinearFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M20.7071 3.2929c.3905.3905.3905 1.0237 0 1.4142l-16 16c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l16-16c.3905-.3905 1.0237-.3905 1.4142 0" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(AnimationLinearFilledIcon);
export default createLucideIcon('AnimationLinearFilledIcon', ForwardRef);
