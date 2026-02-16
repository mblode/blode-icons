import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CircleCheckFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2C6.4772 2 2 6.4772 2 12s4.4772 10 10 10 10-4.4772 10-10S17.5228 2 12 2m3.774 8.1333c.3497-.4275.2867-1.0575-.1408-1.4072-.4274-.3498-1.0574-.2868-1.4072.1407l-3.8002 4.6448-1.2187-1.2187c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l2 2a1 1 0 0 0 1.4811-.0738z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CircleCheckFilledIcon);
export default ForwardRef;
