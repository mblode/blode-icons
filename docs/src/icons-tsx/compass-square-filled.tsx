import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CompassSquareFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4zm11.5243 1.2479c.7465-.2036 1.4315.4813 1.2279 1.2278l-1.1195 4.1046a1.5 1.5 0 0 1-1.0524 1.0524l-4.1046 1.1195c-.7465.2036-1.4314-.4814-1.2278-1.2279l1.1194-4.1046a1.5 1.5 0 0 1 1.0524-1.0524z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CompassSquareFilledIcon);
export default ForwardRef;
