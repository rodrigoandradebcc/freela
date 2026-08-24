import { useCountdown } from "@/hooks/useCountDown";
import { Box, Typography } from "@mui/material";

export default function TimerCount() {
    const TARGET_DATE = new Date("2025-09-10T14:00:00");
    const timeLeft = useCountdown(TARGET_DATE);

    const items = [
        { value: timeLeft.days, label: "Dias" },
        { value: timeLeft.hours, label: "Horas" },
        { value: timeLeft.minutes, label: "Minutos" },
        { value: timeLeft.seconds, label: "Segundos" },
    ];

    return (
        <>
            <Typography variant="body1" fontSize="1.25rem" fontWeight="600" mt={3}>
                A pré-venda inicia em:
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    mt: 3,
                    borderRadius: "24px",
                    px: 0.5,
                    py: 1.5,
                    border: "1px solid #35271B",
                    gap: 1,
                }}
            >
                {items.map((item, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            flex: 1,
                            position: "relative",
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight="bold"
                            fontSize={{ xs: 31, xl: 45 }}
                            fontFamily="var(--font-sf-pro-display)"
                        >
                            {String(item.value).padStart(2, "0")}
                        </Typography>
                        <Typography variant="body1" fontWeight="500">
                            {item.label}
                        </Typography>

                        {idx !== items.length - 1 && (
                            <Box
                                sx={{
                                    position: "absolute",
                                    right: 0,
                                    top: "25%",
                                    height: "50%",
                                    width: "2px",
                                    backgroundColor: "#f4f4f4",
                                    borderRadius: "1px",
                                }}
                            />
                        )}
                    </Box>
                ))}
            </Box>
        </>
    );
}
