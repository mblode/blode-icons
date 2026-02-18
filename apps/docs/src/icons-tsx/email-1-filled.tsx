import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Email1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M2.3409 6.3891c-.1787.4254-.2572.8754-.2967 1.359C2 8.2895 2 8.9538 2 9.7588v4.4826c0 .805 0 1.4693.0442 2.0105.046.5621.1445 1.0788.3918 1.5642a4 4 0 0 0 1.748 1.748c.4854.2473 1.002.3459 1.5642.3918C6.2894 20 6.9537 20 7.7587 20h8.4826c.8049 0 1.4693 0 2.0105-.0442.5621-.0459 1.0788-.1445 1.5642-.3918a4 4 0 0 0 1.748-1.748c.2473-.4854.3459-1.0021.3918-1.5642C22 15.7106 22 15.0463 22 14.2413V9.7587c0-.805 0-1.4693-.0442-2.0105-.0395-.4837-.118-.9337-.2967-1.359l-7.1262 5.8304c-1.4734 1.2056-3.5924 1.2056-5.0659 0z" /><path fill="currentColor" d="M20.4224 4.8169a4 4 0 0 0-.6064-.381c-.4854-.2472-1.0021-.3458-1.5642-.3917C17.7106 4 17.0463 4 16.2413 4H7.7587c-.805 0-1.4693 0-2.0105.0442-.5621.046-1.0788.1445-1.5642.3918a4 4 0 0 0-.6064.381l7.1559 5.8547a2 2 0 0 0 2.533 0z" /></svg>;
const ForwardRef = forwardRef(Email1FilledIcon);
export default createLucideIcon('Email1FilledIcon', ForwardRef);
