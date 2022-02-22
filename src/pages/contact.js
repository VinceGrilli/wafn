import React from 'react';
import styled from 'styled-components';
import SEO from '../components/SEO';
import StoreLayout from '../components/StoreLayout';
import useForm from '../utils/useForm';

const FormStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  fieldset {
    grid-column: span 2;
    max-height: 600px;
    overflow: auto;
    display: grid;
    gap: 1rem;
    align-content: start;
  }
  .mapleSyrup {
    display: none;
  }
  .submit {
    margin: auto;
  }
`;

export default function ContactPage() {
  const { values, updateValue } = useForm({
    name: '',
    email: '',
    message: '',
    mapleSyrup: '',
  });

  return (
    <StoreLayout>
      <SEO title="Home" keywords={[`wafn`, `offical`, `home`]} />
      <FormStyles
        name="Contact Form"
        method="POST"
        netlify="true"
        data-netlify="true"
      >
        <fieldset>
          <legend>Contact WAFN</legend>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={updateValue}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={updateValue}
            />
          </label>
          <label htmlFor="Message">
            Message
            <textarea
              type="text"
              name="message"
              id="message"
              value={values.message}
              onChange={updateValue}
            />
          </label>
          <input
            type="mapleSyrup"
            name="mapleSyrup"
            id="mapleSyrup"
            value={values.mapleSyrup}
            onChange={updateValue}
            className="mapleSyrup"
          />
          {/* TODO: Handle submit */}
          <input className="submit" type="submit" value="Submit" />
        </fieldset>
      </FormStyles>
    </StoreLayout>
  );
}
