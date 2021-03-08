import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Menu from "./components/Menu";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { Row, Col } from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Menu />
            <Row className="Landing">
                <Col>
                    <LeftSide />
                </Col>
                <Col>
                    <RightSide />
                </Col>
            </Row>
        </div>
    );
}

export default App;
