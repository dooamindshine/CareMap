import React from "react";
import { Background } from "styling/common";

export interface BaseProps {}

function withBase<P extends object>(
  Component: React.ComponentType<P>
): React.FC<P & BaseProps> {
  const WrappedComponent: React.FC<P & BaseProps> = (props: BaseProps) => {
    return (
      <Background>
        <Component {...(props as P)} />
      </Background>
    );
  };

  const componentName = Component.displayName || Component.name || "Component";
  WrappedComponent.displayName = `withBase(${componentName})`;

  return WrappedComponent;
}

export default withBase;
