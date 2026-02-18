import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HomeEnergy2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M10 9c.5523 0 1 .4477 1 1v1h2v-1c0-.5523.4477-1 1-1s1 .4477 1 1v1.2676c.5978.3458 1 .9921 1 1.7324 0 1.8638-1.2748 3.4299-3 3.874V20c0 .5523-.4477 1-1 1s-1-.4477-1-1v-3.126C9.2748 16.4299 8 14.8638 8 13c0-.7403.4022-1.3866 1-1.7324V10c0-.5523.4477-1 1-1" clipRule="evenodd" /><path fill="currentColor" d="M16.0069 21.02c-.55 0-1-.45-1-1s.45-1 1-1c1.1 0 2-.9 2-2V8.55l-5.65-4.05c-.18-.13-.29-.22-.39-.26-.03.05-.13.13-.31.26l-5.65 4.05v8.47c0 1.1.9 2 2 2 .55 0 1 .45 1 1s-.45 1-1 1c-2.21 0-4-1.79-4-4V9.98l-.92.66c-.45.32-1.07.22-1.4-.23-.32-.45-.22-1.07.23-1.4l2.49-1.78s.01 0 .02-.01l6.07-4.35c.4-.28.66-.47 1.02-.56.32-.08.66-.08.98 0 .36.09.62.28 1.02.56l6.06 4.34s.01 0 .02.01l2.49 1.78c.45.32.55.95.23 1.4s-.95.55-1.4.23l-.92-.66v7.04c0 2.21-1.79 4-4 4z" /></svg>;
const ForwardRef = forwardRef(HomeEnergy2FilledIcon);
export default createLucideIcon('HomeEnergy2FilledIcon', ForwardRef);
