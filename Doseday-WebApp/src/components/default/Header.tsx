import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Container, Grid, IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";
import { BREAKPOINTS } from "../../@types/breakpoints";
import { LOGO_VARIANTS } from "../../@types/logoVariants";
import Logo from "./Logo";
import { redirect } from "next/navigation";

export default function Header() {
    const theme = useTheme();
    const isTabletOrSmaller = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Container
            component={Stack}
            direction="row"
            paddingY="2rem"
            alignItems="center"
            alignSelf="stretch"
            sx={{
                background: "#fff",
                [BREAKPOINTS.mobile]: {
                    maxWidth: "xs"
                },
                [BREAKPOINTS.tablet]: {
                    maxWidth: "md"
                },
                [BREAKPOINTS.desktop]: {
                    maxWidth: "lg"
                },
                [BREAKPOINTS.large]: {
                    maxWidth: "2xl",
                },
            }}
        >
            <Grid container width="100%" columns={3} >
                <Grid item xs={1} display="flex" alignItems="center" justifyContent="flex-start">
                    {isTabletOrSmaller
                        ? <IconButton
                            onClick={() => redirect("/")}
                            sx={{
                                color: "#35271B",
                            }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        : <Button
                            onClick={() => redirect("/")}
                            startIcon={<ArrowBackIcon />}
                            sx={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.3125rem",
                                color: "#35271B",
                                fontFamily: "var(--font-sf-pro-display)",
                                fontSize: { xs: "0.8rem", md: "1.125rem" },
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight: "110%",
                                textTransform: "none",
                            }}
                        >
                            Voltar para página inicial
                        </Button>}
                </Grid>

                <Grid item xs={1} display="flex" justifyContent="center" >
                    <Logo
                        variant={LOGO_VARIANTS.dark}
                        enableRedirect={true}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
