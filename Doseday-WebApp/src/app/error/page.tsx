import { Typography, Box, Container, Stack, Button } from "@mui/material";

const Number500 = () => {
    return (
        <Typography
            sx={{
                color: '#35271B',
                fontFamily: 'Kombin',
                fontSize: '13rem',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: 1,
                display: 'inline-flex',
                alignItems: 'center',
                position: 'relative',
                marginBottom: 0
            }}
        >
            5
            <Box sx={{ position: 'relative', display: 'inline-block' }}>
                <Typography
                    component="span"
                    sx={{
                        color: '#F095BA',
                        fontFamily: 'Kombin',
                        fontSize: '13rem',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        lineHeight: 'normal',
                        display: 'inline-block',
                    }}
                >
                    0
                </Typography>
                <Box
                    component="img"
                    src="/default/owl.png"
                    alt="Coruja"
                    sx={{
                        position: 'absolute',
                        top: '25%',
                        left: '50%',
                        transform: 'translate(-50%, 0)',
                        width: '125px',
                        height: '125px',
                        pointerEvents: 'none',
                    }}
                />
            </Box>
            0
        </Typography>
    );
}

export default function InternalError() {
    return (
        <Container
            component={Stack}
            gap={4}
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                textAlign: 'center',
            }}>
            <Number500 />
            <Typography
                sx={{
                    color: '#35271B',
                    fontFamily: 'Kombin',
                    fontSize: '3rem',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '110%',
                    marginTop: '-3rem',
                }}
            >
                Oops, algo deu errado!
            </Typography>
            <Typography
                sx={{
                    color: '#35271B',
                    textAlign: 'center',
                    fontFamily: 'Space Grotesk',
                    fontSize: '1.5rem',
                    fontStyle: 'normal',
                    fontWeight: '400',
                    lineHeight: '150%',
                    opacity: 0.9
                }}
            >
                Desculpe, ocorreu um erro interno no servidor. Por favor, tente novamente mais tarde.
            </Typography>
            <Button href="/home" sx={{
                display: 'inline-flex',
                height: '3.5rem',
                padding: '1rem 1.5rem',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.625rem',
                flexShrink: '0',
                borderRadius: '6.1875rem',
                backgroundColor: '#F095BA',
                color: '#000',
                fontFamily: 'Space Grotesk',
                fontSize: '1rem',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '2rem'
            }}
            >
                VOLTAR PARA A PÁGINA PRINCIPAL
            </Button>
        </Container >
    );
}