import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SpaceIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M5.2917 18c1.648-1.8412 4.0428-3 6.7083-3s5.0604 1.1588 6.7083 3M5.2917 18c1.648 1.8412 4.0428 3 6.7083 3s5.0604-1.1588 6.7083-3M5.2917 18C3.8666 16.4077 3 14.3051 3 12c0-4.9706 4.0294-9 9-9s9 4.0294 9 9c0 2.3051-.8666 4.4077-2.2917 6" /><path fill="currentColor" d="m9.2877 8.5345 1.3427-.6714a.52.52 0 0 0 .2327-.2327l.6714-1.3427c.1918-.3836.7392-.3836.931 0l.6714 1.3427a.52.52 0 0 0 .2327.2327l1.3427.6714c.3836.1918.3836.7392 0 .931l-1.3427.6714a.52.52 0 0 0-.2327.2327l-.6714 1.3427c-.1918.3836-.7392.3836-.931 0l-.6714-1.3427a.52.52 0 0 0-.2327-.2327l-1.3427-.6714c-.3836-.1918-.3836-.7392 0-.931" /></svg>;
const ForwardRef = forwardRef(SpaceIcon);
export default createLucideIcon('SpaceIcon', ForwardRef);
