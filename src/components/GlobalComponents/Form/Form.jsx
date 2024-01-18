import styled from "styled-components";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { FloatingLabel } from "react-bootstrap";
import { SelectItem } from "../Searchbar/SelectContainer";
import ButtonTemplate from "../ButtonTemplate/ButtonTemplate";

const FormItem = styled.div`
  border-radius: 12px;
  border: 1px solid var(--Grey-15, #262626);
  padding: 3rem;
  width: 100%;

  @media (max-width: 762px) {
    width: 100%;
    padding: 1rem;
  }

  label {
    color: var(--Absolute-White, #fff);
    font-size: 20px;
    font-weight: 600;
    line-height: 150%;
  }

  input,
  select {
    border-radius: 8px;
    border: 1px solid var(--Grey-15);
    background: var(--Grey-10);
    padding: 0.8em 2%;
    color: var(--Grey-40);
    position: relative;

    &::-webkit-input-placeholder {
      color: var(--Grey-40);
    }

    &[type="radio"] {
      position: relative;
      order: 1;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 8px;
      resize: none;
    }
  }

  textarea {
    border-radius: 8px;
    border: 1px solid var(--Grey-15);
    background: var(--Grey-10);
    padding: 0.8em 2%;
  }
`;


const FormComponent = ({formRows}) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const handleCheckboxSelect = (id) => {
    setSelectedCheckbox(id);
  };

  return (
    <FormItem>
      <Form 
      className="d-flex flex-column align-items-center" 
      noValidate validated={validated} onSubmit={handleSubmit}>
        
        {formRows.map((row, index) => (
          <Row key={index} className="mb-3 w-100">
            {row.map((input, inputIndex) => (
              <Form.Group
                key={inputIndex}
                as={Col}
                md={input.md}
                controlId={input.id}
              >
                <Form.Label>{input.label}</Form.Label>
                {input.options ? (
                  <SelectItem width={input.width} required>
                    <option selected disabled>
                      {input.option}
                    </option>
                    {input.options.map((op, index) => (
                      <option value={op} key={index}>
                        {op}
                      </option>
                    ))}
                  </SelectItem>
                ) : input.inputs ? (
                  <Row>
                    {input.inputs.map((radio, radioIndex) => (
                      <InputGroup as={Col} className="mb-3" key={radioIndex}>
                        <input
                          type="radio"
                          id={radio.id}
                          aria-label="Checkbox for following text input"
                          onClick={() => handleCheckboxSelect(radio.id)}
                          checked={selectedCheckbox === radio.id}
                        />
                        <Form.Control
                          placeholder={radio.placeholder}
                          aria-label="Text input with checkbox"
                          required
                        />
                      </InputGroup>
                    ))}
                  </Row>
                ) : (
                  <Form.Control 
                  placeholder={input.placeholder}
                  required
                  />
                )}

                <Form.Control.Feedback type="invalid">
                  {input.feedback}
                </Form.Control.Feedback>
              </Form.Group>
            ))}
          </Row>
        ))}

        <Form.Group className="my-3 w-100" as={Col} controlId="validationCustom05">
                <Form.Label>Message</Form.Label>
                <FloatingLabel controlId="floatingTextarea" label="Enter your Message here..">
                    <Form.Control
                    as="textarea"
                    placeholder="Enter your Message here.."
                    style={{ height: '200px' }}
                    />
                </FloatingLabel>
        </Form.Group>

      
            
          <Row className="d-flex justify-content-between w-100">

            <Col 
            lg={6}   
            >
              <Form.Check
                className = "d-flex gap-2 text-light align-items-center"
                required
                label=" I agree with Terms of Use and Privacy Policy"
                feedback="You must agree before submitting."
                feedbackType="invalid"
             
              />
            </Col>

            <Col
              className="p-0 d-flex justify-content-end mt-3 align-items-center"
              lg={6}
            >
              <ButtonTemplate
                buttonwidth={"200px"}
                buttoncolor={"var(--Purple-60)"}
                content="Send Your Message"
              />

            </Col>
            
          </Row>
      </Form>

    </FormItem>
  );
};

export default FormComponent;
