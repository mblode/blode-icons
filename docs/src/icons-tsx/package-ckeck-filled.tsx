import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PackageCkeckFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 3H7C4.7909 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4h6.7574l-1.6287-1.6287c-1.1716-1.1716-1.1716-3.071 0-4.2426s3.071-1.1716 4.2426 0l.1287.1287 2.3787-2.3787C19.4645 12.2929 20.2322 12 21 12V7c0-2.2091-1.7909-4-4-4h-1v3.5C16 7.8807 14.8807 9 13.5 9h-3C9.1193 9 8 7.8807 8 6.5z" /><path fill="currentColor" d="M14 3h-4v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM21.7071 15.7071c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L16.5 18.0858l-1.5429-1.5429c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l2.25 2.25a1 1 0 0 0 1.4142 0z" /></svg>;
const ForwardRef = forwardRef(PackageCkeckFilledIcon);
export default createLucideIcon('PackageCkeckFilledIcon', ForwardRef);
