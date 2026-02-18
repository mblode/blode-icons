import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FloppyDisk1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7 3C4.7909 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4v-7c0-1.1046.8954-2 2-2h6c1.1046 0 2 .8954 2 2v7c2.2091 0 4-1.7909 4-4V8.2426a4 4 0 0 0-1.1716-2.8284l-1.2426-1.2426A4 4 0 0 0 17 3.1979V7c0 1.1046-.8954 2-2 2H9c-1.1046 0-2-.8954-2-2z" /><path fill="currentColor" d="M15 3H9v4h6zM15 21v-7H9v7z" /></svg>;
const ForwardRef = forwardRef(FloppyDisk1FilledIcon);
export default createLucideIcon('FloppyDisk1FilledIcon', ForwardRef);
