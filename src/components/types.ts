interface Transition {
  duration?: string;
}

export interface HelloWorldProps {
  msg?: string;
  transition?: Transition | boolean;
}
