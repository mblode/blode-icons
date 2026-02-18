import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SortArrowUpDownFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7 3C4.7909 3 3 4.7909 3 7s1.7909 4 4 4 4-1.7909 4-4-1.7909-4-4-4M18.7071 3.5429c-.3905-.3905-1.0237-.3905-1.4142 0l-3 3c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0L17 6.6642v10.6716l-1.2929-1.2929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l3 3c.3905.3905 1.0237.3905 1.4142 0l3-3c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L19 17.3358V6.6642l1.2929 1.293c.3905.3904 1.0237.3904 1.4142 0 .3905-.3906.3905-1.0238 0-1.4143zM7 13c-2.2091 0-4 1.7909-4 4s1.7909 4 4 4 4-1.7909 4-4-1.7909-4-4-4" /></svg>;
const ForwardRef = forwardRef(SortArrowUpDownFilledIcon);
export default createLucideIcon('SortArrowUpDownFilledIcon', ForwardRef);
