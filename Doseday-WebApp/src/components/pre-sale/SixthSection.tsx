import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Fade,
    Stack,
    Typography
} from "@mui/material";
import { useState } from "react";
import { QuestionData } from "../../@types/questionData";
import { questions } from "../../constants/Questions";
import PreSaleContainer from "./PreSaleContainer";

const Faq = () => {

    const [expanded, setExpanded] = useState<number | false>(false);

    const handleChange =
        (panelId: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panelId : false);
        };

    return (
        <>
            {questions?.map((question: QuestionData) => {
                const isOpen = expanded === question.id;

                return (
                    <Accordion
                        key={question.id}
                        expanded={isOpen}
                        onChange={handleChange(question.id)}
                        elevation={0}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignSelf: 'stretch',
                            borderRadius: '0.5rem',
                            backgroundColor: 'transparent',
                            width: '100%'
                        }}
                    >
                        <AccordionSummary
                            expandIcon={
                                <Fade in timeout={300}>
                                    {isOpen ? <CloseIcon htmlColor="#35271B" /> : <AddIcon htmlColor="#F4EDE3" />}
                                </Fade>
                            }
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{
                                display: "flex",
                                padding: "0.75rem 1.25rem",
                                alignItems: "center",
                                gap: "0.75rem",
                                alignSelf: "stretch",
                                borderRadius: "0.5rem",
                                border: "1px solid rgba(255, 255, 255, 0.40)",
                                backgroundColor: isOpen ? "#F095BA" : "#35271B",
                                '&.Mui-expanded': {
                                    minHeight: 48,
                                },
                                '& .MuiAccordionSummary-content': {
                                    margin: '1rem',
                                },
                                '& .MuiAccordionSummary-content.Mui-expanded': {
                                    margin: '1rem',
                                },
                            }}
                        >
                            <Typography
                                component="span"
                                sx={{
                                    flex: "1 0 0",
                                    color: isOpen ? "#35271B" : "#F4EDE3",
                                    fontFamily: "Maven Pro",
                                    fontSize: { xs: "1.125rem", lg: "1.25rem" },
                                    fontStyle: "normal",
                                    fontWeight: "700",
                                    lineHeight: "normal"
                                }}
                            >
                                {question.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{
                            display: 'flex',
                            paddingTop: '1rem',
                            gap: '0.5rem',
                            alignSelf: 'stretch',
                            backgroundColor: '#F4EDE3',
                            boxShadow: 'none'
                        }}>
                            <Typography sx={{
                                backgroundColor: '#F4EDE3',
                                color: '#282828',
                                fontFamily: 'Maven Pro',
                                fontSize: '1.25rem',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                lineHeight: '1.875rem',
                            }}>{question.content}</Typography>
                        </AccordionDetails>
                    </Accordion >
                );
            })}
        </>
    );
};

export default function SixthSection() {
    return (
        <PreSaleContainer
            maxWidth="xl"
            component={Stack}
            gap={3}
            bgcolor="#F4EDE3"
            sx={{
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Typography
                sx={{
                    color: "#35271B",
                    textAlign: "center",
                    fontFamily: "Kombin",
                    fontSize: { xs: "1.5rem", lg: "2.25rem" },
                    fontStyle: "normal",
                    fontWeight: "400",
                    lineHeight: "normal",
                    paddingBottom: "1.5rem"
                }}
            >
                Perguntas Frequentes
            </Typography>
            <Faq />
        </PreSaleContainer >
    );
}