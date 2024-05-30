import React from "react";
import { Background } from "styling/common";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function withBase(Component) {
  const WrappedComponent = (props) => {
    return (
      <Background>
        <Component {...props} />
        <ToastContainer />
      </Background>
    );
  };

  const componentName = Component.displayName || Component.name || "Component";
  WrappedComponent.displayName = `withBase(${componentName})`;

  return WrappedComponent;
}

export default withBase;
