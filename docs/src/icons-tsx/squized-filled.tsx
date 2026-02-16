import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SquizedFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 3c.5523 0 1 .4477 1 1v16c0 .5523-.4477 1-1 1s-1-.4477-1-1V4c0-.5523.4477-1 1-1M4.2929 8.2929c.3905-.3905 1.0237-.3905 1.4142 0l3 3c.3905.3905.3905 1.0237 0 1.4142l-3 3c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142L5.5858 13H2c-.5523 0-1-.4477-1-1s.4477-1 1-1h3.5858l-1.293-1.2929c-.3904-.3905-.3904-1.0237 0-1.4142m15.4142 0c.3905.3905.3905 1.0237 0 1.4142L18.4142 11H22c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3.5858l1.2929 1.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-3-3c-.3905-.3905-.3905-1.0237 0-1.4142l3-3c.3905-.3905 1.0237-.3905 1.4142 0" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SquizedFilledIcon);
export default ForwardRef;
