import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ImagesCircleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10m-8-.25c1.2426 0 2.25-1.0074 2.25-2.25S15.2426 7.25 14 7.25s-2.25 1.0074-2.25 2.25 1.0074 2.25 2.25 2.25M12 20c1.1739 0 2.2887-.2528 3.293-.707l-5.1717-5.1717c-1.1715-1.1716-3.071-1.1716-4.2426 0L4.707 15.293C5.9623 18.0687 8.7556 20 12 20" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(ImagesCircleFilledIcon);
export default createLucideIcon('ImagesCircleFilledIcon', ForwardRef);
