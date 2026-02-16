import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CabinetFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11 4H6C3.7909 4 2 5.7909 2 8c0 1.479.8027 2.7705 1.9961 3.4626l-.9873 7.4052c-.073.5475.3116 1.0504.859 1.1234s1.0504-.3116 1.1234-.859l.951-7.1326Q5.9711 12 6 12h5zM13 12h5q.0289 0 .0578-.0004l.951 7.1326c.073.5474.5759.932 1.1234.859s.932-.5759.859-1.1234l-.9873-7.4052C21.1973 10.7705 22 9.479 22 8c0-2.2091-1.7909-4-4-4h-5z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CabinetFilledIcon);
export default ForwardRef;
