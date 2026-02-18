import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MicrophoneFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12.0014 2c-2.7614 0-5 2.2386-5 5v4c0 2.7614 2.2386 5 5 5s5-2.2386 5-5V7c0-2.7614-2.2386-5-5-5" /><path fill="currentColor" d="M5.8546 14.4556c-.3006-.4632-.92-.5951-1.3832-.2944-.4633.3006-.5951.9199-.2945 1.3832 1.1236 1.7314 3.271 4.034 6.8245 4.4044V21c0 .5523.4477 1 1 1s1-.4477 1-1v-1.0512c3.5536-.3704 5.7009-2.673 6.8245-4.4044.3007-.4633.1688-1.0826-.2945-1.3832-.4632-.3007-1.0825-.1688-1.3832.2944C17.1086 16.0576 15.2015 18 12.0014 18s-5.1072-1.9424-6.1468-3.5444" /></svg>;
const ForwardRef = forwardRef(MicrophoneFilledIcon);
export default createLucideIcon('MicrophoneFilledIcon', ForwardRef);
