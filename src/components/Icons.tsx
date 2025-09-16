import { FaBuildingUser, FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaExternalLinkAlt, FaHome, FaNewspaper, FaMoneyBillWave, FaRegUser, FaSearch, FaUserTie, FaUser } from "react-icons/fa";
import { IoIosArrowDown, IoMdClose, IoMdSettings  } from "react-icons/io";
import { LuBaggageClaim } from "react-icons/lu";
import { MdLogout } from "react-icons/md";

export const IconMap = {
    FaBuildingUser: FaBuildingUser,
    FaMoneyBillTrendUp: FaMoneyBillTrendUp,
    FaExternalLinkAlt: FaExternalLinkAlt,
    FaHome: FaHome,
    FaNewspaper: FaNewspaper,
    FaMoneyBillWave: FaMoneyBillWave,
    FaRegUser: FaRegUser,
    FaSearch: FaSearch,
    FaUser: FaUser,
    FaUserTie: FaUserTie,
    IoIosArrowDown: IoIosArrowDown,
    LuBaggageClaim: LuBaggageClaim,
    IoMdClose: IoMdClose,
    IoMdSettings: IoMdSettings,
    MdLogout: MdLogout
}

interface IconSelectProps {
    iconCode: keyof typeof IconMap;
}


const IconSelect = ({iconCode}: IconSelectProps) => {
    const IconComponent = IconMap[iconCode];

    if (IconComponent) {
        return (
            <div className="icon-container">
                <IconComponent />
            </div>
        );
    }
    return null;
    }

export default IconSelect;
