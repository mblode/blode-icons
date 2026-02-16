import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LineHeightFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 5c0-.5523.4477-1 1-1h18c.5523 0 1 .4477 1 1s-.4477 1-1 1H3c-.5523 0-1-.4477-1-1m9.2929 2.2929c.3905-.3905 1.0237-.3905 1.4142 0l2 2c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0L12 9.4142l-1.2929 1.2929c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142zm-2 6c.3905-.3905 1.0237-.3905 1.4142 0L12 14.5858l1.2929-1.2929c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4142l-2 2c-.3905.3905-1.0237.3905-1.4142 0l-2-2c-.3905-.3905-.3905-1.0237 0-1.4142M2 19c0-.5523.4477-1 1-1h18c.5523 0 1 .4477 1 1s-.4477 1-1 1H3c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(LineHeightFilledIcon);
export default ForwardRef;
