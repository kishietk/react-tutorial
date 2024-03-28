import { guest as guestItems } from "./Items/guest";
import { Box } from '@mui/material';
import Contents from "./Contents";

export default function GuestSidebar() {

    const sidebarItems = guestItems;

    return <Box className="sidebar">
        <Contents items={sidebarItems} />
    </Box>;
}