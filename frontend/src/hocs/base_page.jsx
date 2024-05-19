import CareHeader from "components/header";
import React from "react";
import { Background } from "styling/common";

function withBase(Component) {
  const WrappedComponent = (props) => {
    return (
      <Background>
        <CareHeader/>
        <Component {...props} />
      </Background>
    );
  };

  const componentName = Component.displayName || Component.name || "Component";
  WrappedComponent.displayName = `withBase(${componentName})`;

  return WrappedComponent;
}

export default withBase;
