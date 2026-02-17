import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const Web3FilledIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="none"
    height={24}
    ref={ref}
    viewBox="0 0 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="currentColor">
      <path
        d="M3.6251 17.4698c2.2995 3.5218 6.6791 5.337 10.9627 4.1892s7.1689-4.9096 7.3994-9.1093c-.35.1909-.7148.3741-1.0849.5491-2.0362.9627-4.8144 1.9465-7.8674 2.7646s-5.951 1.3551-8.1957 1.5395a21 21 0 0 1-1.214.0669M9.4114 2.3405c4.3106-1.155 8.7161.69 11.004 4.2535.5317.0071 1.0146.0498 1.4191.141.2738.0618.5669.1576.8253.3193.2641.1653.5568.4432.6721.8737.1394.5203-.0542.9705-.2424 1.2561-.1912.2902-.4599.5444-.7378.7636-.5624.4435-1.3628.8979-2.3043 1.343-1.8981.8975-4.5564 1.8441-7.5301 2.6409-2.9738.7968-5.7492 1.3061-7.8418 1.478-1.038.0853-1.9583.092-2.6671-.0109-.3503-.0509-.71-.1367-1.0207-.2924-.3058-.1533-.6986-.4463-.838-.9667-.1154-.4304-.0009-.8174.1452-1.0927.143-.2692.3488-.4987.555-.6891.3048-.2813.7017-.5597 1.1585-.8317.1997-4.23 3.0924-8.0306 7.403-9.1856"
        style={{
          fill: "currentColor",
          fillOpacity: 1,
        }}
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          d="M0 0h24v24H0z"
          fill="#fff"
          style={{
            fill: "#fff",
            fillOpacity: 1,
          }}
        />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(Web3FilledIcon);
export default ForwardRef;
