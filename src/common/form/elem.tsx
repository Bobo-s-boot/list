import React, { FormEvent, FormEventHandler, ReactNode } from 'react';

import styled from 'styled-components';

export const Elem: React.FC<{
  children: ReactNode;
  onSubmit: FormEventHandler;
  className?: string;
}> = ({ children, onSubmit, className }) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(event);
  };
  return (
    <Form onSubmit={handleSubmit} className={className}>
      {children}
      <Input type="button" />
    </Form>
  );
};

const Form = styled.form<{}>`
  width: 100%;
`;

const Input = styled.input`
  display: none;
`;
