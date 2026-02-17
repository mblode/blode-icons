import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TeaFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M19.5 9.0002c1.933 0 3.5 1.567 3.5 3.5-.0001 1.9329-1.5671 3.5-3.5 3.5h-.752c-.8881 3.4504-4.0204 6-7.748 6-4.4182 0-7.9999-3.5818-8-8v-2c0-1.6568 1.3431-3 3-3zm-.6738 2c.1107.313.1738.6491.1738 1v2h.5c.8283 0 1.4999-.6717 1.5-1.5s-.6716-1.5-1.5-1.5z" clipRule="evenodd" /><path fill="currentColor" d="M8.045 2.6975a1 1 0 0 1 1.1571-.6758 1 1 0 0 1 .791 1.081l-.0165.1016c-.16.7685-.1797 1.5044-.0596 2.2647l.0596.3271.0166.1016a1.0003 1.0003 0 0 1-1.9482.4053l-.0255-.0987-.079-.4287c-.157-.9974-.13-1.9755.079-2.9795zM12.0449 2.6975a1 1 0 0 1 1.1572-.6758c.5067.1057.8436.5772.7911 1.081l-.0166.1016c-.16.7685-.1797 1.5044-.0596 2.2647l.0596.3271.0166.1016a1.0003 1.0003 0 0 1-1.9483.4053l-.0254-.0987-.0791-.4287c-.1568-.9974-.1299-1.9755.0791-2.9795z" /></svg>;
const ForwardRef = forwardRef(TeaFilledIcon);
export default createLucideIcon('TeaFilledIcon', ForwardRef);
