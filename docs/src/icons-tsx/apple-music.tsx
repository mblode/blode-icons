import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AppleMusicIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M17.1106 3.0199c.3114-.0594.5877.0144.828.2223.2412.207.3618.4743.3618.8v11.4012c0 1.053-.2835 1.8747-.8496 2.4669q-.8505.8667-2.3382.8667c-.6795 0-1.2393-.1845-1.6785-.5553a1.843 1.843 0 0 1-.6588-1.4445c0-.7263.2763-1.3338.828-1.8225.5535-.4887 1.269-.7335 2.1474-.7335.3258 0 .6723.0594 1.0413.1782.0135 0 .0279-.0081.0423-.0225.0144 0 .0207-.0072.0207-.0225v-7.334c0-.045-.0207-.081-.063-.1108-.0432-.045-.0855-.0594-.1278-.045L8.6956 8.4648c-.1134.0297-.171.1035-.171.2223v8.9793c0 1.0521-.2826 1.8738-.8496 2.466-.567.5787-1.3454.8676-2.3372.8676-.6795 0-1.2393-.1926-1.6785-.5778a1.778 1.778 0 0 1-.6588-1.422c0-.7263.2763-1.3338.828-1.8225.5534-.4896 1.269-.7335 2.1474-.7335.3258 0 .6723.0585 1.0412.1773.0135 0 .028-.0072.0423-.0225.0135 0 .0207-.0072.0207-.0216V6.2644q0-.555.3186-.9775c.2268-.297.5103-.4743.8505-.5336z" /></svg>;
const ForwardRef = forwardRef(AppleMusicIcon);
export default createLucideIcon('AppleMusicIcon', ForwardRef);
