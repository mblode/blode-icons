import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BubbleCrossedFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7.002 3h9.9999c2.2092 0 4.0001 1.7909 4.0001 4v8.0358c0 2.2091-1.7909 3.9999-4 4h-1.6263l-2.74 2.27a1 1 0 0 1-1.2804-.0037l-2.7037-2.2663H7.0019c-2.209 0-4-1.7909-4-4V7c0-2.2091 1.791-4 4-4m7.7049 6.7071c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4143 0l-1.2928 1.2929-1.2929-1.293c-.3906-.3904-1.0237-.3904-1.4142 0-.3906.3906-.3906 1.0238 0 1.4143L10.5855 11l-1.2928 1.2929c-.3906.3905-.3906 1.0237 0 1.4142s1.0236.3905 1.4142 0l1.2929-1.2929 1.2928 1.2929c.3906.3905 1.0237.3905 1.4143 0s.3905-1.0237 0-1.4142L13.414 11z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BubbleCrossedFilledIcon);
export default createLucideIcon('BubbleCrossedFilledIcon', ForwardRef);
