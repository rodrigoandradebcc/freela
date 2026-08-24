"use client";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Header() {
    return (
        <Stack
            direction="row"
            padding="0.5rem 0"
            justifyContent="center"
            alignItems="center"
            gap={1}
            alignSelf="stretch"
            bgcolor="#F87F0E"
        >
            <Image
                src="/upsell/alert-icon.svg"
                alt="Alerta"
                width={29}
                height={29}
            />
            <Typography
                maxWidth="80%"
                color="#F4EDE3"
                textAlign="center"
                fontFamily="Inter"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="2rem"
                sx={{
                    mobile: {
                        fontSize: "1rem",
                    },
                    tablet: {
                        fontSize: "1.2rem",
                    },
                }}
            >
                Atenção, sua compra ainda não foi finalizada.
            </Typography>
        </Stack>
    );
}