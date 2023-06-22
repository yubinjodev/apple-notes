import Stack from "react-bootstrap/Stack";

export default function SidebarPreview(){
    return(
        <section className="sidebarpreview container">
            <Stack direction="vertical">
                Title
                <Stack direction="horizontal">
                    Public - Date
                </Stack>
            </Stack>
        </section>
    )
}