import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const StorageFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13 17c-.5523 0-1 .4477-1 1s.4477 1 1 1 1-.4477 1-1-.4477-1-1-1M16 17c-.5523 0-1 .4477-1 1s.4477 1 1 1 1-.4477 1-1-.4477-1-1-1" /><path fill="currentColor" fillRule="evenodd" d="M8 2C5.7909 2 4 3.7909 4 6v12c0 2.2091 1.7909 4 4 4h8c2.2091 0 4-1.7909 4-4V6c0-2.2091-1.7909-4-4-4zm0 18c-1.1046 0-2-.8954-2-2s.8954-2 2-2h8c1.1046 0 2 .8954 2 2s-.8954 2-2 2z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(StorageFilledIcon);
export default createLucideIcon('StorageFilledIcon', ForwardRef);
