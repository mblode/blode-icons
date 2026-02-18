import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Clipboard2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M16.4649 4H17c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4V8c0-2.2091 1.7909-4 4-4h.5351C8.2267 2.8044 9.5194 2 11 2h2c1.4806 0 2.7733.8044 3.4649 2M9 6h6c0-1.1046-.8954-2-2-2h-2c-1.1046 0-2 .8954-2 2" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Clipboard2FilledIcon);
export default createLucideIcon('Clipboard2FilledIcon', ForwardRef);
