import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RepeatFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M6 5c-1.1046 0-2 .8954-2 2v8c0 1.1046.8954 2 2 2h1c.5523 0 1 .4477 1 1s-.4477 1-1 1H6c-2.2091 0-4-1.7909-4-4V7c0-2.2091 1.7909-4 4-4h12c2.2091 0 4 1.7909 4 4v8c0 2.2091-1.7909 4-4 4h-3.5858l1.2929 1.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-3-3c-.3905-.3905-.3905-1.0237 0-1.4142l3-3c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4142L14.4142 17H18c1.1046 0 2-.8954 2-2V7c0-1.1046-.8954-2-2-2z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(RepeatFilledIcon);
export default createLucideIcon('RepeatFilledIcon', ForwardRef);
