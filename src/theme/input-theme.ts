export type ControlSizeType = "extraSmall" | "small" | "middle" | "large";

export const controlSizes: Record<
  ControlSizeType,
  {
    height: string;
  }
> = {
  extraSmall: {
    height: "28px",
  },
  small: {
    height: "34px",
  },
  middle: {
    height: "38px",
  },
  large: {
    height: "40px",
  },
};
