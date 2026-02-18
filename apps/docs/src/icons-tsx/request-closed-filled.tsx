import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RequestClosedFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6.5 3c-1.6569 0-3 1.3431-3 3 0 1.3062.8348 2.4175 2 2.8293v6.3414c-1.1652.4118-2 1.5231-2 2.8293 0 1.6569 1.3431 3 3 3s3-1.3431 3-3c0-1.3062-.8348-2.4175-2-2.8293V8.8293c1.1652-.4118 2-1.523 2-2.8293 0-1.6569-1.3431-3-3-3M16.4571 3.5429c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142L16.0858 6l-1.0429 1.0429c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0L17.5 7.4142l1.0429 1.043c.3905.3904 1.0237.3904 1.4142 0 .3905-.3906.3905-1.0238 0-1.4143L18.9142 6l1.0429-1.0429c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L17.5 4.5858zM18.5 11c0-.5523-.4477-1-1-1s-1 .4477-1 1v4.1707c-1.1652.4118-2 1.5231-2 2.8293 0 1.6569 1.3431 3 3 3s3-1.3431 3-3c0-1.3062-.8348-2.4175-2-2.8293z" /></svg>;
const ForwardRef = forwardRef(RequestClosedFilledIcon);
export default createLucideIcon('RequestClosedFilledIcon', ForwardRef);
