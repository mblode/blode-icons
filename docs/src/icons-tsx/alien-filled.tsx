import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AlienFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 11c0-4.9706 4.0294-9 9-9s9 4.0294 9 9c0 3.3272-1.6546 6.3024-3.4974 8.4085-.928 1.0606-1.931 1.9331-2.8542 2.5486-.4614.3076-.9168.5603-1.3451.7391C12.8885 22.8694 12.4365 23 12 23s-.8885-.1306-1.3033-.3038c-.4283-.1788-.8837-.4315-1.3452-.7391-.9231-.6155-1.9261-1.488-2.854-2.5486C4.6544 17.3024 3 14.3272 3 11m4.382-1.0726c2.774-.0948 3.4586 1.3101 3.5907 3.1902.0353.5031-.3507.9378-.8547.955-2.774.0947-3.4587-1.3102-3.5907-3.1902-.0354-.5031.3506-.9378.8546-.955m9.236 0c-2.774-.0948-3.4587 1.3102-3.5907 3.1902-.0354.5031.3506.9378.8547.955 2.774.0947 3.4586-1.3102 3.5907-3.1902.0353-.5031-.3507-.9378-.8547-.955" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(AlienFilledIcon);
export default createLucideIcon('AlienFilledIcon', ForwardRef);
