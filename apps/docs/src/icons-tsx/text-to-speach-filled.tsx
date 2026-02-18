import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TextToSpeachFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2.004 4c0-.5523.4476-1 1-1h7.9999c.5523 0 1 .4477 1 1v1.7778c0 .5523-.4477 1-1 1s-1-.4477-1-1V5h-2v6h.3333c.5523 0 1 .4477 1 1s-.4477 1-1 1H5.6706c-.5523 0-1-.4477-1-1s.4477-1 1-1h.3333V5h-2v.7778c0 .5523-.4477 1-1 1s-1-.4477-1-1zm11.9999 3c.5523 0 1 .4477 1 1v12c0 .5523-.4477 1-1 1s-1-.4477-1-1V8c0-.5523.4477-1 1-1m3.5 3c.5523 0 1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1v-6c0-.5523.4477-1 1-1m3.5 2c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1s-1-.4477-1-1v-2c0-.5523.4477-1 1-1m-10.5 2c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1s-1-.4477-1-1v-2c0-.5523.4477-1 1-1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(TextToSpeachFilledIcon);
export default createLucideIcon('TextToSpeachFilledIcon', ForwardRef);
