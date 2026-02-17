import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CloudSimpleUploadFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9 4c-4.4183 0-8 3.5817-8 8 0 2.7194 1.3578 5.1215 3.4279 6.5655.453.316 1.0763.2049 1.3923-.2481s.2049-1.0763-.2481-1.3923C4.0152 15.8392 3 14.0381 3 12c0-3.3137 2.6863-6 6-6 2.4749 0 4.6021 1.4987 5.5192 3.642a1 1 0 0 0 1.2314.5567A4 4 0 0 1 17 10c2.2091 0 4 1.7909 4 4 0 1.6387-.9856 3.0494-2.4004 3.6676-.5061.2211-.7371.8106-.516 1.3167.2212.5061.8107.7371 1.3168.516C21.5174 18.5754 23 16.4619 23 14c0-3.3137-2.6863-6-6-6-.3476 0-.6888.0297-1.0211.0867C14.6092 5.6491 11.9981 4 9 4" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M13 20c0 .5523-.4477 1-1 1s-1-.4477-1-1v-3.5858l-.7929.7929c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l2.5-2.5c.3905-.3905 1.0237-.3905 1.4142 0l2.5 2.5c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0L13 16.4142z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CloudSimpleUploadFilledIcon);
export default createLucideIcon('CloudSimpleUploadFilledIcon', ForwardRef);
