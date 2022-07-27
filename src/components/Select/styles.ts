import { StylesConfig } from "react-select";
import { ITipsOption } from "../../types";

export const stylesConfig: StylesConfig<ITipsOption> = {
  option: styles => ({
    ...styles,
    background: "#FFFFFF",
  }),
  control: styles => ({
    ...styles,
    width: "327.5px",
    height: "68.35px",
    borderRadius: "30px",
    background: "#FFFFFF",
    marginBottom: "45px",
    fontFamily: "Arial",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "26px",
    textAlign: "center",
    color: "#756C6C",
  }),
};
