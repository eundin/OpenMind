import { ReactComponent as ArrowSVG } from "assets/Arrow.svg";
import Button from "components/button/Button";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

const Logo = styled(LogoSVG)`
  padding: 0;
`;

const StyledButton = styled(Button)`
  border-style: none;
  outline: 1px solid var(--Brown-40);
  padding: 8px 12px;
  background-color: var(--Brown-10);
  display: flex;
  align-items: center;
  gap: 4px;
  line-height: 18px;
  font-size: 14px;
  color: var(--Brown-40);

  &:hover {
    outline: 2px solid var(--Brown-40);
  }

  &:active {
    outline: 2px solid var(--Brown-40);
    background-color: var(--Brown-20);
  }
`;

const ColoredArrow = styled(ArrowSVG)`
  width: 18px;
  path {
    fill: var(--Brown-40);
  }
`;

function Header() {
  return (
    <Wrapper>
      <Logo />
      <StyledButton>
        질문하러 가기
        <ColoredArrow />
      </StyledButton>
    </Wrapper>
  );
}

function LogoSVG() {
  return (
    <svg
      width="248"
      height="98"
      viewBox="0 0 248 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_668)">
        <path
          d="M110.164 70.9174C140.301 88.4503 170.309 92.9284 177.189 80.9201C184.07 68.9115 165.217 44.9636 135.08 27.4306C104.943 9.89783 74.9343 5.41934 68.0539 17.4279C61.1736 29.4363 80.0267 53.3846 110.164 70.9174Z"
          stroke="#959595"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <path
          d="M105.003 66.9274C129.61 91.7227 157.446 103.875 167.176 94.0697C176.906 84.2648 164.847 56.2159 140.24 31.4206C115.633 6.62549 87.7976 -5.52669 78.0671 4.27828C68.3369 14.0831 80.3965 42.1322 105.003 66.9274Z"
          stroke="#CACACA"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <path
          d="M14.7402 60.0162C9.87745 60.0162 6.2 58.9749 3.70784 56.8924C1.23595 54.8099 0 51.727 0 47.6437C0 43.152 1.25621 39.8547 3.76863 37.7518C6.28105 35.6489 9.98889 34.5974 14.8922 34.5974C20.1196 34.5974 23.949 35.6387 26.3804 37.7212C28.8118 39.7832 30.0275 42.8253 30.0275 46.8474C30.0275 51.4003 28.7408 54.7385 26.1676 56.8618C23.5944 58.9647 19.7853 60.0162 14.7402 60.0162ZM14.0716 49.2668H15.9255L16.8178 45.3253H13.1707L14.0716 49.2668Z"
          fill="black"
        />
        <path
          d="M31.4977 59.4649C31.3153 59.0362 31.1735 58.4951 31.0722 57.8418C30.9709 57.1885 30.9101 56.5147 30.8898 55.8205C30.8696 55.106 30.8898 54.422 30.9506 53.7687C31.0317 53.1153 31.1431 52.5743 31.2849 52.1455C31.5888 52.023 31.8826 51.8189 32.1663 51.533C32.4702 51.2268 32.7235 50.747 32.9261 50.0937C33.1287 49.4199 33.23 48.4807 33.23 47.2762C33.23 45.9695 33.1085 44.9895 32.8653 44.3362C32.6424 43.6624 32.3689 43.2132 32.0447 42.9887C31.7408 42.7437 31.4673 42.6212 31.2241 42.6212C31.0418 42.2537 30.9101 41.7535 30.829 41.1205C30.748 40.4876 30.7075 39.8139 30.7075 39.0993C30.7277 38.3643 30.7885 37.6599 30.8898 36.9862C30.9911 36.292 31.1431 35.6999 31.3457 35.2099C32.8451 35.2712 34.1924 35.2814 35.3879 35.2405C36.6036 35.1997 37.8091 35.1385 39.0045 35.0568C40.2202 34.9751 41.5372 34.9037 42.9555 34.8424C44.3941 34.7607 46.0859 34.7199 48.031 34.7199C50.8879 34.7199 53.299 34.9751 55.2643 35.4855C57.2297 35.9755 58.7189 36.8841 59.732 38.2112C60.7653 39.5178 61.282 41.386 61.282 43.8155C61.282 45.9185 60.8869 47.6028 60.0967 48.8687C59.3268 50.1345 58.2124 51.0532 56.7536 51.6249C55.2947 52.1762 53.5421 52.4518 51.4957 52.4518C50.199 52.4518 49.1656 52.3497 48.3957 52.1455C47.6258 51.921 46.9166 51.431 46.2683 50.6755L45.63 51.2574C46.1568 51.8903 46.7951 52.3803 47.5447 52.7274C48.2944 53.0541 49.2264 53.2378 50.3408 53.2787C50.5232 53.8503 50.4976 54.139 50.857 55.1253C51.0389 55.6244 50.857 55.7378 51.4648 56.9628C51.7688 57.5753 52.2956 58.8207 52.0727 59.4128C51.0799 59.3311 47.7879 59.2505 46.0251 59.128C44.2826 59.0055 42.2869 58.9545 40.0379 58.9749C38.9032 58.9749 37.7888 59.0055 36.6947 59.0668C35.6006 59.128 34.5977 59.1893 33.6859 59.2505C32.7944 59.3322 32.065 59.4037 31.4977 59.4649ZM45.63 45.9593H47.4839L48.6996 43.9074H44.4143L45.63 45.9593Z"
          fill="black"
        />
        <path
          d="M63.422 59.4649C63.2599 59.0362 63.1282 58.4951 63.0269 57.8418C62.9256 57.1885 62.8648 56.5147 62.8446 55.8205C62.8446 55.106 62.8648 54.422 62.9054 53.7687C62.9661 53.1153 63.0674 52.5743 63.2093 52.1455C63.5335 52.023 63.8475 51.8189 64.1514 51.533C64.4554 51.2268 64.7086 50.747 64.9112 50.0937C65.1139 49.4199 66.4308 48.4807 66.4308 47.2762C66.4308 45.9695 65.0936 44.9895 64.8504 44.3362C64.6276 43.6624 64.354 43.2132 64.0299 42.9887C63.7259 42.7437 63.4524 42.6212 63.2093 42.6212C63.0269 42.2537 62.8952 41.7535 62.8142 41.1205C62.7331 40.4876 62.6926 39.8139 62.6926 39.0993C62.7129 38.3643 62.7737 37.6599 62.875 36.9862C62.9763 36.292 63.1282 35.6999 63.3308 35.2099C63.655 35.2303 64.1818 35.261 64.9112 35.3018C65.6609 35.3222 66.522 35.3528 67.4946 35.3937C68.4874 35.4141 69.5207 35.4345 70.5946 35.4549C71.6684 35.4753 72.722 35.4957 73.7553 35.5162C74.8089 35.5162 75.7511 35.5162 76.5818 35.5162C78.7093 35.5162 81.0697 35.4855 83.6632 35.4243C86.2769 35.363 88.8704 35.2814 91.4436 35.1793C91.5449 35.5672 91.6361 36.1287 91.7171 36.8637C91.7982 37.5987 91.8589 38.4153 91.8995 39.3137C91.94 40.212 91.9603 41.1205 91.9603 42.0393C91.9603 42.958 91.9299 43.8053 91.8691 44.5812C91.8083 45.3366 91.7171 45.9287 91.5955 46.3574C90.6433 46.4799 89.5897 46.5616 88.4348 46.6024C87.2799 46.6432 86.1047 46.6432 84.9093 46.6024C83.7341 46.5616 82.6197 46.4799 81.5661 46.3574C81.323 45.3978 81.323 43.2235 81.5661 42.2843H78.0406V44.7955H80.8671V49.0524H78.0103V51.5943H81.5661C81.323 50.6347 81.323 48.4501 81.5661 47.4905C83.2681 47.3884 85.0106 47.3374 86.7936 47.3374C88.5766 47.3374 90.238 47.3884 91.7779 47.4905C91.8387 47.858 91.8893 48.4501 91.9299 49.2668C91.9704 50.063 91.9906 50.9716 91.9906 51.9924C91.9906 52.9928 91.9704 54.0035 91.9299 55.0243C91.9096 56.0451 91.8691 56.9537 91.8083 57.7499C91.7475 58.5462 91.6665 59.1178 91.5652 59.4649C89.4377 59.4241 87.1279 59.3322 84.6357 59.1893C82.1436 59.0668 79.7021 59.0055 77.3112 59.0055C76.0145 59.0055 74.6469 59.0157 73.2083 59.0362C71.79 59.077 70.4122 59.1178 69.075 59.1587C67.758 59.2199 66.5929 59.271 65.5799 59.3118C64.5871 59.373 63.8678 59.4241 63.422 59.4649Z"
          fill="black"
        />
        <path
          d="M94.0716 59.4649C93.9095 59.0362 93.7778 58.4951 93.6765 57.8418C93.5751 57.1885 93.5144 56.5147 93.4941 55.8205C93.4941 55.106 93.5144 54.422 93.5549 53.7687C93.6157 53.1153 93.717 52.5743 93.8588 52.1455C94.183 52.023 94.497 51.8189 94.801 51.533C95.1049 51.2268 95.3582 50.747 95.5608 50.0937C95.7634 49.4199 95.8647 48.4807 95.8647 47.2762C95.8647 45.9695 95.7431 44.9895 95.5 44.3362C95.2771 43.6624 95.0036 43.2132 94.6794 42.9887C94.3755 42.7437 94.1019 42.6212 93.8588 42.6212C93.6765 42.2537 93.5448 41.7535 93.4637 41.1205C93.3827 40.4876 93.3421 39.8139 93.3421 39.0993C93.3624 38.3643 93.4232 37.6599 93.5245 36.9862C93.6258 36.292 93.7778 35.6999 93.9804 35.2099C94.5477 35.2507 95.2062 35.312 95.9559 35.3937C96.7258 35.4549 97.5059 35.5162 98.2961 35.5774C99.1065 35.6182 99.8562 35.6387 100.545 35.6387C102.024 35.6387 103.574 35.608 105.195 35.5468C106.836 35.4651 108.741 35.3528 110.909 35.2099C110.585 36.5574 110.453 37.6599 110.514 38.5174C110.595 39.3749 110.97 40.1201 111.638 40.753C112.307 41.386 113.34 42.0393 114.738 42.713L116.361 43.0193L115.133 41.9168C113.857 41.3043 112.925 40.7326 112.337 40.2018C111.77 39.6505 111.466 38.9972 111.425 38.2418C111.385 37.466 111.517 36.4553 111.821 35.2099C112.692 35.2303 113.674 35.312 114.769 35.4549C115.883 35.5978 117.149 35.6693 118.568 35.6693C119.824 35.6693 120.958 35.6182 121.972 35.5162C123.005 35.3937 123.937 35.2916 124.768 35.2099C124.95 35.6999 125.092 36.292 125.193 36.9862C125.294 37.6599 125.345 38.3643 125.345 39.0993C125.345 39.8343 125.305 40.5182 125.224 41.1512C125.142 41.7841 125.021 42.2843 124.859 42.6518C124.616 42.6518 124.332 42.7743 124.008 43.0193C123.704 43.2439 123.441 43.6828 123.218 44.3362C122.995 44.9895 122.883 45.9695 122.883 47.2762C122.883 48.4807 122.985 49.4199 123.187 50.0937C123.39 50.747 123.643 51.2268 123.947 51.533C124.251 51.8189 124.565 52.023 124.889 52.1455C125.031 52.5743 125.122 53.1153 125.163 53.7687C125.224 54.422 125.244 55.106 125.224 55.8205C125.224 56.5147 125.173 57.1885 125.072 57.8418C124.97 58.4951 124.839 59.0362 124.676 59.4649C123.866 59.3628 122.843 59.2505 121.607 59.128C120.391 59.026 119.125 58.9749 117.808 58.9749C116.106 58.9749 114.455 59.0362 112.854 59.1587C111.253 59.2812 109.521 59.3832 107.657 59.4649C107.941 58.1174 108.052 56.9843 107.991 56.0655C107.93 55.1468 107.657 54.3403 107.171 53.6462C106.684 52.9316 105.955 52.2578 104.982 51.6249L103.132 50.8378L104.496 52.3599C105.367 52.952 106.006 53.5747 106.411 54.228C106.816 54.861 107.029 55.6062 107.049 56.4637C107.09 57.3007 106.978 58.3012 106.715 59.4649C106.046 59.3832 105.225 59.2812 104.253 59.1587C103.301 59.0362 102.166 58.9749 100.849 58.9749C99.6131 58.9749 98.3771 59.0362 97.1412 59.1587C95.9255 59.2812 94.9023 59.3832 94.0716 59.4649Z"
          fill="black"
        />
        <path
          d="M127.27 59.4649C127.108 59.0362 126.976 58.4951 126.875 57.8418C126.774 57.1885 126.713 56.5147 126.693 55.8205C126.693 55.106 126.713 54.422 126.753 53.7687C126.814 53.1153 126.915 52.5743 127.057 52.1455C127.381 52.023 127.726 51.8189 128.091 51.533C128.455 51.2472 128.8 50.7776 129.124 50.1243C129.468 49.4709 129.732 48.5522 129.914 47.368C130.076 46.388 130.117 45.5918 130.036 44.9793C129.955 44.3464 129.803 43.8666 129.58 43.5399C129.377 43.1928 129.154 42.958 128.911 42.8355C128.688 42.6926 128.496 42.6212 128.334 42.6212C128.151 42.2537 128.02 41.7535 127.939 41.1205C127.858 40.4876 127.817 39.8139 127.817 39.0993C127.837 38.3643 127.898 37.6599 127.999 36.9862C128.101 36.292 128.253 35.6999 128.455 35.2099C129.225 35.2916 130.157 35.3835 131.251 35.4855C132.366 35.5876 133.622 35.6387 135.02 35.6387C136.155 35.6387 137.35 35.6182 138.606 35.5774C139.883 35.5366 141.119 35.4855 142.314 35.4243C143.51 35.363 144.553 35.2916 145.445 35.2099C145.323 35.9857 145.293 36.9555 145.353 38.1193C145.434 39.283 145.748 40.406 146.296 41.488C146.316 40.3651 146.346 39.2422 146.387 38.1193C146.447 36.976 146.549 36.0062 146.691 35.2099C147.542 35.2507 148.342 35.312 149.092 35.3937C149.841 35.4549 150.621 35.5162 151.432 35.5774C152.262 35.6182 153.205 35.6387 154.258 35.6387C154.947 35.6387 155.737 35.6182 156.629 35.5774C157.52 35.5162 158.381 35.4549 159.212 35.3937C160.043 35.312 160.712 35.2507 161.218 35.2099C161.421 35.6999 161.573 36.292 161.674 36.9862C161.775 37.6599 161.826 38.3643 161.826 39.0993C161.846 39.8139 161.816 40.4876 161.735 41.1205C161.654 41.7535 161.522 42.2537 161.34 42.6212C161.198 42.6212 161.005 42.6926 160.762 42.8355C160.539 42.958 160.327 43.1928 160.124 43.5399C159.942 43.8666 159.83 44.3362 159.79 44.9487C159.749 45.5407 159.83 46.3268 160.033 47.3068C160.296 48.491 160.58 49.4199 160.884 50.0937C161.208 50.747 161.532 51.2268 161.856 51.533C162.201 51.8189 162.535 52.023 162.859 52.1455C163.001 52.5743 163.092 53.1153 163.133 53.7687C163.194 54.422 163.214 55.106 163.194 55.8205C163.194 56.5147 163.143 57.1885 163.042 57.8418C162.94 58.4951 162.809 59.0362 162.646 59.4649C161.816 59.3832 160.803 59.2812 159.607 59.1587C158.432 59.0362 156.943 58.9749 155.14 58.9749C153.417 58.9749 151.776 59.0362 150.216 59.1587C148.676 59.2812 147.491 59.3832 146.66 59.4649C146.579 59.0362 146.508 58.4951 146.447 57.8418C146.387 57.1885 146.346 56.5147 146.326 55.8205C146.306 55.106 146.306 54.422 146.326 53.7687C146.346 53.1153 146.387 52.5743 146.447 52.1455H147.511L147.207 48.7155L145.414 53.9218L139.518 51.3187L139.153 52.1455L142.466 53.6462C142.932 53.8503 143.378 54.0749 143.803 54.3199C144.229 54.5445 144.594 54.8507 144.897 55.2387C145.201 55.6266 145.404 56.1574 145.505 56.8312C145.627 57.4845 145.607 58.3624 145.445 59.4649C145.06 59.4241 144.523 59.373 143.834 59.3118C143.145 59.271 142.375 59.2199 141.524 59.1587C140.693 59.1178 139.832 59.077 138.941 59.0362C138.069 58.9953 137.249 58.9749 136.479 58.9749C134.23 58.9749 132.325 59.0362 130.765 59.1587C129.225 59.2812 128.06 59.3832 127.27 59.4649Z"
          fill="black"
        />
        <path
          d="M165.314 59.4649C165.132 59.0362 164.99 58.4951 164.889 57.8418C164.787 57.1885 164.727 56.5147 164.706 55.8205C164.686 55.106 164.706 54.422 164.767 53.7687C164.848 53.1153 164.96 52.5743 165.101 52.1455C165.405 52.023 165.709 51.8189 166.013 51.533C166.337 51.2268 166.601 50.747 166.803 50.0937C167.006 49.4199 167.107 48.4807 167.107 47.2762C167.107 45.9695 166.986 44.9895 166.743 44.3362C166.499 43.6624 166.216 43.2132 165.892 42.9887C165.588 42.7437 165.324 42.6212 165.101 42.6212C164.919 42.2537 164.777 41.7535 164.676 41.1205C164.575 40.4876 164.524 39.8139 164.524 39.0993C164.544 38.3643 164.605 37.6599 164.706 36.9862C164.828 36.292 165 35.6999 165.223 35.2099C165.831 35.2507 166.611 35.312 167.563 35.3937C168.515 35.4753 169.518 35.5468 170.572 35.608C171.646 35.6489 172.639 35.6693 173.55 35.6693C174.563 35.6693 175.607 35.6489 176.681 35.608C177.755 35.5468 178.768 35.4753 179.72 35.3937C180.672 35.312 181.452 35.2507 182.06 35.2099C182.263 35.6999 182.415 36.292 182.516 36.9862C182.617 37.6599 182.668 38.3643 182.668 39.0993C182.668 39.8343 182.627 40.5182 182.546 41.1512C182.465 41.7841 182.334 42.2843 182.151 42.6518C181.847 42.6518 181.544 42.7743 181.24 43.0193C180.936 43.2439 180.682 43.6828 180.48 44.3362C180.277 44.9895 180.176 45.9695 180.176 47.2762C180.176 48.4807 180.277 49.4199 180.48 50.0937C180.703 50.747 180.966 51.2268 181.27 51.533C181.574 51.8189 181.878 52.023 182.182 52.1455C182.344 52.5743 182.455 53.1153 182.516 53.7687C182.577 54.422 182.597 55.106 182.577 55.8205C182.557 56.5147 182.496 57.1885 182.394 57.8418C182.293 58.4951 182.151 59.0362 181.969 59.4649C181.361 59.4037 180.581 59.3322 179.629 59.2505C178.677 59.1893 177.663 59.128 176.59 59.0668C175.516 59.0055 174.472 58.9749 173.459 58.9749C172.527 58.9749 171.544 59.0055 170.511 59.0668C169.498 59.128 168.526 59.1893 167.594 59.2505C166.682 59.3322 165.922 59.4037 165.314 59.4649Z"
          fill="black"
        />
        <path
          d="M233.078 59.6793C231.457 59.6793 230.038 59.6487 228.823 59.5874C227.607 59.5466 226.462 59.4955 225.388 59.4343C224.315 59.3935 223.2 59.3628 222.045 59.3424C220.89 59.3424 219.563 59.373 218.064 59.4343C217.902 59.0055 217.77 58.4747 217.669 57.8418C217.568 57.1885 217.507 56.5045 217.486 55.7899C217.486 55.0753 217.507 54.4016 217.547 53.7687C217.608 53.1153 217.709 52.5743 217.851 52.1455C218.277 52.023 218.641 51.7984 218.945 51.4718C219.249 51.1247 219.482 50.5939 219.644 49.8793C219.806 49.1647 219.887 48.1949 219.887 46.9699C219.887 45.8062 219.786 44.918 219.584 44.3055C219.401 43.693 219.158 43.2643 218.854 43.0193C218.55 42.7743 218.216 42.6212 217.851 42.5599C217.649 41.9678 217.507 41.2226 217.426 40.3243C217.345 39.4055 217.345 38.4766 217.426 37.5374C217.527 36.5778 217.709 35.7612 217.973 35.0874C219.27 35.2099 220.495 35.2712 221.65 35.2712C222.825 35.2712 224.031 35.2507 225.267 35.2099C226.503 35.1487 227.85 35.0976 229.309 35.0568C230.768 34.9955 232.439 34.9649 234.324 34.9649C238.619 34.9649 241.902 35.8632 244.171 37.6599C246.46 39.4566 247.605 42.3353 247.605 46.2962C247.605 47.6232 247.484 48.9401 247.24 50.2468C247.018 51.533 246.602 52.7478 245.994 53.8912C245.407 55.0141 244.566 56.0145 243.472 56.8924C242.378 57.7499 240.98 58.4339 239.278 58.9443C237.596 59.4343 235.529 59.6793 233.078 59.6793ZM231.71 49.1137H233.564L234.78 45.163H230.494L231.71 49.1137Z"
          fill="black"
        />
        <path
          d="M185.169 59.434C185.007 59.0053 184.876 58.4642 184.774 57.8109C184.673 57.1576 184.612 56.4838 184.592 55.7897C184.592 55.0751 184.612 54.3911 184.653 53.7378C184.714 53.0844 184.815 52.5434 184.957 52.1147C185.281 51.9922 185.595 51.788 185.899 51.5022C186.203 51.1959 186.456 50.7161 186.659 50.0628C186.861 49.389 186.963 48.4499 186.963 47.2453C186.963 45.9386 186.841 44.9586 186.598 44.3053C186.375 43.6315 186.101 43.1824 185.777 42.9578C185.473 42.7128 185.2 42.5903 184.957 42.5903C184.774 42.2228 184.643 41.7226 184.562 41.0897C184.481 40.4567 184.44 39.783 184.44 39.0684C184.46 38.3334 184.521 37.629 184.622 36.9553C184.724 36.2611 184.876 35.669 185.078 35.179C185.646 35.2199 186.304 35.2811 187.054 35.3628C187.824 35.424 188.604 35.4853 189.394 35.5465C190.204 35.5874 190.954 35.6078 191.643 35.6078C193.122 35.6078 194.672 35.5772 196.293 35.5159C197.934 35.4342 199.839 35.3219 202.007 35.179C201.683 36.5265 201.551 37.629 201.612 38.4865C201.693 39.344 202.067 40.0892 202.736 40.7222C203.405 41.3551 204.438 42.0084 205.836 42.6822L207.459 42.9884L206.231 41.8859C204.955 41.2734 204.023 40.7017 203.435 40.1709C202.868 39.6197 202.564 38.9663 202.523 38.2109C202.483 37.4351 202.615 36.4244 202.918 35.179C203.79 35.1994 204.772 35.2811 205.867 35.424C206.981 35.5669 208.247 35.6384 209.666 35.6384C210.922 35.6384 212.056 35.5874 213.069 35.4853C214.103 35.3628 215.035 35.2607 215.866 35.179C216.048 35.669 216.19 36.2611 216.291 36.9553C216.392 37.629 216.443 38.3334 216.443 39.0684C216.443 39.8034 216.402 40.4874 216.321 41.1203C216.24 41.7532 216.119 42.2534 215.957 42.6209C215.714 42.6209 215.43 42.7434 215.106 42.9884C214.802 43.213 214.538 43.6519 214.316 44.3053C214.093 44.9586 213.981 45.9386 213.981 47.2453C213.981 48.4499 214.083 49.389 214.285 50.0628C214.488 50.7161 214.741 51.1959 215.045 51.5022C215.349 51.788 215.663 51.9922 215.987 52.1147C216.129 52.5434 216.22 53.0844 216.261 53.7378C216.321 54.3911 216.342 55.0751 216.321 55.7897C216.321 56.4838 216.271 57.1576 216.169 57.8109C216.068 58.4642 215.936 59.0053 215.774 59.434C214.964 59.3319 213.941 59.2197 212.705 59.0972C211.489 58.9951 210.223 58.944 208.906 58.944C207.204 58.944 205.552 59.0053 203.952 59.1278C202.351 59.2503 200.619 59.3524 198.755 59.434C199.038 58.0865 199.15 56.9534 199.089 56.0347C199.028 55.1159 198.755 54.3094 198.268 53.6153C197.782 52.9007 197.053 52.2269 196.08 51.594L194.229 50.8069L195.594 52.329C196.465 52.9211 197.103 53.5438 197.509 54.1972C197.914 54.8301 198.127 55.5753 198.147 56.4328C198.187 57.2699 198.076 58.2703 197.813 59.434C197.144 59.3524 196.323 59.2503 195.351 59.1278C194.399 59.0053 193.264 58.944 191.947 58.944C190.711 58.944 189.475 59.0053 188.239 59.1278C187.023 59.2503 186 59.3524 185.169 59.434Z"
          fill="black"
        />
        <path
          d="M72.5031 74.9211C71.5027 74.9211 70.7382 74.6468 70.2095 74.0981C69.5003 73.425 69.1458 72.4552 69.1458 71.1887C69.1458 69.8967 69.5003 68.9269 70.2095 68.2793C70.7382 67.7306 71.5027 67.4563 72.5031 67.4563C73.5035 67.4563 74.2681 67.7306 74.7968 68.2793C75.5028 68.9269 75.8558 69.8967 75.8558 71.1887C75.8558 72.4552 75.5028 73.425 74.7968 74.0981C74.2681 74.6468 73.5035 74.9211 72.5031 74.9211ZM73.885 73.0262C74.2238 72.5956 74.3931 71.9831 74.3931 71.1887C74.3931 70.3976 74.2222 69.7867 73.8803 69.356C73.5415 68.9222 73.0825 68.7052 72.5031 68.7052C71.9238 68.7052 71.4616 68.9206 71.1165 69.3512C70.7714 69.7819 70.5989 70.3944 70.5989 71.1887C70.5989 71.9831 70.7714 72.5956 71.1165 73.0262C71.4616 73.4569 71.9238 73.6722 72.5031 73.6722C73.0825 73.6722 73.5431 73.4569 73.885 73.0262Z"
          fill="black"
        />
        <path
          d="M88.0943 72.1888H86.6079V74.725H85.1548V67.6716H88.2035C88.9064 67.6716 89.4667 67.8535 89.8846 68.2171C90.3025 68.5808 90.5114 69.1439 90.5114 69.9063C90.5114 70.7389 90.3025 71.3275 89.8846 71.672C89.4667 72.0166 88.8699 72.1888 88.0943 72.1888ZM88.7781 70.7198C88.9681 70.5507 89.0631 70.2827 89.0631 69.9159C89.0631 69.549 88.9665 69.2874 88.7734 69.1311C88.5834 68.9748 88.3159 68.8966 87.9708 68.8966H86.6079V70.9734H87.9708C88.3159 70.9734 88.585 70.8889 88.7781 70.7198Z"
          fill="black"
        />
        <path
          d="M104.626 71.6433H101.226V73.4569H105.101V74.725H99.7962V67.6716H104.93V68.9206H101.226V70.4183H104.626V71.6433Z"
          fill="black"
        />
        <path
          d="M120.046 74.725H118.583L115.725 69.7149V74.725H114.362V67.6716H115.896L118.683 72.5956V67.6716H120.046V74.725Z"
          fill="black"
        />
        <path
          d="M130.898 74.725H129.535V67.6716H131.662L132.935 73.2176L134.198 67.6716H136.302V74.725H134.939V69.9542C134.939 69.817 134.941 69.6256 134.944 69.3799C134.947 69.1311 134.949 68.9397 134.949 68.8057L133.624 74.725H132.204L130.888 68.8057C130.888 68.9397 130.89 69.1311 130.893 69.3799C130.896 69.6256 130.898 69.817 130.898 69.9542V74.725Z"
          fill="black"
        />
        <path
          d="M145.691 67.6716H147.144V74.725H145.691V67.6716Z"
          fill="black"
        />
        <path
          d="M162.318 74.725H160.855L157.996 69.7149V74.725H156.633V67.6716H158.167L160.955 72.5956V67.6716H162.318V74.725Z"
          fill="black"
        />
        <path
          d="M174.846 74.725H171.83V67.6716H174.846C175.28 67.678 175.64 67.7291 175.929 67.8248C176.419 67.9875 176.817 68.2857 177.121 68.7196C177.364 69.0705 177.531 69.4501 177.619 69.8584C177.708 70.2668 177.752 70.656 177.752 71.026C177.752 71.9639 177.565 72.7583 177.192 73.409C176.685 74.2863 175.903 74.725 174.846 74.725ZM175.933 69.4708C175.709 69.088 175.264 68.8966 174.599 68.8966H173.25V73.5H174.599C175.289 73.5 175.77 73.157 176.043 72.4711C176.191 72.0947 176.266 71.6465 176.266 71.1265C176.266 70.4087 176.155 69.8569 175.933 69.4708Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_668">
          <rect width="248" height="98" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Header;
