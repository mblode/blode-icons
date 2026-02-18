import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PeopleAddedFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 1.75c-2.4853 0-4.5 2.0147-4.5 4.5s2.0147 4.5 4.5 4.5 4.5-2.0147 4.5-4.5-2.0147-4.5-4.5-4.5M12.0001 11.75c-3.3577 0-6.0375 1.7661-7.4474 4.3886-.6292 1.1703-.392 2.3851.3055 3.2528.6733.8376 1.7656 1.3586 2.9372 1.3586h5.5381l-.1333-.1c-.7785-.5838-1.1924-1.4733-1.2001-2.3766v-.0514a2.987 2.987 0 0 1 .6001-1.772c.8246-1.0995 2.2592-1.4718 3.481-.9993l1.1649-1.9416c-1.3293-1.0424-3.0018-1.6844-4.905-1.753a10 10 0 0 0-.341-.0061" /><path fill="currentColor" d="M20.8576 15.2646c.2841-.4735.1305-1.0878-.343-1.3719-.4736-.2842-1.0879-.1306-1.372.343l-2.4296 4.0492-1.1129-.8347c-.4419-.3314-1.0687-.2419-1.4.2-.3314.4418-.2419 1.0686.2 1.4l2 1.5a1 1 0 0 0 1.4575-.2856z" /></svg>;
const ForwardRef = forwardRef(PeopleAddedFilledIcon);
export default createLucideIcon('PeopleAddedFilledIcon', ForwardRef);
