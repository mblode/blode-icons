import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TeacherFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 2c-1.933 0-3.5 1.567-3.5 3.5S10.067 9 12 9s3.5-1.567 3.5-3.5S13.933 2 12 2M5 9.5c0-.5523-.4477-1-1-1s-1 .4477-1 1V11c-.5523 0-1 .4477-1 1s.4477 1 1 1v4c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4v-4c.5523 0 1-.4477 1-1s-.4477-1-1-1h-5.3302C14.7685 10.0637 13.484 9.5 12 9.5s-2.7685.5637-3.6698 1.5H7.5V9.5c0-.5523-.4477-1-1-1s-1 .4477-1 1V11H5z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(TeacherFilledIcon);
export default ForwardRef;
