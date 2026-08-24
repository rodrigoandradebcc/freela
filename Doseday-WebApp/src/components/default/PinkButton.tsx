import { Button } from "@mui/material";

interface PinkButtonProps {
    text: string;
    customWidth: string;
}

export default function PinkButton({ text, customWidth = '100%' }: PinkButtonProps) {
    return (
        <Button
            sx={{
                display: 'flex',
                width: customWidth,
                padding: '1rem 0.625rem',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.625rem',
                borderRadius: '6.1875rem',
                backgroundColor: '#F095BA',
                color: '#000',
                fontFamily: 'Space Grotesk',
                fontSize: '1.25rem',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '2rem'
            }}
        >
            {text}
        </Button>
    );
}
