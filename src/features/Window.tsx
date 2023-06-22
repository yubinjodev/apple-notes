import NotesEditor from "../components/NotesEditor";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import WindowControl from "../components/WindowControl";

import Stack from "react-bootstrap/Stack";

export default function Window(){
    return(
        <Stack direction="vertical">
        <Stack direction="horizontal" className="bg-primary justify-content-between p-1">
          <WindowControl />
          <Searchbar />
        </Stack>

        <Stack direction="horizontal">
          <Sidebar/>
          <NotesEditor/>
        </Stack>
      </Stack>
    )
}