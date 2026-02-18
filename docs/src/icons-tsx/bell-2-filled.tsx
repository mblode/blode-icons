import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Bell2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2C8.106 2 4.896 5.0535 4.7016 8.9426l-.169 3.3787a2 2 0 0 1-.2086.7946L3.191 15.382a1.81 1.81 0 0 0-.191.809C3 17.1901 3.81 18 4.809 18H7.1c.4633 2.2822 2.481 4 4.9 4s4.4367-1.7178 4.9-4h2.291c.9991 0 1.809-.8099 1.809-1.809 0-.2809-.0654-.5578-.191-.809l-1.133-2.2661a2 2 0 0 1-.2087-.7946l-.1689-3.3787C19.1039 5.0535 15.894 2 12 2m0 18c-1.3062 0-2.4175-.8348-2.8293-2h5.6586c-.4118 1.1652-1.5231 2-2.8293 2" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Bell2FilledIcon);
export default createLucideIcon('Bell2FilledIcon', ForwardRef);
