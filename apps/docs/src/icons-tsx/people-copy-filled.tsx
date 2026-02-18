import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PeopleCopyFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M6 2C3.7909 2 2 3.7909 2 6v8c0 2.2091 1.7909 4 4 4 0 2.2091 1.7909 4 4 4h8c2.2091 0 4-1.7909 4-4v-8c0-2.2091-1.7909-4-4-4 0-2.2091-1.7909-4-4-4zm10 4c0-1.1046-.8954-2-2-2H6c-1.1046 0-2 .8954-2 2v8c0 1.1046.8954 2 2 2v-6c0-2.2091 1.7909-4 4-4zm-2 8.5c1.3807 0 2.5-1.1193 2.5-2.5S15.3807 9.5 14 9.5s-2.5 1.1193-2.5 2.5 1.1193 2.5 2.5 2.5M9.7516 20c-.3572 0-.597-.366-.4328-.6832 2.2914-4.4224 7.071-4.4224 9.3624 0 .1643.3172-.0756.6832-.4328.6832z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(PeopleCopyFilledIcon);
export default createLucideIcon('PeopleCopyFilledIcon', ForwardRef);
