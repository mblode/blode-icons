import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowsRepeatRightLeftFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M16.7929 2.2929c.3905-.3905 1.0237-.3905 1.4142 0L20.5 4.5858c.781.781.781 2.0474 0 2.8284l-2.2929 2.293c-.3905.3904-1.0237.3904-1.4142 0-.3905-.3906-.3905-1.0238 0-1.4143L18.0858 7H7c-1.1046 0-2 .8954-2 2v2c0 .5523-.4477 1-1 1s-1-.4477-1-1V9c0-2.2091 1.7909-4 4-4h11.0858l-1.2929-1.2929c-.3905-.3905-.3905-1.0237 0-1.4142M21 13c0-.5523-.4477-1-1-1s-1 .4477-1 1v2c0 1.1046-.8954 2-2 2H5.914l1.293-1.2929c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4143 0L3.5 16.5858c-.7811.781-.7811 2.0474 0 2.8284l2.2928 2.2929c.3906.3905 1.0237.3905 1.4143 0s.3905-1.0237 0-1.4142L5.914 19H17c2.2091 0 4-1.7909 4-4z" /></svg>;
const ForwardRef = forwardRef(ArrowsRepeatRightLeftFilledIcon);
export default createLucideIcon('ArrowsRepeatRightLeftFilledIcon', ForwardRef);
