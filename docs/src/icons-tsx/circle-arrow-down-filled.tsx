import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CircleArrowDownFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.4772 6.4772 2 12 2s10 4.4772 10 10-4.4772 10-10 10S2 17.5228 2 12m7 5c-.5523 0-1-.4477-1-1s.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1zm5.7071-5.2929-2 2c-.3905.3905-1.0237.3905-1.4142 0l-2-2c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0l.2929.2929V8c0-.5523.4477-1 1-1s1 .4477 1 1v2.5858l.2929-.2929c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4142" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(CircleArrowDownFilledIcon);
export default createLucideIcon('CircleArrowDownFilledIcon', ForwardRef);
