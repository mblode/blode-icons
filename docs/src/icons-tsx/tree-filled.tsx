import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TreeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2c-4.9706 0-9 4.0294-9 9 0 4.6326 3.5 8.4476 8 8.9451V21c0 .5523.4477 1 1 1s1-.4477 1-1v-1.0549c4.5-.4975 8-4.3125 8-8.9451 0-4.9706-4.0294-9-9-9m-1 15.9291v-2.5149l-1.7071-1.7071c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0L12 13.5858l2.2929-2.2929c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4142L13 15.4142v2.5149A7.1 7.1 0 0 1 12 18a7.1 7.1 0 0 1-1-.0709" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(TreeFilledIcon);
export default createLucideIcon('TreeFilledIcon', ForwardRef);
