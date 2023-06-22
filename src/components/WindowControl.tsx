import Button from "react-bootstrap/Button";

export default function WindowControl(){
    return(
        <div className="windowcontrol d-flex justify-content-center">
            <Button variant="success">Close</Button>
            <Button variant="warning">Minimize</Button>
            <Button variant="danger">Close</Button>
        </div>
    )
}