import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HdFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M15.3984 13.8545h-.6494v-3.7549h.6494c.9912 0 1.5772.6397 1.5772 1.8262 0 1.2988-.542 1.9287-1.5772 1.9287" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M2 8c0-2.2091 1.7909-4 4-4h12c2.2091 0 4 1.7909 4 4v8c0 2.2091-1.7909 4-4 4H6c-2.2091 0-4-1.7909-4-4zm3.081 6.5381c0 .6933.376 1.084 1.0352 1.084s1.0352-.3907 1.0352-1.084v-1.7627h2.4804v1.7627c0 .6933.376 1.084 1.0352 1.084s1.0351-.3907 1.0351-1.084v-5.122c0-.6934-.3759-1.084-1.0351-1.084s-1.0352.3906-1.0352 1.084v1.7138H7.1514V9.416c0-.6933-.376-1.084-1.0352-1.084s-1.0351.3907-1.0351 1.084zm7.5977-.1221c0 .6934.376 1.084 1.0352 1.084h1.9775c2.1338 0 3.3936-1.3184 3.3936-3.5742 0-2.2559-1.2549-3.4717-3.3936-3.4717h-1.9775c-.6592 0-1.0352.3906-1.0352 1.084z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(HdFilledIcon);
export default ForwardRef;
