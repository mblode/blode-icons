import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FolderUploadFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M2 7c0-2.2091 1.7909-4 4-4h2.3945a4 4 0 0 1 3.3281 1.7812l.5157.7735A1 1 0 0 0 13.0704 6H18c2.2091 0 4 1.7909 4 4v6c0 2.2091-1.7909 4-4 4h-5v-4.5858l.7929.7929c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142l-2.5-2.5c-.3905-.3905-1.0237-.3905-1.4142 0l-2.5 2.5c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0L11 15.4142V20H6c-2.2091 0-4-1.7909-4-4z" /></svg>;
const ForwardRef = forwardRef(FolderUploadFilledIcon);
export default createLucideIcon('FolderUploadFilledIcon', ForwardRef);
