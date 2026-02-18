import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ColumnWideRemoveIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 19v1c.5523 0 1-.4477 1-1zm8-9c0 .5523.4477 1 1 1s1-.4477 1-1zm-2.2929 4.2929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142zm2.5858 5.4142c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142zm-4-1.4142c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0zm5.4142-2.5858c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0zM4 16V8H2v8zm8 2H6v2h6zm8-10v2h2V8zM6 6h6V4H6zm6 0h6V4h-6zm1 13V5h-2v14zm3.2929-3.2929 2 2 1.4142-1.4142-2-2zm2 2 2 2 1.4142-1.4142-2-2zm-.5858 2 2-2-1.4142-1.4142-2 2zm2-2 2-2-1.4142-1.4142-2 2zM22 8c0-2.2091-1.7909-4-4-4v2c1.1046 0 2 .8954 2 2zM4 8c0-1.1046.8954-2 2-2V4C3.7909 4 2 5.7909 2 8zm-2 8c0 2.2091 1.7909 4 4 4v-2c-1.1046 0-2-.8954-2-2z" /></svg>;
const ForwardRef = forwardRef(ColumnWideRemoveIcon);
export default createLucideIcon('ColumnWideRemoveIcon', ForwardRef);
