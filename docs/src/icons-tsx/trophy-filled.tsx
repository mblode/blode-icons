import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TrophyFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9 2c-1.4806 0-2.7732.8044-3.4649 2H5C3.3432 4 2 5.3431 2 7c0 2.097 1.6138 3.8172 3.6672 3.9864.9852 2.0855 2.9703 3.6061 5.3367 3.9433V16H9c-1.6569 0-3 1.3431-3 3s1.3431 3 3 3h6c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3h-1.9961v-1.0714c2.363-.3394 4.3448-1.859 5.3289-3.9422C20.3862 10.8172 22 9.0971 22 7c0-1.6569-1.3431-3-3-3h-.5351C17.7733 2.8044 16.4806 2 15 2zM4 7c0-.5523.4477-1 1-1v2q.0002.3828.0403.7551C4.4203 8.4154 4 7.7568 4 7m16 0c0 .7568-.4203 1.4154-1.0403 1.7551.0267-.248.0403-.5.0403-.7551V6c.5523 0 1 .4477 1 1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(TrophyFilledIcon);
export default createLucideIcon('TrophyFilledIcon', ForwardRef);
