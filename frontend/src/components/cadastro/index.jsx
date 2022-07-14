import React, { useState } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar } from 'rsuite';
import './style.css';
import { useHistory } from 'react-router-dom'


const Cadastro = (props) => {
  const { onClickButton = () => { } } = props;
  const [user, setUser] = useState();
  const history = useHistory();
  const navigateTo = () => history.push('/');
  function getForm(value) {
    setUser(value);
  }
  function sendInfo() {
    onClickButton(user);
  }
  return (
    <div className="body">
      <div className="form">
        <Form
          onChange={(e) => {
            getForm(e);
          }}
        >
          <h2>Bem-Vindo</h2>
          <h3>Cadastrar</h3>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl name="name" />
            <HelpBlock tooltip>Required</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Email</ControlLabel>
            <FormControl name="email" type="email" />
            <HelpBlock tooltip>Required</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Senha</ControlLabel>
            <FormControl name="password" type="password" />
            <HelpBlock tooltip>Required</HelpBlock>
          </FormGroup>
          <FormGroup>
            <ButtonToolbar>
              <Button appearance="primary" onClick={sendInfo}>
                Cadastrar
              </Button>
              <Button appearance="ghost" onClick={navigateTo}>
                Voltar
              </Button>
            </ButtonToolbar>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};
export default Cadastro;