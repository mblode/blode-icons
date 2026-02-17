import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowWall2DownFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 3c.5523 0 1 .4477 1 1v12.3358l2.5429-2.5429c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4142l-3.1894 3.1894a2.49 2.49 0 0 1-.9742.6035H19c.5523 0 1 .4477 1 1s-.4477 1-1 1H5c-.5523 0-1-.4477-1-1s.4477-1 1-1h6.2065a2.49 2.49 0 0 1-.9743-.6036l-3.1893-3.1893c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0L11 16.3358V4c0-.5523.4477-1 1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArrowWall2DownFilledIcon);
export default createLucideIcon('ArrowWall2DownFilledIcon', ForwardRef);
