import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EmojiAddReactionFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M19 1c.5523 0 1 .4477 1 1v2h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2v2c0 .5523-.4477 1-1 1s-1-.4477-1-1V6h-2c-.5523 0-1-.4477-1-1s.4477-1 1-1h2V2c0-.5523.4477-1 1-1m-7 3c-4.4183 0-8 3.5817-8 8s3.5817 8 8 8 8-3.5817 8-8c0-.5523.4477-1 1-1s1 .4477 1 1c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2c.5523 0 1 .4477 1 1s-.4477 1-1 1M8 9.5c0-.6904.5596-1.25 1.25-1.25s1.25.5596 1.25 1.25-.5596 1.25-1.25 1.25S8 10.1904 8 9.5m5.5 0c0-.6904.5596-1.25 1.25-1.25S16 8.8096 16 9.5s-.5596 1.25-1.25 1.25-1.25-.5596-1.25-1.25m-5.0352 4.6213c.3905-.3905 1.0237-.3905 1.4142 0 1.1715 1.1716 3.071 1.1716 4.2426 0 .3905-.3905 1.0237-.3905 1.4142 0 .3906.3905.3906 1.0237 0 1.4142-1.9526 1.9527-5.1184 1.9527-7.071 0-.3906-.3905-.3906-1.0237 0-1.4142" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(EmojiAddReactionFilledIcon);
export default createLucideIcon('EmojiAddReactionFilledIcon', ForwardRef);
