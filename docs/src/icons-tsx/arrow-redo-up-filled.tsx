import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowRedoUpFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M16.7931 5.7071c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0l2.9394 2.9393c.9763.9764.9763 2.5593 0 3.5356l-2.9394 2.9393c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142L19.086 10H7.5C5.567 10 4 11.567 4 13.5S5.567 17 7.5 17H12c.5523 0 1 .4477 1 1s-.4477 1-1 1H7.5C4.4624 19 2 16.5376 2 13.5S4.4624 8 7.5 8h11.586z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArrowRedoUpFilledIcon);
export default ForwardRef;
