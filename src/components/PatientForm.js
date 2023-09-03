import {Label, Col, FormGroup} from 'reactstrap'
import {Formik, Field, Form, ErrorMessage} from 'formik'
// import validateContactForm from '../utils/validateContactForm'

const PatientForm = () => {
    const handleSubmit = (values, {resetForm}) => {
        console.log('form values:', values)
        console.log('in JSON format:', JSON.stringify(values))
        resetForm()
    }
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNum: '',
                email: '',
                agree: false,
                contactType: 'By Phone',
                feedback: ''
            }}
            onSubmit={handleSubmit}
            // validate={validateContactForm}
            >
            <Form>
                <h1>Request Appointment</h1>
                <FormGroup row>
                    <Label htmlFor='firstName' md='2'>
                        Patient's First Name
                    </Label>
                    <Col md='10'>
                        <Field 
                        className='form-control' 
                        name='firstName'
                        placeholder='First Name'
                        />
                        <ErrorMessage name='firstName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='lastName' md='2'>
                        Patient's Last Name
                    </Label>
                    <Col md='10'>
                        <Field 
                        className='form-control' 
                        name='lastName'
                        placeholder='Last Name'
                        />
                        <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='dateOfBirth' md='2'>
                        Patient's DOB
                    </Label>
                    <Col md='10'>
                        <Field 
                        className='form-control' 
                        name='dateOfBirth'
                        placeholder='Date of Birth'
                        />
                        <ErrorMessage name='lastName'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='phoneNum' md='2'>
                        Phone
                    </Label>
                    <Col md='10'>
                        <Field 
                        className='form-control' 
                        name='phoneNum'
                        placeholder='Phone'
                        />
                        <ErrorMessage name='phoneNum'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='email' md='2'>
                        Email
                    </Label>
                    <Col md='10'>
                        <Field 
                        className='form-control' 
                        name='email'
                        type='email'
                        placeholder='Email'
                        />
                        <ErrorMessage name='email'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label check md={{size: 4, offset: 2}}>
                        
                        Have you been to therapy before?
                    </Label>
                    <Col md='4'>
                        <Field 
                        className='form-control' 
                        name='contactType'
                        as='select'
                        >
                            <option>Select...</option>
                            <option>Yes</option>
                            <option>No</option>
                        </Field>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='concern' md='4'>
                        Is there a specific concern you have? If so, please elaborate.
                    </Label>
                    <Col md='10'>
                        <Field 
                        className='form-control' 
                        name='concern'
                        as='textarea'
                        rows='12'
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='length' md='2'>
                        How long has this been a concern? 
                    </Label>
                    <Col md='10'>
                        <Field 
                         className='form-control' 
                         name='contactType'
                         as='select'
                         >
                             <option>Select...</option>
                             <option>Days</option>
                             <option>Weeks</option>
                             <option>Months</option>
                             <option>Years</option>
                        </Field>
                        <ErrorMessage name='length'>
                            {(msg) => <p className='text-danger'>{msg}</p>}
                        </ErrorMessage>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Label htmlFor='specifics' md='2'>
                        If you have anything you feel is important for us to know, please add it here.
                    </Label>
                    <Col md='10'>
                        <Field 
                        className='form-control' 
                        name='specifics'
                        as='textarea'
                        rows='8'
                        />
                    </Col>
                </FormGroup>
                
                

            </Form>
        </Formik>
    )
}

export default PatientForm