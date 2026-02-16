import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HashtagFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9.124 3.0077c.548.0685.9368.5683.8683 1.1163L9.6328 7h5.9844l.3905-3.124c.0685-.548.5683-.9368 1.1163-.8683s.9368.5683.8683 1.1163L17.6328 7H20c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2.6172l-.75 6H20c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3.6172l-.3905 3.124c-.0685.548-.5683.9368-1.1163.8683s-.9368-.5683-.8683-1.1164L14.3672 17H8.3828l-.3905 3.124c-.0685.548-.5683.9368-1.1163.8683s-.9368-.5683-.8683-1.1164L6.3672 17H4c-.5523 0-1-.4477-1-1s.4477-1 1-1h2.6172l.75-6H4c-.5523 0-1-.4477-1-1s.4477-1 1-1h3.6172l.3905-3.124c.0685-.548.5683-.9368 1.1163-.8683M9.3828 9l-.75 6h5.9844l.75-6z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(HashtagFilledIcon);
export default ForwardRef;
