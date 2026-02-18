import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RulerFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13.6711 2.9143c1.5621-1.5621 4.0948-1.5621 5.6569 0l1.7573 1.7573c1.5621 1.5621 1.5621 4.0948 0 5.6569L10.328 21.0858c-1.5621 1.5621-4.0948 1.5621-5.6569 0l-1.7573-1.7573c-1.5621-1.5621-1.5621-4.0948 0-5.6569l1.1717-1.1718 1.9574 1.9574c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142l-1.9573-1.9574 2.0858-2.0858 2.9573 2.9574c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142L8.9998 7.5856l2.0857-2.0858 1.9574 1.9574c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142l-1.9573-1.9574z" /></svg>;
const ForwardRef = forwardRef(RulerFilledIcon);
export default createLucideIcon('RulerFilledIcon', ForwardRef);
