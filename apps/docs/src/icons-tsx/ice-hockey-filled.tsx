import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const IceHockeyFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M1.6199 7.5863C1.1368 8.0305 1 8.3967 1 8.6667s.1367.6361.6199 1.0803c.484.445 1.2394.8917 2.2573 1.2875 2.0293.7892 4.9009 1.2988 8.1228 1.2988 3.222 0 6.0935-.5096 8.1228-1.2988 1.0179-.3958 1.7734-.8425 2.2573-1.2875.4832-.4442.6199-.8104.6199-1.0803s-.1367-.6362-.6199-1.0804c-.4839-.445-1.2394-.8916-2.2573-1.2875C18.0935 5.5096 15.222 5 12 5s-6.0935.5096-8.1228 1.2988c-1.0179.3959-1.7734.8426-2.2574 1.2875M23 11.7977c-.6165.4212-1.3474.7878-2.1523 1.1008-2.3137.8998-5.4422 1.4348-8.8477 1.4348s-6.534-.535-8.8477-1.4348c-.8049-.313-1.5358-.6796-2.1523-1.1008v3.5356c0 .27.1367.6362.6199 1.0804.484.4449 1.2394.8916 2.2573 1.2875C5.9065 18.4904 8.778 19 12 19c3.222 0 6.0935-.5096 8.1228-1.2988 1.0179-.3959 1.7734-.8426 2.2573-1.2875.4832-.4442.6199-.8104.6199-1.0804z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(IceHockeyFilledIcon);
export default createLucideIcon('IceHockeyFilledIcon', ForwardRef);
