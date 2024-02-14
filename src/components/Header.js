// import { useNavigate } from "react-router-dom";
// import CustomThemeColor from "./common/CustomThemeColor";
// import PetsIcon from '@mui/icons-material/Pets';

// export default function Header() {
//     const navigate = useNavigate();
//     const handleItemClick = (link) => { navigate(link, { replace: true }); };

//     return <div className="header">
//         <div className="container-fluid">
//             <div className="row align-items-center">
//                 <div
//                     className="col-md-3 col-sm-12"
//                     onClick={() => handleItemClick("/")}
//                     style={{
//                         fontSize: "18pt",
//                     }}
//                 >
//                     <PetsIcon color="secondary" className="mb-1 mr-2" />
//                     Logo Name
//                 </div>
//                 <div className="col-md-7 col-sm-10">
//                     <span style={{ fontSize: "24pt" }}>Header</span>
//                 </div>
//                 <div className="col-md-2 col-sm-2">
//                     <CustomThemeColor />
//                 </div>
//             </div>
//         </div>
//     </div >;
// }

import { useNavigate } from "react-router-dom";
import CustomThemeColor from "./common/CustomThemeColor";
import PetsIcon from '@mui/icons-material/Pets';

export default function Header() {
    const navigate = useNavigate();
    const handleItemClick = (link) => { navigate(link, { replace: true }); };

    return <div className="header" style={{ backgroundColor: 'default' }}>
        <div className="container-fluid">
            <div className="row align-items-center">
                <div
                    className="col-md-3 col-sm-12"
                    onClick={() => handleItemClick("/")}
                    style={{
                        fontSize: "18pt",
                    }}
                >
                    <PetsIcon color="secondary" className="mb-1 mr-2" />
                    Logo Name
                </div>
                <div className="col-md-7 col-sm-10">
                    <span style={{ fontSize: "24pt" }}>Header</span>
                </div>
                <div className="col-md-2 col-sm-2">
                    <CustomThemeColor />
                </div>
            </div>
        </div>
    </div >;
}