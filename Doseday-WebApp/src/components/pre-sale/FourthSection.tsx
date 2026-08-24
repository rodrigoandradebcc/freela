import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import PreSaleContainer from "./PreSaleContainer";

interface CourseBoxProps {
    imageUrl: string;
    title: string;
    content: string;
}

const CourseBox = ({ imageUrl, title, content }: CourseBoxProps) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.only('xs'));

    return (
        <Stack
            gap={2}
            direction={isMobile ? 'column' : 'row'}
            padding="0.75rem 0rem"
            borderRadius="0.5rem"
            alignItems={{ xs: "center", lg: "flex-start" }}
        >
            <Image
                src={imageUrl}
                alt="Doseday"
                width={52}
                height={52}
                objectFit='cover'
            />
            <Stack
                gap={1}
                justifyContent="center"
                flex="1 0 0"
            >
                <Typography
                    alignSelf="stretch"
                    color="#35271B"
                    fontFamily="Kombin"
                    fontSize="1.25rem"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="1.625rem"
                    textAlign={{ xs: "center", lg: "start" }}
                >
                    {title}
                </Typography>
                <Typography
                    alignSelf="stretch"
                    color="#35271B"
                    fontFamily="Space Grotesk"
                    fontSize="1rem"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="1.5rem"
                    textAlign={{ xs: "center", lg: "start" }}
                >
                    {content}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default function FourthSection() {
    return (
        <PreSaleContainer
            maxWidth="xl"
            component={Stack}
            direction={{ xs: 'column', lg: 'row' }}
            gap={6}
            alignSelf="stretch"
            bgcolor="#F4EDE3"
        >
            <Stack gap={2} alignItems={{ xs: "center", lg: "start" }}>
                <Stack
                    gap={2}
                    justifyContent="center"
                    flex="1 0 0"
                    width="100%"
                    textAlign={{ xs: "center", lg: "start" }}
                    alignItems={{ xs: "center", lg: "start" }}
                >
                    <Typography
                        color="#35271B"
                        fontFamily="Kombin"
                        fontSize={{ xs: "1.75rem", lg: "2.25rem" }}
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight={{ xs: "2.25rem", lg: "normal" }}
                    >
                        O café funcional mais
                        <br />
                        completo do Brasil
                    </Typography>
                    <Typography
                        color="#35271B"
                        fontFamily="Space Grotesk"
                        fontSize={{ xs: "1rem", lg: "1.5rem" }}
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight={{ xs: "1.5rem", lg: "1.75rem" }}
                    >
                        Com tudo que os melhores cafés funcionais do mercado
                        <br />
                        oferecem é um diferencial que só a DoseDay entrega:
                        <br />
                        ingredientes que cuidam da sua pele, do seu corpo e da sua
                        autoestima.
                    </Typography>
                </Stack>
                <CourseBox
                    imageUrl={"/pre-sale/fourth-section/first-course.svg"}
                    title={"Beleza de dentro pra fora"}
                    content={"Colágeno Verisol, Biotina e vitaminas antioxidantes."}
                />
                <CourseBox
                    imageUrl={"/pre-sale/fourth-section/second-course.svg"}
                    title={"Leveza real"}
                    content={
                        "Reduz o inchaço e ativa o metabolismo com ingredientes naturais."
                    }
                />
                <CourseBox
                    imageUrl={"/pre-sale/fourth-section/third-course.svg"}
                    title={"Energia limpa"}
                    content={"Cafeína time-release, CoQ10 e vitaminas do complexo B."}
                />
            </Stack>
            <Stack gap={4} width='100%' direction='row' justifyContent='center'>
                <Stack gap={4} justifyContent='center'>
                    <Box
                        component="img"
                        src="/pre-sale/fourth-section/photo-fourth-section-1.webp"
                        sx={{
                            height: { xs: '12.61825rem', lg: '20.75rem' },
                            flexShrink: '0',
                            alignSelf: 'stretch',
                            borderRadius: { xs: '0.57013rem', lg: '0.9375rem' },
                            width: '100%',
                            objectFit: "cover"
                        }}
                    />
                    <Box
                        component="img"
                        src="/pre-sale/fourth-section/photo-fourth-section-2.webp"
                        sx={{
                            height: { xs: '10.52788rem', lg: '17.3125rem' },
                            flexShrink: '0',
                            alignSelf: 'stretch',
                            borderRadius: { xs: '0.57013rem', lg: '0.9375rem' },
                            width: '100%',
                            objectFit: "cover"
                        }}
                    />
                </Stack>
                <Stack gap={4} justifyContent='center'>
                    <Box
                        component="img"
                        src="/pre-sale/fourth-section/photo-fourth-section-3.webp"
                        sx={{
                            height: { xs: '7.52531rem', lg: '12.375rem' },
                            flexShrink: '0',
                            alignSelf: 'stretch',
                            borderRadius: { xs: '0.57013rem', lg: '0.9375rem' },
                            width: '100%',
                            objectFit: "cover"
                        }}
                    />
                    <Box
                        component="img"
                        src="/pre-sale/fourth-section/photo-fourth-section-4.webp"
                        sx={{
                            height: { xs: '15.62075rem', lg: '25.6875rem' },
                            flexShrink: '0',
                            alignSelf: 'stretch',
                            borderRadius: { xs: '0.57013rem', lg: '0.9375rem' },
                            width: '100%',
                            objectFit: "cover"
                        }}
                    />
                </Stack>
            </Stack >
        </PreSaleContainer>
    );
}
