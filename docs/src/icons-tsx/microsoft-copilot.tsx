import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MicrosoftCopilotIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="#fff" d="M0 0h24v24H0z" style={{
    fill: "#fff",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M12.79 7.1602c-.4339 0-.7451.0482-.9335.1464.4297-1.2591.7557-3.2963 2.667-3.2963 1.8245 0 1.7208 2.169 2.5061 3.15zm1.7038 1.7715c-.563 1.964-1.1112 3.9406-1.7483 5.8878-.1926.571-.726.9663-1.3334.9663H9.2488c.1482-.2196.2667-.4539.3408-.7174.563-1.9619 1.1112-3.9385 1.7483-5.8877.1926-.571.726-.9664 1.3334-.9664h2.1633c-.1482.2197-.2667.454-.3408.7175M9.4753 19.9879c-1.8244 0-1.7208-2.1669-2.5061-3.1479h4.2397c.436 0 .7471-.0482.9334-.1464-.4297 1.2591-.7556 3.2943-2.667 3.2943M21.8174 8.0826h.0148c-.5186-.6002-1.306-.9077-2.3283-.9077h-.5779c-.5482-.044-1.0371-.41-1.2149-.9224l-.5779-1.6251C16.7925 3.6589 15.8591 3 14.8198 3H7.2782C4.4906 3 3.2905 6.5306 2.6385 8.6681c-.6074 1.9934-2.0002 5.3607-.3852 7.2494.7408.8638 1.8521.9078 2.9062.9078.5482.0439 1.0371.4099 1.215.9223l.5778 1.6252C7.293 20.3412 8.2265 21 9.2636 21h7.5437c2.7855 0 3.9856-3.5306 4.6397-5.6681.4889-1.5813 1.0816-3.5285 1.0519-5.0951 0-.7927-.1778-1.5687-.6815-2.1543" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(MicrosoftCopilotIcon);
export default createLucideIcon('MicrosoftCopilotIcon', ForwardRef);
