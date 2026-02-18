import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CircleHalfFillIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 20c4.4183 0 8-3.5817 8-8s-3.5817-8-8-8zm10-8c0 5.5228-4.4772 10-10 10a10.1 10.1 0 0 1-1.1099-.061C5.8891 21.3862 2 17.148 2 12s3.8891-9.3862 8.8901-9.939C11.2549 2.0207 11.6252 2 12 2c5.5228 0 10 4.4772 10 10" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(CircleHalfFillIcon);
export default createLucideIcon('CircleHalfFillIcon', ForwardRef);
