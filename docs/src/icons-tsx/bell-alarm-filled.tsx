import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BellAlarmFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2C8.064 2 4.736 4.9138 4.2158 8.8152l-.7541 5.6562c-.3165 2.3737 1.5082 4.4855 3.8916 4.528C8.2574 20.7476 9.9612 22 12 22s3.7427-1.2524 4.6467-3.0006c2.3835-.0425 4.2082-2.1543 3.8917-4.528l-.7542-5.6562C19.264 4.9138 15.936 2 12 2m2.2218 17H9.7783c.6089.6373 1.3985 1 2.2217 1 .8233 0 1.6129-.3627 2.2218-1M4.602 1.9826c.4227.3553.4774.9861.122 1.4089-.9719 1.1563-1.6723 2.5461-2.0054 4.0722-.1178.5395-.6507.8815-1.1903.7637S.6468 7.5767.7646 7.037c.404-1.8509 1.2533-3.5343 2.4284-4.9324.3554-.4228.9862-.4775 1.409-.1221m14.7961 0c.4228-.3554 1.0536-.3007 1.409.122 1.1751 1.3982 2.0244 3.0816 2.4284 4.9325.1178.5396-.2242 1.0725-.7637 1.1903s-1.0725-.2242-1.1903-.7637c-.3331-1.526-1.0336-2.916-2.0054-4.0722-.3554-.4228-.3007-1.0536.122-1.409" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BellAlarmFilledIcon);
export default createLucideIcon('BellAlarmFilledIcon', ForwardRef);
