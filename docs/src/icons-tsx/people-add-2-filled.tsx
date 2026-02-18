import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PeopleAdd2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5.5001 6.5c0-2.4853 2.0147-4.5 4.5-4.5s4.5 2.0147 4.5 4.5-2.0147 4.5-4.5 4.5-4.5-2.0147-4.5-4.5M2.5527 16.3886C3.9627 13.7661 6.6424 12 10 12s6.0375 1.7661 7.4474 4.3886c.6293 1.1703.3921 2.3851-.3055 3.2528C16.4687 20.479 15.3765 21 14.2049 21H5.7954c-1.1716 0-2.264-.521-2.9372-1.3586-.6976-.8677-.9347-2.0825-.3055-3.2528M20.0001 8c0-.5523-.4477-1-1-1s-1 .4477-1 1v2h-2c-.5523 0-1 .4477-1 1s.4477 1 1 1h2v2c0 .5523.4477 1 1 1s1-.4477 1-1v-2h2c.5523 0 1-.4477 1-1s-.4477-1-1-1h-2z" /></svg>;
const ForwardRef = forwardRef(PeopleAdd2FilledIcon);
export default createLucideIcon('PeopleAdd2FilledIcon', ForwardRef);
