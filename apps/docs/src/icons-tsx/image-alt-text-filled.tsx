import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ImageAltTextFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4zm2 8v2c0 1.1046.8954 2 2 2h10c1.1046 0 2-.8954 2-2v-2zm14-2V7c0-1.1046-.8954-2-2-2H7c-1.1046 0-2 .8954-2 2v2.5858l.1716-.1716c1.562-1.562 4.0947-1.562 5.6568 0L14.4142 13zm-6-4.5C13 7.1193 14.1193 6 15.5 6S18 7.1193 18 8.5 16.8807 11 15.5 11 13 9.8807 13 8.5M6 17c0-.5523.4477-1 1-1h5c.5523 0 1 .4477 1 1s-.4477 1-1 1H7c-.5523 0-1-.4477-1-1m8 0c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2c-.5523 0-1-.4477-1-1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(ImageAltTextFilledIcon);
export default createLucideIcon('ImageAltTextFilledIcon', ForwardRef);
