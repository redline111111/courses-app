import { DetailedHTMLProps, HTMLAttributes, HTMLProps, ReactNode } from "react";

export interface ReviewFormProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> {
   productId: string
}