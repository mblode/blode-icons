import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MagicHandsIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.8533 8.4012C6.1706 5.7905 8.8763 4 12.0001 4s5.8295 1.7905 7.1468 4.4012M7.7053 9.4382C8.5783 7.978 10.175 7 12.0001 7s3.4218.9779 4.2948 2.4383m-9.3128 4.3741.2565.7048.4699-.171c.519-.1889 1.0928.0787 1.2817.5976.5667 1.557-.2361 3.2785-1.793 3.8452s-3.2785-.2361-3.8452-1.793l-.5985-1.6445c-.425-1.1677.177-2.4589 1.3448-2.8839s2.4588.1771 2.8838 1.3448m10.036 0-.2565.7048-.4698-.171c-.519-.1889-1.0928.0787-1.2817.5976-.5667 1.557.236 3.2785 1.793 3.8452s3.2784-.2361 3.8451-1.793l.5985-1.6445c.4251-1.1677-.177-2.4589-1.3447-2.8839s-2.4589.1771-2.8839 1.3448" /></svg>;
const ForwardRef = forwardRef(MagicHandsIcon);
export default createLucideIcon('MagicHandsIcon', ForwardRef);
