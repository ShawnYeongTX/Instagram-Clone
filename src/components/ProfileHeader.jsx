import { useContext } from "react"
import {Col, Row, Image, Button} from "react-bootstrap"
import { ProfileContext } from "../App"


export default function ProfileHeader () {
    const {
        image,
        name,
        posts_no,
        followers,
        following,
        subheader,
        account_type: accountType,
        description,
        link,
    } = useContext(ProfileContext)
    return (

        // ProfilePicture
        <Row className="p-5">
            <Col md={3} className="d-flex align-items-center justify-content-center">
            <Image src={image}
            style={{height: "150px"}}
            roundedCircle 
            />
            </Col>
        {/* Button (uses span because the next component can be inline with the next component)*/}
            <Col md={9}>
                <span className="me-4" style={{fontSize: "20px"}}>
                    {name}
                </span>
                <Button className="me-2">Follow Back</Button>
                <Button variant="light me-2">Message</Button>
                <Button variant="light me-2">
                    <i className="bi bi-person-plus"></i>
                </Button>
                <Button>
                    <i className="bi bi-three-dots"></i>
                </Button>
                <br/>
                <br/>
            {/* Follow & following status */}
                <span className="me-4">
                    <strong>{posts_no}</strong> Posts
                </span>

                <span className="me-4">
                    <strong>{followers}</strong> Followers
                </span>

                <span className="me-4">
                    <strong>{following}</strong> Following
                </span>
                <br />
                <br />
                <p style={{margin:0, fontWeight: "bold" }}>{subheader}</p>
                <p style={{margin:0, color: "grey" }}>{accountType}</p>
                <p style={{margin:0}}>{description}</p>
                <a href={link}>{link}</a>

            </Col>
        </Row>
    )
}