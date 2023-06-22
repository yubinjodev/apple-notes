import { Stack } from "react-bootstrap";

export default function SidebarPreview(){
    return(
        <aside className="sidebarpreview container">
            <Stack direction="vertical">
                Title
                <Stack direction="horizontal">
                    Public - Date
                </Stack>
            </Stack>
        </aside>
    )
}