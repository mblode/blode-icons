import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LibraryFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M13.6489 3.064c.5171-.194 1.0935.068 1.2874.5852l6 15.9999c.1939.5172-.0681 1.0936-.5852 1.2875s-1.0935-.0681-1.2874-.5852l-6-16c-.1939-.5171.0681-1.0935.5852-1.2875M4 3.0002c.5523 0 1 .4477 1 1v16c0 .5523-.4477 1-1 1s-1-.4477-1-1v-16c0-.5523.4477-1 1-1m5 0c.5523 0 1 .4477 1 1v16c0 .5523-.4477 1-1 1s-1-.4477-1-1v-16c0-.5523.4477-1 1-1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(LibraryFilledIcon);
export default createLucideIcon('LibraryFilledIcon', ForwardRef);
