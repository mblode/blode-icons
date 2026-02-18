import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowsRepeatFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12.2929 1.2929c.3905-.3905 1.0237-.3905 1.4142 0l3 3c.3905.3905.3905 1.0237 0 1.4142l-3 3c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142L13.5858 6H7c-1.1046 0-2 .8954-2 2v5c0 .5523-.4477 1-1 1s-1-.4477-1-1V8c0-2.2091 1.7909-4 4-4h6.5858l-1.2929-1.2929c-.3905-.3905-.3905-1.0237 0-1.4142M20 10c.5523 0 1 .4477 1 1v5c0 2.2091-1.7909 4-4 4h-6.5858l1.2929 1.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-3-3c-.3905-.3905-.3905-1.0237 0-1.4142l3-3c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4142L10.4142 18H17c1.1046 0 2-.8954 2-2v-5c0-.5523.4477-1 1-1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(ArrowsRepeatFilledIcon);
export default createLucideIcon('ArrowsRepeatFilledIcon', ForwardRef);
