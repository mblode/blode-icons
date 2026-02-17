import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BubbleCheckFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7.002 3h9.9999c2.2092 0 4.0001 1.7909 4.0001 4v8.0358c0 2.2091-1.7909 3.9999-4 4h-1.6263l-2.74 2.27a1 1 0 0 1-1.2804-.0037l-2.7037-2.2663H7.0019c-2.209 0-4-1.7909-4-4V7c0-2.2091 1.791-4 4-4m8.4549 6.9571c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0l-2.7929 2.7929-.7929-.7929c-.3906-.3905-1.0237-.3905-1.4142 0-.3906.3905-.3906 1.0237 0 1.4142l1.5 1.5a1 1 0 0 0 1.4142 0z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BubbleCheckFilledIcon);
export default createLucideIcon('BubbleCheckFilledIcon', ForwardRef);
