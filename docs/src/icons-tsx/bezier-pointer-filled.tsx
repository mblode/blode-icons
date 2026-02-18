import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BezierPointerFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M11.5357 13.3901c-.3233-1.1315.7229-2.1777 1.8544-1.8544l6.452 1.8435c1.2941.3697 1.4841 2.1249.2991 2.763l-2.5994 1.3996-1.3996 2.5994c-.6381 1.185-2.3933.995-2.763-.2991zm2.1703.3159 1.2583 4.4041.8877-1.6486a1.5 1.5 0 0 1 .6095-.6095l1.6486-.8877z" clipRule="evenodd" /><path fill="currentColor" d="M5.5 3C4.1193 3 3 4.1193 3 5.5v1c0 1.2095.8589 2.2184 2 2.45v6.1c-1.1411.2316-2 1.2405-2 2.45v1C3 19.8807 4.1193 21 5.5 21h1c1.2095 0 2.2184-.8589 2.45-2H10c.5523 0 1-.4477 1-1s-.4477-1-1-1H8.95c-.1988-.9796-.9704-1.7512-1.95-1.95v-6.1c.9796-.1988 1.7512-.9704 1.95-1.95h6.1c.1988.9796.9704 1.7512 1.95 1.95V10c0 .5523.4477 1 1 1s1-.4477 1-1V8.95c1.1411-.2316 2-1.2405 2-2.45v-1C21 4.1193 19.8807 3 18.5 3h-1c-1.2095 0-2.2184.8589-2.45 2h-6.1C8.7184 3.8589 7.7095 3 6.5 3z" /></svg>;
const ForwardRef = forwardRef(BezierPointerFilledIcon);
export default createLucideIcon('BezierPointerFilledIcon', ForwardRef);
