import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FistbumpFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12.7507 3.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zM7.266 5.198a.75.75 0 1 0-1.1491.9642l1.607 1.915a.75.75 0 1 0 1.149-.9641zM17.8726 6.1623a.75.75 0 1 0-1.1491-.9642l-1.6069 1.9151a.75.75 0 1 0 1.149.9642zM5.2207 9a2.206 2.206 0 0 0-2.0364 1.3576l-.3958.9501A1.125 1.125 0 0 1 1.75 12a.75.75 0 0 0-.75.75V19c0 .5523.4477 1 1 1h5.3894c2.0084 0 3.6869-1.5285 3.8743-3.5281l.1618-1.7259C11.6391 12.468 9.847 10.5 7.559 10.5a.295.295 0 0 1-.245-.1311l-.2577-.3865A2.206 2.206 0 0 0 5.2207 9M18.722 9a2.206 2.206 0 0 0-1.8355.9824l-.2577.3865a.295.295 0 0 1-.245.1311c-2.288 0-4.0801 1.968-3.8666 4.246l.1618 1.7259C12.8665 18.4715 14.545 20 16.5534 20h5.3894c.5522 0 1-.4477 1-1v-6.25a.75.75 0 0 0-.75-.75 1.125 1.125 0 0 1-1.0385-.6923l-.3959-.9501A2.206 2.206 0 0 0 18.722 9" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FistbumpFilledIcon);
export default createLucideIcon('FistbumpFilledIcon', ForwardRef);
