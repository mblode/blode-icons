import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const InboxEmptyFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4.268 6.0154A4 4 0 0 1 7.741 4h8.518a4 4 0 0 1 3.473 2.0154l2.741 4.7967A4 4 0 0 1 23 12.7967V16c0 2.2091-1.7909 4-4 4H5c-2.2091 0-4-1.7909-4-4v-3.2033c0-.6961.1817-1.3802.527-1.9846zM21 13h-4.25c-.4721 0-.9167.2223-1.2.6a3.5 3.5 0 0 1-2.8 1.4h-1.5a3.5 3.5 0 0 1-2.8-1.4 1.5 1.5 0 0 0-1.2-.6H3v3c0 1.1046.8954 2 2 2h14c1.1046 0 2-.8954 2-2z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(InboxEmptyFilledIcon);
export default createLucideIcon('InboxEmptyFilledIcon', ForwardRef);
