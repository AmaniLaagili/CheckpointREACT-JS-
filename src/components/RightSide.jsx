import React from "react";
import { Image } from "react-bootstrap";
const RightSide = () => {
    return (
        <div>
            <Image
                src="./images/image.PNG"
                thumbnail
                style={{ border: "none" }}
            />
        </div>
    );
};

export default RightSide;
