import * as React from "react";

export type ButtonProps = {
    /**
   * Text that should be shown within the button.
   */
  text? : string;
   /**
   * Optional CSS classes to apply styles.
   * Available classes:
   * - `btn-primary`: Changes the background color to primary color.
   * - `btn-block`: Sets the button width to 100%.
   * - `btn-md`: Sets the button width to 75%.
   * - `btn-sm`: Sets the button width to 50%.
   */
  classes?: string;
  icon?:  React.ReactNode;
  type?:  "button" | "submit" | "reset";
  style?: React.CSSProperties;
  val?: string;
  onClick?: (event:React.MouseEvent<HTMLButtonElement>) => void;
}