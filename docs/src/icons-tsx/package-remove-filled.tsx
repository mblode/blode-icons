import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PackageRemoveFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 3H7C4.7909 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4h6.7134c-.5847-1.1295-.4034-2.5528.544-3.5001-1.1716-1.1715-1.1716-3.071 0-4.2426s3.071-1.1716 4.2426 0c.6823-.6823 1.6115-.9673 2.5-.8548V7c0-2.2091-1.7909-4-4-4h-1v3.5C16 7.8807 14.8807 9 13.5 9h-3C9.1193 9 8 7.8807 8 6.5z" /><path fill="currentColor" d="M14 3h-4v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM21.3284 16.0858c.3906-.3906.3906-1.0237 0-1.4142-.3905-.3906-1.0236-.3906-1.4142 0L18.5 16.0858l-1.4142-1.4142c-.3905-.3906-1.0237-.3906-1.4142 0s-.3905 1.0236 0 1.4142L17.0858 17.5l-1.4142 1.4142c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0L18.5 18.9142l1.4142 1.4142c.3906.3905 1.0237.3905 1.4142 0 .3906-.3905.3906-1.0237 0-1.4142L19.9142 17.5z" /></svg>;
const ForwardRef = forwardRef(PackageRemoveFilledIcon);
export default createLucideIcon('PackageRemoveFilledIcon', ForwardRef);
