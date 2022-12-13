import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.svg`
  .fill {
    fill: ${({ theme: { colors } }) => colors.textColor};
  }
`

export const Stats: React.FC<{ className?: string }> = (props) => (
  <Wrapper
    className={`stats ${props.className}`}
    fill="none"
    height="13"
    viewBox="0 0 13 13"
    width="15"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      className="fill"
      d="M10.4067 10.7778L10.9019 10.3145L7.20117 6.63916L11.7334 4.05566L11.4033 3.47168L6.90918 6.02979V0.710449H6.24268V6.45508C6.24268 6.53548 6.25114 6.60319 6.26807 6.6582C6.28923 6.71322 6.32943 6.76611 6.38867 6.81689L10.4067 10.7778ZM6.50293 12.7837C7.37467 12.7837 8.19352 12.6165 8.95947 12.2822C9.72965 11.9521 10.4067 11.4951 10.9907 10.9111C11.5747 10.3229 12.0339 9.64583 12.3682 8.87988C12.7025 8.1097 12.8696 7.28874 12.8696 6.41699C12.8696 5.54525 12.7025 4.7264 12.3682 3.96045C12.0339 3.19027 11.5747 2.51318 10.9907 1.9292C10.4067 1.34098 9.72965 0.881836 8.95947 0.551758C8.18929 0.217448 7.36833 0.050293 6.49658 0.050293C5.62484 0.050293 4.80387 0.217448 4.03369 0.551758C3.26774 0.881836 2.59277 1.34098 2.00879 1.9292C1.4248 2.51318 0.965658 3.19027 0.631348 3.96045C0.30127 4.7264 0.13623 5.54525 0.13623 6.41699C0.13623 7.28874 0.30127 8.1097 0.631348 8.87988C0.965658 9.64583 1.4248 10.3229 2.00879 10.9111C2.59701 11.4951 3.27409 11.9521 4.04004 12.2822C4.81022 12.6165 5.63118 12.7837 6.50293 12.7837ZM6.50293 11.9648C5.73275 11.9648 5.01335 11.821 4.34473 11.5332C3.67611 11.2454 3.08789 10.8477 2.58008 10.3398C2.07227 9.83203 1.67448 9.24382 1.38672 8.5752C1.10319 7.90234 0.961426 7.18294 0.961426 6.41699C0.961426 5.65104 1.10319 4.93376 1.38672 4.26514C1.67448 3.59229 2.07015 3.00195 2.57373 2.49414C3.08154 1.9821 3.66976 1.58431 4.33838 1.30078C5.01123 1.01302 5.73063 0.869141 6.49658 0.869141C7.26676 0.869141 7.98617 1.01302 8.65479 1.30078C9.3234 1.58431 9.91162 1.9821 10.4194 2.49414C10.9315 3.00195 11.3314 3.59229 11.6191 4.26514C11.9069 4.93376 12.0508 5.65104 12.0508 6.41699C12.0508 7.18294 11.9069 7.90234 11.6191 8.5752C11.3356 9.24382 10.9399 9.83203 10.4321 10.3398C9.92432 10.8477 9.33398 11.2454 8.66113 11.5332C7.98828 11.821 7.26888 11.9648 6.50293 11.9648Z"
    />
  </Wrapper>
)