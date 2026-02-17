import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FolderOpenFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M6 3C3.7909 3 2 4.7909 2 7v10.5592C2 18.9072 3.0928 20 4.4408 20H18.045a3.0002 3.0002 0 0 0 2.8487-2.1052l1.6557-5.2983c.3657-1.1701-.3952-2.3574-1.5494-2.5647V9c0-1.6569-1.3431-3-3-3h-4.9296a1 1 0 0 1-.8321-.4453l-.5157-.7735A4 4 0 0 0 8.3945 3zm13 7V9c0-.5523-.4477-1-1-1h-4.9296a3 3 0 0 1-2.4962-1.3359l-.5157-.7735A2 2 0 0 0 8.3945 5H6c-1.1046 0-2 .8954-2 2v10.5592a.4407.4407 0 0 0 .8615.1315l1.7454-5.5855A3 3 0 0 1 9.4704 10z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FolderOpenFilledIcon);
export default ForwardRef;
