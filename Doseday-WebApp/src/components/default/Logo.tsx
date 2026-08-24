import Image from "next/image";
import { redirect } from "next/navigation";
import { LOGO_VARIANTS, LogoVariantsType } from "../../@types/logoVariants";

export const VARIANTS_SRC: Record<LogoVariantsType, string> = {
    "light": "/default/light-logo.svg",
    "dark": "/default/dark-logo.svg"
} as const;

interface LogoProps {
    variant?: keyof typeof VARIANTS_SRC;
    width?: number;
    height?: number;
    enableRedirect?: boolean;
}

export default function Logo({ variant = LOGO_VARIANTS.light, width = 118, height = 66, enableRedirect = false }: LogoProps) {
    return (
        <Image
            onClick={() => enableRedirect ? redirect('/') : undefined}
            src={VARIANTS_SRC[variant]}
            alt="Doseday"
            width={width}
            height={height}
            style={{
                cursor: enableRedirect ? "pointer" : "default"
            }}
        />
    );
}