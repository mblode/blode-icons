import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowLeftCircleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2C6.4772 2 2 6.4772 2 12s4.4772 10 10 10 10-4.4772 10-10S17.5228 2 12 2m-1.7071 13.7071c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142L10.4142 13H16c.5523 0 1-.4477 1-1s-.4477-1-1-1h-5.5858l1.2929-1.2929c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0l-3 3c-.3905.3905-.3905 1.0237 0 1.4142z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArrowLeftCircleFilledIcon);
export default ForwardRef;
