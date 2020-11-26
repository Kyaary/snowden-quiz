import * as React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function App(props) {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const routeChange = () =>{ 
    let path = `newPath`; 
    history.push(path);
  }
  const onSubmit = (data) => {
    window.location.href="/quiz"
      
};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="firstName" ref={register} placeholder="Pseudo" />


      <input type="submit" />
    </form>
  );
}