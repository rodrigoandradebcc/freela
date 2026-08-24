import { Box, Button, Container, Stack, Typography } from '@mui/material';

const Number404 = () => {
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
            4
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
            4
        </Typography>
    );
}

export default function NotFound() {
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
            <Number404 />
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
                Ops, página não encontrada!
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
                A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível
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