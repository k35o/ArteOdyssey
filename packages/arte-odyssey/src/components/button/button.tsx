"use client";

import type { FC, PropsWithChildren } from "react";

export const Button: FC<PropsWithChildren> = ({ children }) => {
	return <button type="button">{children}</button>;
};
