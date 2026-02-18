import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Back10sIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.582 9c1.1868-2.9318 4.0611-5 7.4185-5s6.2317 2.0682 7.4185 5M4 5v4h4" /><path fill="currentColor" d="M7.4258 19.9653v-5.7065h-.0254l-.6665.4507c-.33.2094-.5078.2729-.7173.2729-.419 0-.7236-.3047-.7236-.7236 0-.311.1904-.5903.565-.8252l1.0346-.6919c.4951-.3174.9458-.4634 1.371-.4634.7427 0 1.2379.5015 1.2379 1.2759v6.4111c0 .7173-.3745 1.1172-1.0347 1.1172-.6665 0-1.041-.4062-1.041-1.1172M10.7837 16.9058v-.4634c0-2.5835 1.3267-4.2656 3.4595-4.2656 2.1391 0 3.415 1.6503 3.415 4.2656v.4634c0 2.5771-1.3394 4.2846-3.4595 4.2846s-3.415-1.6694-3.415-4.2846m2.1074-.4571v.4507c0 1.6504.4951 2.6152 1.333 2.6152.8316 0 1.333-.9711 1.333-2.6152v-.4507c0-1.6377-.5014-2.5962-1.3393-2.5962s-1.3267.9522-1.3267 2.5962" /></svg>;
const ForwardRef = forwardRef(Back10sIcon);
export default createLucideIcon('Back10sIcon', ForwardRef);
