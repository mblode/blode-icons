import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SteakFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M2.0531 8.2801c1.015-2.8398 3.3368-4.7707 5.9227-4.786l.0466.2166C9.2414 9.368 8.05 15.338 4.196 18.4692c-.969-.9838-1.7435-2.3468-2.2851-4.1378-.5928-1.96-.5429-4.1341.1423-6.0513M6.5511 20.0133a6.6 6.6 0 0 1-.7082-.3187c1.622-1.4363 2.7859-3.2679 3.5415-5.3053 1.6827-.2041 3.2943-.3663 4.884.0122 1.4794.3522 3.0098 1.1951 4.5053 3.1197-1.8475 1.2112-4.0461 1.969-5.733 2.4287-2.1573.588-4.4536.8405-6.4896.0634M20.3425 16.2807c1.475-1.4268 2.4599-3.3509 2.0741-5.8481l-.0079-.051-.0131-.0498c-.3791-1.4466-.8739-2.4892-1.5434-3.2016-.7017-.7467-1.5102-1.0413-2.3076-1.1516-.5113-.0707-1.0976-.0684-1.6169-.0664a24 24 0 0 1-.5625-.002c-.6863-.0138-1.3372-.0815-2.0008-.3412l-4.2609-1.6513c.5144 2.7722.5136 5.6914-.1007 8.3863 1.46-.1561 3.0869-.2391 4.7288.1519 1.9567.4658 3.8624 1.5805 5.6109 3.8248" /></svg>;
const ForwardRef = forwardRef(SteakFilledIcon);
export default createLucideIcon('SteakFilledIcon', ForwardRef);
