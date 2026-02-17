import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CloudFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9 4c-4.4183 0-8 3.5817-8 8s3.5817 8 8 8h8c3.3137 0 6-2.6863 6-6s-2.6863-6-6-6c-.2714 0-.5391.018-.8018.0532-.1463.0196-.2693-.0554-.3147-.1317C14.4911 5.5759 11.9301 4 9 4" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CloudFilledIcon);
export default createLucideIcon('CloudFilledIcon', ForwardRef);
