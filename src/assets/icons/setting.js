import Svg, {
    Path,
} from 'react-native-svg';
import React from 'react';
import { windowWidth, windowHeight } from '../../theme/appConstant';
import { useTheme } from "@react-navigation/native";

export default settings = () => {
    const { colors } = useTheme();
    return (
        <Svg width={windowWidth(24)} height={windowHeight(24)} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fillRule="evenodd" clipRule="evenodd" d="M16.2058 5.67062L15.6612 4.72554C15.2004 3.92586 14.1794 3.64999 13.3786 4.10884C12.9974 4.33339 12.5426 4.3971 12.1144 4.28591C11.6861 4.17473 11.3198 3.89779 11.096 3.51616C10.952 3.27359 10.8746 2.99731 10.8717 2.71525C10.8847 2.26303 10.7141 1.82481 10.3988 1.50042C10.0834 1.17603 9.6502 0.993092 9.1978 0.993279H8.10054C7.65733 0.993279 7.23238 1.16989 6.91973 1.48404C6.60708 1.79819 6.43251 2.22398 6.43464 2.66719C6.42151 3.58227 5.6759 4.31717 4.76073 4.31708C4.47867 4.31415 4.20238 4.23679 3.95981 4.09282C3.15904 3.63397 2.13796 3.90984 1.67721 4.70953L1.09254 5.67062C0.632344 6.46931 0.90446 7.48974 1.70123 7.95323C2.21915 8.25225 2.5382 8.80485 2.5382 9.40289C2.5382 10.0009 2.21915 10.5535 1.70123 10.8525C0.905472 11.3129 0.633059 12.3309 1.09254 13.1271L1.64517 14.0802C1.86105 14.4698 2.22326 14.7572 2.65165 14.879C3.08004 15.0007 3.53929 14.9467 3.92778 14.729C4.30968 14.5061 4.76477 14.4451 5.19191 14.5594C5.61904 14.6737 5.98281 14.9539 6.20238 15.3377C6.34634 15.5802 6.4237 15.8565 6.42663 16.1386C6.42663 17.0631 7.17607 17.8125 8.10054 17.8125H9.1978C10.1192 17.8125 10.8673 17.0679 10.8717 16.1466C10.8696 15.702 11.0452 15.275 11.3596 14.9606C11.674 14.6462 12.101 14.4705 12.5456 14.4727C12.827 14.4802 13.1022 14.5573 13.3465 14.6969C14.1452 15.1571 15.1657 14.885 15.6291 14.0882L16.2058 13.1271C16.429 12.744 16.4903 12.2877 16.376 11.8593C16.2618 11.4309 15.9814 11.0656 15.5971 10.8445C15.2128 10.6234 14.9324 10.2582 14.8182 9.82979C14.7039 9.40135 14.7652 8.94505 14.9884 8.56193C15.1336 8.30851 15.3437 8.09838 15.5971 7.95323C16.3891 7.48999 16.6606 6.47552 16.2058 5.67863V5.67062Z" stroke={colors.text} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M8.65318 11.7095C9.9271 11.7095 10.9598 10.6768 10.9598 9.40289C10.9598 8.12897 9.9271 7.09625 8.65318 7.09625C7.37926 7.09625 6.34654 8.12897 6.34654 9.40289C6.34654 10.6768 7.37926 11.7095 8.65318 11.7095Z" stroke="#0BAF9A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}