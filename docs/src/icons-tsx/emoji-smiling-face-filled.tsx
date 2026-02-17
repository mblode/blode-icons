import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EmojiSmilingFaceFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 22c5.5228 0 10-4.4772 10-10S17.5228 2 12 2 2 6.4772 2 12s4.4772 10 10 10M10.9655 8.2992c.5622.881.2845 2.3243-1.6133 3.8302a.257.257 0 0 1-.2405.0425c-2.2984-.7661-3.053-2.0273-2.826-3.0476.1102-.4953.454-.897.9104-1.0828.4018-.1636.8741-.1534 1.3257.0814.3439-.375.7843-.5462 1.2178-.5299.4924.0185.9529.2784 1.2259.7061m3.925 3.8727c2.2984-.766 3.053-2.0273 2.826-3.0475-.1103-.4954-.4541-.897-.9105-1.0828-.4017-.1636-.8741-.1535-1.3256.0814-.3439-.3751-.7843-.5462-1.2178-.53-.4924.0186-.9529.2785-1.2259.7062-.5623.881-.2845 2.3244 1.6132 3.8303a.257.257 0 0 0 .2406.0424m.5578 1.8811c.2953-.0263.5544.2061.5138.4997C15.693 16.5003 14.0216 18 12 18s-3.693-1.4997-3.9621-3.4473c-.0406-.2936.2185-.526.5138-.4997a38.6 38.6 0 0 0 6.8966 0" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(EmojiSmilingFaceFilledIcon);
export default createLucideIcon('EmojiSmilingFaceFilledIcon', ForwardRef);
