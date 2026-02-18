import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BombFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M18 2c0-.5523-.4477-1-1-1s-1 .4477-1 1v1c0 .5523.4477 1 1 1s1-.4477 1-1zM21.7071 2.2929c-.3905-.3905-1.0237-.3905-1.4142 0l-1 1c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0l1-1c.3905-.3905.3905-1.0237 0-1.4142M10 6c-4.4183 0-8 3.5817-8 8s3.5817 8 8 8 8-3.5817 8-8c0-1.8487-.6271-3.551-1.6801-4.9056l1.3872-1.3873c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L14.9056 7.68C13.551 6.6271 11.8487 6 10 6M21 8h1c.5523 0 1-.4477 1-1s-.4477-1-1-1h-1c-.5523 0-1 .4477-1 1s.4477 1 1 1" /></svg>;
const ForwardRef = forwardRef(BombFilledIcon);
export default createLucideIcon('BombFilledIcon', ForwardRef);
