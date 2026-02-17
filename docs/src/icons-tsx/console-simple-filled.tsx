import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ConsoleSimpleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4.2929 6.2929c.3905-.3905 1.0237-.3905 1.4142 0L10 10.5858c.781.781.781 2.0474 0 2.8284l-4.2929 4.2929c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142L8.5858 12l-4.293-4.2929c-.3904-.3905-.3904-1.0237 0-1.4142M12 17c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ConsoleSimpleFilledIcon);
export default createLucideIcon('ConsoleSimpleFilledIcon', ForwardRef);
