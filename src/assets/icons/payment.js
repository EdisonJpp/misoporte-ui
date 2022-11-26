import Svg, {
    Path,
    Defs,
    Rect,
    G
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";
import Appcolor from "../../theme/colors";

export default payment = (props) => {
    const { colors } = useTheme();
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" width={windowWidth(20)} height={windowHeight(20)} viewBox="0 0 17 17" fill="none">
            <G clip-path="url(#clip0)">
                <Path d="M5.7292 12.6737C5.72488 12.653 5.71857 12.6327 5.71027 12.6129C5.70197 12.5935 5.69168 12.5748 5.67973 12.5573C5.66777 12.5395 5.65383 12.523 5.63855 12.5082C5.62328 12.4933 5.60635 12.4797 5.58809 12.4681C5.57016 12.4564 5.5509 12.4464 5.53064 12.4383C5.51072 12.4302 5.4898 12.4238 5.46855 12.4199C5.42572 12.4115 5.38156 12.4115 5.33906 12.4199C5.31781 12.4238 5.29689 12.4302 5.27664 12.4383C5.25672 12.4464 5.23746 12.4564 5.21953 12.4681C5.20127 12.4797 5.18434 12.4933 5.16906 12.5082C5.15379 12.523 5.13984 12.5395 5.12789 12.5573C5.11561 12.5748 5.10564 12.5935 5.09734 12.6129C5.08904 12.6327 5.0824 12.653 5.07842 12.6737C5.0741 12.6944 5.07178 12.7158 5.07178 12.7368C5.07178 12.7578 5.0741 12.7792 5.07842 12.7999C5.0824 12.8206 5.08904 12.8409 5.09734 12.8603C5.10564 12.8801 5.11561 12.8988 5.12789 12.9163C5.13984 12.9341 5.15379 12.9506 5.16906 12.9654C5.18434 12.9803 5.20127 12.9939 5.21953 13.0055C5.23746 13.0172 5.25672 13.0272 5.27664 13.0353C5.29689 13.0434 5.31781 13.0499 5.33906 13.0538C5.36031 13.058 5.38223 13.0602 5.40381 13.0602C5.42539 13.0602 5.4473 13.058 5.46855 13.0538C5.4898 13.0499 5.51072 13.0434 5.53064 13.0353C5.5509 13.0272 5.57016 13.0172 5.58809 13.0055C5.60635 12.9939 5.62328 12.9803 5.63855 12.9654C5.65383 12.9506 5.66777 12.9341 5.67973 12.9163C5.69168 12.8988 5.70197 12.8801 5.71027 12.8603C5.71857 12.8409 5.72488 12.8206 5.7292 12.7999C5.73352 12.7792 5.73584 12.7578 5.73584 12.7368C5.73584 12.7158 5.73352 12.6944 5.7292 12.6737Z" fill="#777777" />
                <Path d="M15.2732 12.7735C15.2719 12.7702 15.2706 12.767 15.2692 12.7639C14.9636 12.0674 14.2469 11.81 13.3987 12.0921L11.0855 12.7152C10.9517 12.3207 10.6181 11.985 10.1464 11.8145C10.1435 11.8135 10.1406 11.8124 10.1376 11.8115L7.59492 10.9709C7.38328 10.7045 6.72035 10.0227 5.47911 10.0227C4.61168 10.0227 3.84432 10.6023 3.40531 11.234H0.332031C0.14865 11.234 0 11.3788 0 11.5574V15.6346C0 15.8132 0.14865 15.958 0.332031 15.958H2.30619C2.48957 15.958 2.63822 15.8132 2.63822 15.6346V15.3554H3.56402C3.7474 15.3554 3.89605 15.2106 3.89605 15.032V14.939C4.43574 14.9848 4.61324 15.0845 5.1089 15.3629C5.49007 15.577 6.06618 15.9005 7.10364 16.3549C7.10846 16.357 7.11334 16.359 7.11822 16.3608C7.31734 16.4371 7.70658 16.557 8.18646 16.557C8.52049 16.557 8.8985 16.4989 9.28652 16.3276L14.3995 14.5445C14.4086 14.5414 14.4176 14.5378 14.4263 14.5338C14.915 14.3149 15.6432 13.6978 15.2732 12.7735ZM1.97416 15.3112H0.664063V11.8808H1.97416V15.3112ZM3.23199 14.7086H2.63822V11.8808H3.23199V14.7086ZM14.161 13.9407L9.05031 15.7229C9.04583 15.7244 9.03975 15.7268 9.03533 15.7285C9.03085 15.7303 9.02637 15.7322 9.02195 15.7341C8.31018 16.0528 7.6336 15.862 7.36844 15.7616C6.3663 15.3224 5.83143 15.022 5.44063 14.8025C4.8973 14.4974 4.63549 14.3503 3.89605 14.2908V11.6862C4.21079 11.1837 4.82113 10.6695 5.47915 10.6695C6.60759 10.6695 7.08575 11.3843 7.10454 11.4132C7.14508 11.4774 7.2074 11.5258 7.28068 11.55L9.9195 12.4223C10.3409 12.5764 10.5637 12.9279 10.4613 13.2785C10.4141 13.4404 10.3049 13.5746 10.1539 13.6566C10.0043 13.7378 9.83131 13.7578 9.66643 13.7134L6.69166 12.7952C6.51675 12.7413 6.33021 12.8356 6.27483 13.0058C6.21941 13.1761 6.31623 13.3578 6.49105 13.4118L9.47099 14.3316C9.47415 14.3325 9.4773 14.3335 9.48049 14.3343C9.59946 14.3673 9.72058 14.3836 9.84098 14.3836C10.0614 14.3836 10.2794 14.3289 10.4772 14.2216C10.7831 14.0556 11.0043 13.7835 11.1 13.4554C11.1077 13.4292 11.1144 13.403 11.1203 13.3768L13.6133 12.7041C13.9734 12.5844 14.446 12.5412 14.6565 13.0132C14.8743 13.5674 14.3082 13.8723 14.161 13.9407Z" fill="#777777" />
                <Path d="M11.9219 4.25406C11.9176 4.23337 11.9113 4.21299 11.9027 4.19327C11.8944 4.17386 11.8844 4.15511 11.8721 4.13764C11.8602 4.11986 11.8462 4.10336 11.8309 4.08849C11.8157 4.07361 11.7987 4.06003 11.7805 4.04839C11.7625 4.03675 11.7433 4.02672 11.7234 4.01864C11.7031 4.01055 11.6822 4.00408 11.6613 4.0002C11.6184 3.99179 11.5743 3.99179 11.5314 4.0002C11.5102 4.00408 11.4893 4.01055 11.4694 4.01864C11.4491 4.02672 11.4298 4.03675 11.4119 4.04839C11.3937 4.06003 11.3767 4.07361 11.3614 4.08849C11.3462 4.10336 11.3322 4.11986 11.3203 4.13764C11.3083 4.15511 11.298 4.17386 11.2897 4.19327C11.2814 4.21299 11.2748 4.23337 11.2708 4.25406C11.2665 4.27476 11.2642 4.2961 11.2642 4.31712C11.2642 4.33815 11.2665 4.35949 11.2708 4.38019C11.2748 4.40088 11.2814 4.42126 11.2897 4.44066C11.298 4.46039 11.3083 4.47914 11.3203 4.49661C11.3322 4.51439 11.3462 4.53089 11.3614 4.54576C11.3767 4.56064 11.3937 4.57422 11.4119 4.58586C11.4298 4.5975 11.4491 4.60753 11.4694 4.61561C11.4893 4.6237 11.5102 4.62984 11.5314 4.63405C11.5527 4.63825 11.5746 4.64052 11.5962 4.64052C11.6178 4.64052 11.6397 4.63825 11.6613 4.63405C11.6822 4.62984 11.7031 4.6237 11.7234 4.61561C11.7433 4.60753 11.7625 4.5975 11.7805 4.58586C11.7987 4.57422 11.8157 4.56064 11.8309 4.54576C11.8462 4.53089 11.8602 4.51439 11.8721 4.49661C11.8844 4.47914 11.8944 4.46039 11.9027 4.44066C11.9113 4.42126 11.9176 4.40088 11.9219 4.38019C11.9262 4.35949 11.9282 4.33815 11.9282 4.31712C11.9282 4.2961 11.9262 4.27476 11.9219 4.25406Z" fill="#777777" />
                <Path d="M16.668 1.09598H14.6938C14.5105 1.09598 14.3618 1.24077 
14.3618 1.41938V1.69859H13.436C13.2526 1.69859 13.104 1.84337 13.104 2.02198V2.
11505C12.5643 2.06917 12.3868 1.9695 11.8912 1.69112C11.51 1.47704 10.9339 1.15348 
9.89638 0.699152C9.89157 0.697017 9.88672 0.695045 9.88177 0.693169C9.54406
 0.563748 8.65896 0.30911 7.71364 0.726381L6.37754 1.19232L5.25133 
 0.0954456C5.12167 -0.0308386 4.91142 -0.0308386 4.78177 
 0.0954456L1.08433 3.69663C0.964732 3.81315 0.941788 4.01517 
 1.08433 4.154L7.40246 10.3077C7.50356 10.4062 7.7403 10.436 
 7.87205 10.3077L11.2476 7.01999C11.3354 7.02736 11.4265 7.03134 11.5209 
 7.03134C12.3883 7.03134 13.1557 6.45176 13.5946 5.82005H16.668C16.8514 5.82005 
 17 5.67527 17 5.49666V1.41938C17 1.24077 16.8514 1.09598 16.668 1.09598ZM5.01651 
 0.781455L5.77328 1.51853C5.54833 1.65403 5.28825 1.72653 5.01651 1.72653C4.74475
  1.72653 4.4847 1.65406 4.25975 1.51853L5.01651 0.781455ZM2.54547 4.66241L1.7887 
  3.9253L2.54547 3.18823C2.68459 3.40733 2.75903 3.66064 2.75903 3.9253C2.75903 
  4.18996 2.68462 4.44328 2.54547 4.66241ZM7.63727 9.62167L6.88064 8.88473C7.34259 8.60706 7.93188 8.60706 8.39387 8.88473L7.63727 9.62167ZM8.87226 8.41885C8.13854 7.90045 7.136 7.90045 6.40228 8.41885L3.02383 5.12828C3.28311 4.78096 3.42309 4.36375 3.42309 3.9253C3.42309 3.48681 3.28314 3.06964 3.02383 2.72232L3.78142 1.98447C4.13802 2.23701 4.56634 2.37335 5.01655 2.37335C5.46675 2.37335 5.89507 2.23701 6.25167 1.98447L6.96982 2.68393C6.81486 2.70621 6.66375 2.75595 6.52284 2.83243C6.28484 2.9616 6.09811 3.15502 5.98183 3.38902C5.6073 3.45658 5.26056 3.63318 4.98856 3.89807C4.25062 4.61684 4.25062 5.78632 4.98859 6.50509C5.35754 6.86444 5.84221 7.04415 6.32691 7.04415C6.81157 7.04415 7.29627 6.86447 7.66526 6.50509C7.90532 6.27128 8.07349 5.98391 8.15773 5.67074L9.2788 6.04131C9.1526 6.61074 9.28186 7.20979 9.63052 7.68032L8.87226 8.41885ZM6.85358 5.2395C6.8565 5.24053 6.85942 5.24157 6.86238 5.24254L7.52631 5.46202C7.47617 5.68241 7.36271 5.88505 7.1957 6.04775C6.71665 6.51427 5.93717 6.51434 5.45818 6.04775C4.97913 5.58119 4.97913 4.82203 5.45818 4.35544C5.57373 4.24284 5.71009 4.15484 5.85868 4.09518C5.91997 4.59197 6.28723 5.03479 6.85358 5.2395ZM10.1089 7.21432C9.98078 7.0109 9.90827 6.77874 9.89681 6.54179C10.0559 6.65378 10.2502 6.76351 10.4824 6.8506L10.1089 7.21432ZM13.1039 5.36772C12.7892 5.87021 12.1789 6.38449 11.5209 6.38449C11.3978 6.38449 11.2824 6.37596 11.1745 6.36076C11.1741 6.36069 11.1736 6.36063 11.1732 6.36056C10.4562 6.25912 10.0704 5.86219 9.9433 5.70502C9.93652 5.69532 9.90767 5.65855 9.90339 5.65243C9.8647 5.5851 9.80129 5.53097 9.7204 5.50422L7.08049 4.63155C6.6592 4.47755 6.43651 4.12619 6.53858 3.77576C6.53864 3.77554 6.53871 3.77531 6.53878 3.77509C6.53888 3.77483 6.53894 3.77454 6.53901 3.77428C6.58646 3.6129 6.69543 3.47905 6.84604 3.39733C6.99565 3.31613 7.16861 3.29598 7.33356 3.34051L10.3083 4.25865C10.4832 4.31269 10.6698 4.21833 10.7252 4.04806C10.7805 3.87779 10.6838 3.69605 10.5089 3.64207L8.14305 2.91186L8.1224 2.89174C8.1222 2.89155 8.122 2.89132 8.12177 2.89113L6.89691 1.69814L7.94971 1.33096C7.95326 1.3297 7.95765 1.32811 7.96117 1.32672C7.96206 1.32637 7.96379 1.32572 7.96465 1.32537C7.96917 1.32359 7.97362 1.32171 7.97803 1.31974C8.68978 1.00113 9.36633 1.19184 9.63152 1.29228C10.6337 1.73148 11.1686 2.03188 11.5594 2.25136C12.1027 2.55655 12.3645 2.70359 13.1039 2.76307V5.36772ZM14.3618 5.1732H13.768V2.34537H14.3618V5.1732ZM16.336 5.1732H15.0259V1.74277H16.336V5.1732Z" fill="#777777" />
            </G>
            <Defs>
                <Rect width="17" height="16.5576" fill="white" />
            </Defs>
        </Svg>
    )
}