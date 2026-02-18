import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShovelFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M16.0229 2.5832c.7775-.7776 2.0382-.7776 2.8158 0l2.5742 2.5742c.7775.7775.7775 2.0382 0 2.8157l-1.2871 1.2871c-1.2448 1.2449-3.1366 1.4486-4.5932.611l-3.6625 3.6626 1.3725 1.3725c1.1514 1.1514 1.2037 3.0889-.0799 4.2281-2.9391 2.6083-6.1785 3.581-9.9839 2.3125a.996.996 0 0 1-.6296-.6296c-1.2685-3.8055-.296-7.0449 2.3124-9.984 1.1392-1.2836 3.0767-1.2313 4.228-.0799l1.3726 1.3725 3.6625-3.6625c-.8374-1.4565-.6337-3.3483.6111-4.5931zm.1275 5.2758-.0066-.0067-.0067-.0066c-.7042-.7114-.702-1.859.0067-2.5676l1.287-1.287 2.5742 2.5742-1.287 1.287c-.7087.7087-1.8562.7109-2.5676.0067" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(ShovelFilledIcon);
export default createLucideIcon('ShovelFilledIcon', ForwardRef);
