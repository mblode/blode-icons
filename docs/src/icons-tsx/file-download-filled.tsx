import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FileDownloadFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8 2h4v5c0 1.6569 1.3431 3 3 3h5v8c0 2.2091-1.7909 4-4 4H8c-2.2091 0-4-1.7909-4-4V6c0-2.2091 1.7909-4 4-4m7.2071 15.2071-2.5 2.5c-.3905.3905-1.0237.3905-1.4142 0l-2.5-2.5c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0l.7929.7929V13c0-.5523.4477-1 1-1s1 .4477 1 1v3.5858l.7929-.7929c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4142" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M14 2.5858 19.4142 8H15c-.5523 0-1-.4477-1-1z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FileDownloadFilledIcon);
export default ForwardRef;
