import { Col, Row } from "react-bootstrap";
import TopTemplate from "../../GlobalComponents/TopTemplate/TopTemplate";
import ContainerItem from "../../GlobalComponents/Container/Container";
import FormComponent from "../../GlobalComponents/Form/Form";

const formRows = [

    [

        {
            id: "FirstNameControl",
            label: "First Name",
            type: "text",
            placeholder: "Enter First Name",
            feedback: "Please enter name",
            md: "6",
          },
          {
            id: "LastNameControl",
            label: "Last name",
            type: "text",
            placeholder: "Please enter name",
            feedback: "Looks good!",
            md: "6",
          },

    ],

    [

        {
            id: "EmailControl",
            label: "Email",
            type: "email",
            placeholder: "Enter Email",
            feedback: "Please choose an Email.",
            md: "6",
          },
          {
            id: "PhoneControl",
            label: "Phone",
            type: "tel",
            placeholder: "Enter Phone",
            feedback: "Please choose a phone number.",
            md: "6",
          },

    ],

    [

        {
            id: "SelectedLocationControl",
            label: "Selected Property",
            md: "12",
            width: "100%",
            option: "Seaside Serenity Villa, Malibu, California",
            options: [],
          },

    ],




]

const PropertieForm = () => {
    return(
        <ContainerItem>
        <Row>
            <Col lg={5}>

            <TopTemplate
            buttondisplay = "none"
            contentH2 = "Inquire About Seaside Serenity Villa"
            contentP = "Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have."
            />

            </Col>

            <Col lg={7}>

            <FormComponent
            formRows={formRows}
            />

            </Col>
        </Row>
    

        



    </ContainerItem>
    )
}

export default PropertieForm;